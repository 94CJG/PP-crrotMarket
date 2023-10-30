import Modal from 'react-modal';

interface IState {
	isOpen:boolean,
	message: string,
	onRequestClose: () => void
}

Modal.setAppElement('#root'); // 모달이 렌더링될 요소 설정

function ErrorModal({ isOpen, message, onRequestClose }:IState) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>에러 발생</h2>
      <p>{message}</p>
      <button onClick={onRequestClose}>닫기</button>
    </Modal>
  );
}

export default ErrorModal;
