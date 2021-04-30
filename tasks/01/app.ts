import faker from "faker";

enum AnimalType {
  DOG = "dog",
  CAT = "cat",
  HAMSTER = "hamster",
}

enum AnimalColors {
  WHITE = "white",
  BROWN = "brown",
  BLACK = "black",
}

interface IAnimal {
  name: string;
  type: AnimalType;
  breed?: string;
  colors: AnimalColors[];
  hasTail: boolean;
  age: number;
}

const roll = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const animalColorsPool = [
  AnimalColors.BLACK,
  AnimalColors.BROWN,
  AnimalColors.WHITE,
];
const getRandomAnimalColor = (): AnimalColors =>
  faker.random.arrayElement(animalColorsPool);

const animalTypesPool = [AnimalType.CAT, AnimalType.DOG, AnimalType.HAMSTER];
const getRandomAnimalType = (): AnimalType =>
  faker.random.arrayElement(animalTypesPool);

const getRandomAnimal = (): IAnimal => ({
  name: faker.name.firstName(),
  type: getRandomAnimalType(),
  colors: [...Array(roll(1, 3))].map(getRandomAnimalColor),
  hasTail: faker.datatype.boolean(),
  age: roll(0, 10),
});
const animals = [...Array(roll(5, 10))].map(getRandomAnimal);

console.log(animals);
