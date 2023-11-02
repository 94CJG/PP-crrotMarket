import Modal from 'react-modal';
import './modal.css';
import styled from 'styled-components';

interface IState {
	isOpen:boolean,
	message: string,
	onRequestClose: () => void
}

//모달창 CSS
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: '#eee',
    border: '1px solid #FF6903',
  },
};

const CloseBtn = styled.button`
  padding: 5px;
  font-size: 15px;
  font-weight: 500;
  width: 100px;
  margin: auto;
  display: block;
  color: #ffff;
  background-color: #FF6903;
  margin-top: 15px;
  
`;

const CloseP = styled.p`
  font-weight: 500;
  font-size: 20px;
`;


Modal.setAppElement('#root'); // 모달이 렌더링될 요소 설정

function ErrorModal({ isOpen, message, onRequestClose }:IState) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    // className="custom-modal"
    >
      <p>{message}</p>
      <CloseP>아이디 또는 비밀번호가 유효하지 않습니다.</CloseP> {/**30번째줄 test css를 위한 작성 지울예정 */}
      <CloseBtn onClick={onRequestClose}>닫기</CloseBtn>
    </Modal>
  );
}

export default ErrorModal;
