import "dotenv/config";
import { cleanEnv, str } from "envalid";

const validator = () =>
  cleanEnv(process.env, {
    ANIMALS_COUNT_MIN: str(),
    ANIMALS_COUNT_MAX: str(),
  });

validator();
