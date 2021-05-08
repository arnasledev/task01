import "./Utils/Bootstrap";
import Animal from "./Models/Animal";
import { roll } from "./Utils/Helpers";

const rollMin = parseInt(process.env.ANIMALS_COUNT_MIN as string, 10);
const rollMax = parseInt(process.env.ANIMALS_COUNT_MAX as string, 10);
const animals = [...Array(roll(rollMin, rollMax))].map(() => Animal.create());

console.log(animals);
