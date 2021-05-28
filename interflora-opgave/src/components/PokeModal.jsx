import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./PokeModal.css";

const PokeModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 300);
  }, [counter]);

  return (
    <div className="poke-modal-container">
      <button className="poke-modal-btn" onClick={() => setModalIsOpen(true)}>
        Click for modal
      </button>
      <p className="poke-modal-btn">Modal will auto-open in: {counter} secs</p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: {
            color: "red",
            width: "40vw",
            position: "absolute",
            left: "30vw",
          },
        }}
      >
        <h2>Hiii</h2>
        <p>ælkækl</p>
        <button onClick={() => setModalIsOpen(false)}>Close modal</button>
      </Modal>
    </div>
  );
};
export default PokeModal;
