import { useContext, useState } from "react";
import { ModalContext } from "./provider/ModalProvider";
import { Ul } from "./style";

function App() {
  const { openModal, closeModal, setContent } = useContext(ModalContext);
  const [count, setCount] = useState(0);
  console.log(count);

  const openExampleModal = () => {
    setContent(
      <div>
        <h3>카운트: {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    );
    openModal();
  };

  return (
    <>
      <h1>React Test</h1>
      <Ul>
        <li>
          <button onClick={openExampleModal}>모달 띄우기</button>
          <button>스낵바 띄우기</button>
        </li>
      </Ul>
    </>
  );
}

export default App;
