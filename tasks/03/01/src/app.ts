import Animal from "./ Models/Animal";

import { roll } from "./Utils/Helpers";

const animals = [...Array(roll(5, 10))].map(() => Animal.create());
console.log(animals);
