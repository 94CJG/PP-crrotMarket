import { Link } from "react-router-dom";
import styled, { css } from "styled-components"; // styled-components와 css 가져오기

const TextBox = css`
	display: flex;
	flex-direction: column;
`;

const FooterBox = styled.div`
	width: 1024px;
	margin: 0 auto;
`;

const FooterBoxInner = styled.div`
	display: flex;
	justify-content: space-around;

	.footer-top{
		display: flex;
		.top-text-box {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 126px;
			height: 210px;
		}
		.mid-text-box {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 126px;
			height: 210px;
		}
		.left-text-box {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 126px;
			height: 210px;
		}
	}
`;

const Stores = styled.div`
	display: flex;
	flex-direction: column;
`;

const FooterTop = styled.div`

`;

const BtnStore = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 56px;
	border-radius: 10px;
	background-color: #FF6F0F;
	padding: 14px 2rem;
	margin-right: 1rem;
	color: #fff;
	font-size: 20px;
`;


function Footer() {
	return (
		<div className="footer">
			<div className="footer-inner">
				<FooterBox>
					<FooterBoxInner>
						<div className="footer-top">
							<ul className="top-text-box">
								<li><Link to="/Fleamarket">중고거래</Link></li>
								<li><Link to="/AreaStores">동네가게</Link></li>
								<li><Link to="/Jobs">당근알바</Link></li>
								<li><Link to="/Realty">부동산 직거래</Link></li>
								<li><Link to="/Car">중고차 직거래</Link></li>
							</ul>
							<ul className="mid-text-box">
								<Link to="/"><li>당근비즈니스</li></Link>
								<Link to="/"><li>채팅하기</li></Link>
							</ul>
							<ul className="left-text-box">
								<Link to="/">자주 묻는 질문</Link>
								<Link to="/">회사 소개</Link>
								<Link to="/">인재 채용</Link>
							</ul>
						</div>
						<Stores>
							<p> 당근 앱 다운로드</p>
							<div className="btn-box">
								<BtnStore to="/https://www.daangn.com/?source_caller=ui&shortlink=duyc3blt&c=Website&pid=Website&deep_link_value=karrot%3A%2F%2Fopen%3Ffrom%3Dwebsite&af_xp=custom&afdp=karrot://open?from=website">애플</BtnStore>
								<BtnStore to="/https://www.daangn.com/?source_caller=ui&shortlink=duyc3blt&c=Website&pid=Website&deep_link_value=karrot%3A%2F%2Fopen%3Ffrom%3Dwebsite&af_xp=custom&afdp=karrot://open?from=website">구글</BtnStore>
							</div>
						</Stores>
						<div className="footer-row">
						</div>
					</FooterBoxInner>
				</FooterBox>
			</div>
		</div>
	);
}

export default Footer;