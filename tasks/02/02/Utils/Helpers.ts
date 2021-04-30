import faker from "faker";

import { AnimalColors, AnimalType } from "../Types/Animal";

export const roll = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const animalColorsPool = [
  AnimalColors.BLACK,
  AnimalColors.BROWN,
  AnimalColors.WHITE,
];
export const getRandomAnimalColor = (): AnimalColors =>
  faker.random.arrayElement(animalColorsPool);

const animalTypesPool = [AnimalType.CAT, AnimalType.DOG, AnimalType.HAMSTER];
export const getRandomAnimalType = (): AnimalType =>
  faker.random.arrayElement(animalTypesPool);
