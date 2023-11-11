import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import styled from "styled-components";
import ErrorModal from "../ErrorModal";
import { getValue } from '@testing-library/user-event/dist/utils';
//import {addIdLocalStorage} from '../LocalStorage'; 나중에 컴포넌트 따로 빼서 적용시켜보기

//css Start
const All = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 100px;

	.login-wrap {
		display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
		width: 750px;
		height: 450px;
		border-radius: 30px;
    border: 2px solid red;
	}
	.title {
		padding-bottom: 22px;
		font-size: 30px;
	}
`;

const InpuutP = styled.p`
	padding: 10px 0;
`;

const InputSize = styled.input`
	width: 600px;
	height: 40px;
	margin-bottom: 22px;
`;

//Form 타입지정
interface IForm {
	userName: string;
	password: string;
	nickName: string;
}




//회원가입 함수 시작
function SignUp() {
	const { 
		register, 
		handleSubmit, 
		formState: { errors },
		getValues,
	} = useForm<IForm>();
	// const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	// const [errorMessage, setErrorMessage] = useState('');
	const history = useHistory();

	/**
	 * 기존코드
	 * - 중복확인을 할 때 마다 아이디가 로컬스토리지에 저장됨.(여러번 중복 확인을 누르면 여러번 들어감)
	 *
	 * */
	const handleCheckId = () => {
		//폼에서 입력한 아이디
		const userName = getValues('userName');

		//로컬 스토리지에 있는 아이디
		const storedUserName = localStorage.getItem('userName');
		const idArray : String[] = storedUserName&&JSON.parse(storedUserName);
		console.log(idArray);

		let isExist:boolean = false;

		//폼에서 입력한 아이디와 로컬 스토리지에서 가져온 아이디가 같으면
		idArray && idArray.forEach(
			id => {
				if(id === userName){
					isExist = true;
					return;
				}
			}
		)

		//아이디가 있으면
		if(isExist){
			alert("아이디 중복");
		}else{
			alert("사용 가능한 아이디");
			// idArray.push(userName);
			// localStorage.setItem('userName',JSON.stringify(idArray));
		}

	}

	//유효성 검사 통과(회원가입 버튼)
	const onValid = (data: any) => {
		console.log('로그인 성공', data);
		history.push('/Login');
	}

	//조건부 유성검사 성공or실패

	//유효성 검사 실패
	// const onInValid = () => {
	// 	if (!errors.userName || !errors.password || !errors.nickName) {
	// 	}
	// }

	return (
		<All >
			<div className="login-wrap">
				<h1 className="title">회원가입을 해주세요.</h1>
				<form onSubmit={handleSubmit(onValid)}>
					<InpuutP>
						<span>아이디</span>
					</InpuutP>

					<InputSize 
					type='text'
					{...register("userName",
						{
							pattern: {
								message: "아이디는 a~z, 0~9 조합 및 10글자 이하로 하여 만들 수 있으며, 특수문자는 사용 불가능 합니다.",
								value: /^[a-z0-9]+$/
							},
							required: "아이디는 필수 항목입니다.",
							minLength: {
								value: 4,
								message: "아이디는 최소 4글자 이상이어야 합니다.",
							},
							maxLength: {
								value: 10,
								message: "아이디는 최대 10글자까지 허용됩니다."
							},
						})
					}
						placeholder="아이디"
					/>
					<button type='submit' id="checkid" onClick={handleCheckId}>중복확인</button>
					<p style={{color: errors.userName ? 'red' : 'blue'} }>
						{errors.userName ? errors.userName.message : "통과"}
						</p>

					<InpuutP>
						<span>닉네임</span>
					</InpuutP>
					<InputSize
					{...register("nickName",
						{
							pattern: {
								message: "닉네임은 영문 숫자 조합으로만 가능합니다.",
								value: /^[a-z0-9]+$/
							},
							required: "닉네임은 필수 항목입니다.",
							minLength: {
								value: 4,
								message: "닉네임은 최소 4글자 이상이어야 합니다.",
							},
							maxLength: {
								value: 10,
								message: "닉네임은 최대 10글자까지 허용됩니다.",
							},
						})
					}
						placeholder="닉네임"
					/>
					<p>{errors.nickName && errors.nickName.message}</p>

					<InpuutP>
						<span>비밀번호</span>
					</InpuutP>
					<InputSize 
					type='password'
					{...register("password",
						{
							pattern: {
								message: "비밀번호는 a~z, 0~9, 특수문자 !,@,#,^ 조합하여 만들 수 있습니다.",
								value: /^[a-zA-Z0-9!@#^]+$/
							},
							required: "비밀번호는 필수 항목 입니다.",
							minLength: {
								value: 4,
								message: "비밀번호는 최소 4글자 이상이어야 합니다.",
							},
							maxLength: {
								value: 10,
								message: "비밀번호는 최대 10글자까지 허용됩니다.",
							},
						})
					}
						placeholder="비밀번호"
					/>
					<p>{errors.password && errors.password.message}</p>
					<button type='submit'>회원가입</button>
					{/* <ErrorModal isOpen={isErrorModalOpen} message={errorMessage} onRequestClose={() => setIsErrorModalOpen(false)} /> */}
				</form>
			</div>
		</All>
	);
}


export default SignUp;
