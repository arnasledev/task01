export enum AnimalNaming {
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
  naming: AnimalNaming;
  breed?: string;
  colors: AnimalColors[];
  hasTail: boolean;
  age: number;
}
