import faker from "faker";

import type { IAnimal } from "./Types/Animal";

import {
  roll,
  getRandomAnimalType,
  getRandomAnimalColor,
} from "./Utils/Helpers";

const getRandomAnimal = (): IAnimal => ({
  name: faker.name.firstName(),
  type: getRandomAnimalType(),
  colors: [...Array(roll(1, 3))].map(getRandomAnimalColor),
  hasTail: faker.datatype.boolean(),
  age: roll(0, 10),
});
const animals = [...Array(roll(5, 10))].map(getRandomAnimal);

console.log(animals);
