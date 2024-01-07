import MyController from "./controllers/MyController";

export default function startApp() {
  const myController = new MyController();
  myController.initialize();
}
