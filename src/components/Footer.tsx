import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components"; // styled-components와 css 가져오기

const TextBox = css`
	display: flex;
	flex-direction: column;
`;

const FooterSpanDiv = css`
	margin-bottom: 20px;
	color:#868b94;
`;

const FooterBox = styled.div`
	width: 1024px;
	margin: 0 auto;
`;

const FooterBoxInner = styled.div`
	display: flex;
	justify-content: space-between;

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
	.btn-box {
		display: flex;
	}
`;

const Stores = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	
	p{
		font-size: 20px;
		font-weight: 700;
		padding-bottom: 20px;
	}
`;

const FooterRowBoxInner = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid #eaebee;
	.footer-row {
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		.row-people {
			${FooterSpanDiv};
		}
		.job-tell{
			${FooterSpanDiv};
		}
		.adress{
			${FooterSpanDiv};
		}
	}
	.smdbox ul{
		display: flex;
	}
	.smdbox ul li{
		width: 40px;
		margin-left:30px;
	}
	.smdbox ul li a{
		display: block;
	}
	.smdbox ul li a img{
		width: 100%;
	}
	.smdbox-list {
		display: flex;
		padding-top: 20px;
	}
	`;

const BtnStore = styled.a`
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
	const location = useLocation();
	if (location.pathname === '/Login') return null;
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
								<BtnStore href="https://www.daangn.com/?source_caller=ui&shortlink=duyc3blt&c=Website&pid=Website&deep_link_value=karrot%3A%2F%2Fopen%3Ffrom%3Dwebsite&af_xp=custom&afdp=karrot://open?from=website">애플</BtnStore>
								<BtnStore href="https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko&gl=US">구글</BtnStore>
							</div>
						</Stores>
					</FooterBoxInner>
					<FooterRowBoxInner>
						<div className="footer-row">
							<div className="row-people">
								<span>
									<b>대표</b> 김용현, 황도연
								</span>
								<span> I <b>사업자번호</b> 1004-1004-1004</span>
							</div>
							<div className="job-tell">
								<span>
									<b>직업정보제공사업 신고번호</b> J1200020200016
								</span>
							</div>
							<div className="adress">
								<span>
									<b>주소</b> 서울특별시 구로구 디지털로 30길 28, 6009호(당근서비스)
								</span>
							</div>
						</div>
						<div className="smdbox">
							<div className="smdbox-list">
								<ul>
									<li>
										<a href="https://www.facebook.com/daangn" target="_blink">
											<img src="/assets/facebook.svg" alt="페이스북 로고" />
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/daangnmarket/" target="_blink">
											<img src="/assets/instargrem.svg" alt="인스타그램" />
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA" target="_blink">
											<img src="/assets/youtube.svg" alt="유튜브" />
										</a>
									</li>
									<li>
										<a href="https://blog.naver.com/daangn" target="_blink">
											<img src="/assets/naverblog.svg" alt="유튜브" />
										</a>
									</li>
								</ul>
								{/* <div className="lange">
									<select name="" id="">
										<option value="korea">한국</option>
										<option value="korea">영어</option>
										<option value="korea">일어</option>
									</select>
								</div> */}
							</div>
						</div>
					</FooterRowBoxInner>
				</FooterBox>
			</div>
		</div>
	);
}

export default Footer;

/**
 * a태그 이용
 * ㄴ아예 다른 사이트로 이동할 때 사용한다. a 태그는 새로운 html을 불러오라는 것을 의미하기 때문에, 현재 SPA에서 아예 다른 네이버같은 사이트로 이동할 때 사용한다.
 * 
 * Link to 이용시
 * Routes을 통해서 관리된다.
 */