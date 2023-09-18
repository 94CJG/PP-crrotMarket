import { Link } from "react-router-dom";
import styled, { css } from "styled-components"; // styled-components와 css 가져오기

// css 재사용 코드 start
const ImgStyle = css`
	width: 100%;
	height: 100%;
`;

const ImgDiv = css`
	width: 650px;
	height: 700px;
`;

/*const AllBtn = css`
	background-color: #E9ECEF;
	color: #212529;
	border: none;
	border-radius: 6px;
	padding: 12px 2rem;
	margin-right: 10px;
`;*/

const ServiceTitle = css`
	font-weight: 700;
	font-size: 18px;
	color: #FF6F0F;
	margin-bottom: 10px;
`;

const CustomH1 = css`
	font-size: 40px;
	font-weight: 700;
	padding-bottom: 20px;
	line-height: 57px;
`;

const CustomP = css`
	font-size: 20px;
	line-height: 30px;
	font-weight: 400;
	color: #7c7c7c;
`;
// css 재사용 코드 End

const MainBg = styled.div`
	background-color: #FFFAE0;
`;

const MainTop = styled.div`
	width: 1024px;
	height: 760px;
	margin: 0 auto;
	position: relative;
	background-color:#FFFAE0;
	.home-main-desc {
		padding-top: 200px;
	}
	#download-btn {
		padding-top: 20px;
	}
	h1 {
		${CustomH1}
	}
	p {
		${CustomP}
	}
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

const TopImg = styled.div`
	position: absolute;
	top: 0;
	${ImgDiv};
	left: 400px;
	img {
		${ImgStyle}
	}
`;

const MainMid = styled.div`
	background-color: #f9f9f9;
	display: block;
`;

const MidImg = styled.div`
	${ImgDiv};
	img {
		${ImgStyle}
	}
`;

const MidCnt = styled.div`
display: flex;
width: 1024px;
margin: 0 auto;
justify-content: space-between;
.home-main-mid {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
h1 {
	${CustomH1}
}
.service-title {
	${ServiceTitle}
}
p {
	${CustomP}
}
.btn-text {
		font-size: 16px;
    line-height: 27px;
    font-weight: 700;
		background-color: #E9ECEF;
    color: #212529;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    padding: 12px 2rem;
    display: inline-block;
    margin-right: 10px;
		margin-top: 20px;
}
ul {
	display: flex;
	justify-content: space-between;
}
`;

const MidThird = styled.div`
	background-color: #FFF8F1;
`;

const MidCntTh = styled(MidCnt)`
	.home-main-third {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 14px;
	}
	.item-title {
		margin: 0.8rem 0;
	}

	.item-desc {
		width: 124px;
    margin-right: 1rem;
    margin-left: 0;
		font-size: 13px;
		color: #7c7c7c;
		line-height: 15px;
	}
	ul {
		margin-top: 4rem;
	}
`;

const MidFourth = styled(MainMid)`
	background-color: #f9f9f9;
`;

const MidCntFo = styled(MidCnt)`
`;

const MidFifth = styled(MainMid)`
	background-color: #F6FDEC;
`;

const MidFi = styled(MidCnt)`
	flex-direction: row-reverse;
`;

function Main() {
	return (
		<div id="main">
			{/* 상단 */}
			<MainBg>
				<MainTop>
					<div className="home-main-desc">
						<h1>당신 근처의 <br /> 지역 생활 커뮤니티</h1>
						<p>동네라서 가능한 모든것 <br /> 당근에서 가까운 이웃과 함께 해요.</p>
						<div id="download-btn" style={{ display: "flex" }} >
							<BtnStore to="https://play.google.com/store/apps/details?id=com.towneers.www">Google Play</BtnStore>
							<BtnStore to="https://apps.apple.com/app/id1018769995">App Store</BtnStore>
						</div>
						<TopImg>
							<img src="/assets/img01.png" alt="상단 이미지" />
						</TopImg>
					</div>
				</MainTop>
			</MainBg>

			{/* 중단 */}
			<MainMid>
				<MidCnt>
					<MidImg>
						<img src="/assets/img02.png" alt="중단 이미지2" />
					</MidImg>
					<div className="home-main-mid">
						<p className="service-title">중고거래</p>
						<h1 className="home-main-title">믿을만한 <br /> 이웃 간 중고거래</h1>
						<p className="servic-desc">동네 주민들과 가깝고 따뜻한 거래를<br />지금 경험해보세요.</p>
						<div className="btn-box">
							<Link to="/HotItems" className="btn-text">인기매물 보기</Link>
							<Link to="/Trust" className="btn-text">믿을 수 있는 중고거래</Link>
						</div>
					</div>
				</MidCnt>
			</MainMid>

			{/* 중단3 */}
			<MidThird>
				<MidCntTh>
					<div className="home-main-third">
						<p className="service-title">동네생활</p>
						<h1 className="home-main-title">이웃만 아는 <br />동네 정보와 이야기</h1>
						<p className="servic-desc">우리동네의 다양한 정보와 이야기를 <br />공감과 댓글로 나누어요.</p>
						<ul className="item-box">
							<li>
								<div>
									<img src="/assets/icon01.svg" alt="동네모임" />
								</div>
								<div className="item-title">동네모임</div>
								<div className="item-desc">
									근처 이웃들과 동네 <br /> 이야기를 해보세요.
								</div>
							</li>
							<li>
								<div>
									<img src="/assets/icon02.svg" alt="동네질문" />
								</div>
								<div className="item-title">동네질문</div>
								<div className="item-desc">
									궁금한 게 있을 땐<br /> 이웃에 물어보세요.
								</div>
							</li>
							<li>
								<div>
									<img src="/assets/icon03.svg" alt="동네모임" />
								</div>
								<div className="item-title">동네분실센터</div>
								<div className="item-desc">
									무언가를 잃어버렸다면<br /> 글을 올려보세요.
								</div>
							</li>
						</ul>
					</div>
					<MidImg>
						<img src="/assets/img03.png" alt="중단 이미지3" />
					</MidImg>
				</MidCntTh>
			</MidThird>

			{/* 중단4 */}
			<MidFourth>
				<MidCntFo>
					<MidImg>
						<img src="/assets/img04.png" alt="중단 이미지4" />
					</MidImg>
					<div className="home-main-mid">
						<p className="service-title">알바</p>
						<h1 className="home-main-title">걸어서 10분! <br /> 동네 알바 구하기</h1>
						<p className="servic-desc">당근하듯 쉽고, 편하게 <br /> 당근 알바로 동네 알바를 구할 수 있어요.</p>
						<div className="btn-box">
							<Link to="/Jobs" className="btn-text">내근처 알바 보기</Link>
						</div>
					</div>
				</MidCntFo>
			</MidFourth>

			{/* 중단5 */}
			<MidFifth>
				<MidFi>
					<MidImg>
						<img src="/assets/img05.png" alt="중단 이미지5" />
					</MidImg>
					<div className="home-main-mid">
						<p className="service-title">동네가게</p>
						<h1 className="home-main-title">내 근처에서 찾는<br /> 동네 가게</h1>
						<p className="servic-desc">이웃들의 추천 후기를 확인하고 <br /> 동네 곳곳의 가게들을 찾을 수 있어요.</p>
						<div className="btn-box">
							<Link to="/" className="btn-text">당근 동네가게 보기</Link>
						</div>
					</div>
				</MidFi>
			</MidFifth>
		</div>
	);
}

export default Main;

/**
 * 오류: 글로벌 스타일 컴포넌트가 적용이 안됨.
 * 해결: 전체적인 태그를 적용 후 그 안에 작성 해주기.
 * 
 * 오류: 'React'는 UMD 전역을 참조하지만 현재 파일은 모듈입니다.
 * 해결: import React from "react"; 및 tsconfig.json또는 의 jsx컴파일러 옵션이 있어야 한다.
 */

/**
 * 진행 하면서 알게 된 것
 * 스타일 컴포넌트에 유틸리티 css 라는 것이 있다.
 * styled와 css의 다른점은 4번째줄를 함수를 만들고, styled안에 변수로 재사용 가능하다.
 * 
 */