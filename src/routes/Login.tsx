import styled from "styled-components";
import { useForm } from 'react-hook-form';

//css 

const All = styled.div`
	width: 1420px;
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

interface IForm {
	userName: string;
	password: string;
}

function Login() {
	const { register, handleSubmit, formState: { errors } } = useForm<IForm>();
	const onValid = (data: any) => {
		console.log(data);
	};
	return (
		<All >
			<div className="login-wrap">
				<h1 className="title">로그인을 해주세요.</h1>
				<form onSubmit={handleSubmit(onValid)}>
					<InpuutP>
						<span>아이디</span>
					</InpuutP>

					<InputSize {...register("userName",
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
								message: "아이디는 최대 10글자까지 허용됩니다.",
							},
						})
					}
						placeholder="ID"
					/>
					<p>{errors.userName && errors.userName.message}</p>

					<InpuutP>
						<span>비밀번호</span>
					</InpuutP>
					<InputSize {...register("password",
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
						placeholder="PW"
					/>
					<p>{errors.password && errors.password.message}</p>
					<button type='submit'>로그인하기</button>
				</form>
			</div>
		</All>
	);
}


export default Login;
