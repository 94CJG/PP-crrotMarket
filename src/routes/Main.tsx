import { Link } from "react-router-dom";
import styled, { css } from "styled-components"; // styled-components와 css 가져오기


// css 재사용 코드
const ImgStyle = css`
	width: 100%;
	height: 100%;
`;

const ImgDiv = css`
	width: 650px;
	height: 700px;
`;

const AllBtn = css`
	background-color: #E9ECEF;
	color: #212529;
	border: none;
	border-radius: 6px;
	padding: 12px 2rem;
	margin-right: 10px;
`;

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
//end

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
							<img src="assets/img01.png" alt="상단 이미지" />
						</TopImg>
					</div>
					{/* <img src="./assets/img01.png" alt="메인 이미지" /> */}
				</MainTop>
			</MainBg>

			{/* 중단 */}
			<MainMid>
				<MidCnt>
					<MidImg>
						<img src="assets/img02.png" alt="중단 이미지2" />
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

			{/* 중단2 */}

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
 */


/**
 * 						<div>
							<p>동네생활</p>
							<h1>이웃만 아는 <br/>동네 정보와 이야기</h1>
							<p>우리동네의 다양한 정보와 이야기를 <br/>공감과 댓글로 나누어요.</p>
							<ul className="">
								<li>
									<div>이미지1</div>
									<p>동네모임</p>
									<p>근처 이웃들과 동네 이야기를 해보세요.</p>
								</li>
								<li>
									<div>이미지2</div>
									<p>동네질문</p>
									<p>궁금한게 있을 땐 <br/> 이웃에 물어보세요.</p>
								</li>
								<li>
									<div>이미지3</div>
									<p>동네분실센터</p>
									<p>무언가를 잃어버렸다면 <br/> 글을 올려보세요.</p>
								</li>
							</ul>
						</div>
 */