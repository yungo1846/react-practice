import ReactDOM from "react-dom";
import App from "./App";
import ModalProvider from "./provider/ModalProvider";

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("root")
);
