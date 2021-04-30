import faker from "faker";

import type { IAnimal } from "./Types/Animal";
import { AnimalColors, AnimalType } from "./Types/Animal";

import { roll } from "./Utils/Helpers";

class Animal implements IAnimal {
  private colorsPool: AnimalColors[] = [
    AnimalColors.BLACK,
    AnimalColors.BROWN,
    AnimalColors.WHITE,
  ];

  private typesPool: AnimalType[] = [
    AnimalType.CAT,
    AnimalType.DOG,
    AnimalType.HAMSTER,
  ];

  constructor(
    public name: IAnimal["name"] = faker.name.firstName(),
    public type: IAnimal["type"] = undefined,
    public colors: IAnimal["colors"] = undefined,
    public hasTail: IAnimal["hasTail"] = faker.datatype.boolean(),
    public age: IAnimal["age"] = roll(0, 10)
  ) {
    if (!colors) {
      this.colors = this.randomColor;
    }

    if (!type) {
      this.type = this.randomType;
    }
  }

  private get randomColor() {
    return [...Array(roll(1, 3))].map(() =>
      faker.random.arrayElement(this.colorsPool)
    );
  }

  private get randomType() {
    return faker.random.arrayElement(this.typesPool);
  }
}

const animals: IAnimal[] = [...Array(roll(5, 10))].map(() => new Animal());
console.log(animals);
