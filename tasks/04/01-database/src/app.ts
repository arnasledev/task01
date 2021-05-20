import "./Utils/Bootstrap";
import Bootstrap from "./Bootstrap";
import { Animal } from "./Controllers";

const bootstrap = new Bootstrap([new Animal()]);
bootstrap.start();
