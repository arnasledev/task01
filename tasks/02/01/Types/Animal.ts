export enum AnimalType {
  DOG = "dog",
  CAT = "cat",
  HAMSTER = "hamster",
}

export enum AnimalColors {
  WHITE = "white",
  BROWN = "brown",
  BLACK = "black",
}

export interface IAnimal {
  name: string;
  type: AnimalType;
  breed?: string;
  colors: AnimalColors[];
  hasTail: boolean;
  age: number;
}
