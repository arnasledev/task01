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

// 4th and 5th tasks
// const animal: IAnimal = {
//   name: faker.name.firstName(),
//   type: AnimalType.DOG,
//   breed: "French bulldog",
//   colors: [AnimalColors.WHITE, AnimalColors.BROWN],
//   hasTail: faker.datatype.boolean(),
//   age: 2,
// };

// console.log(animal);

// 6th task, 7th task
const roll = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomAnimalColor = (): AnimalColors =>
  faker.random.arrayElement([
    AnimalColors.BLACK,
    AnimalColors.BROWN,
    AnimalColors.WHITE,
  ]);

const getRandomAnimalType = (): AnimalType =>
  faker.random.arrayElement([
    AnimalType.CAT,
    AnimalType.DOG,
    AnimalType.HAMSTER,
  ]);

const getRandomAnimal = (): IAnimal => ({
  name: faker.name.firstName(),
  type: getRandomAnimalType(),
  colors: [...Array(roll(1, 3))].map(getRandomAnimalColor),
  hasTail: faker.datatype.boolean(),
  age: roll(0, 10),
});
const animals = [...Array(roll(5, 10))].map(getRandomAnimal);

console.log(animals);
