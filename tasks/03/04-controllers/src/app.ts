import "./Utils/Bootstrap";
import App from "./Bootstrap";
import { Animal } from "./Controllers";

const application = new App([new Animal()]);
application.listen();
