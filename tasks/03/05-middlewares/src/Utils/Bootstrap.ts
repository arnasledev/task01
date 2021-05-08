import "dotenv/config";
import { cleanEnv, port } from "envalid";

const validator = () =>
  cleanEnv(process.env, {
    API_PORT: port(),
  });

validator();
