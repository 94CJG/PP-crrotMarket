//import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

const CoverCnt = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFF1AB;

	.cover-title{
		${CustomH1};
	}

	.cover-img{
		width: 420px;
		.fleamarket-cover-img img{
			width: 100%;
		}
	}

	.cover-desc{
		${CustomP};
	}

`;

function Fleamarket() {
	return (
		<div>
			<div className="fleamarket-cover">
				<CoverCnt>
					<div className="cover-cnt-text">
						<h1 className="cover-title">
							믿을만한<br />이웃 간 중고거래
						</h1>
						<p className="cover-desc">
							동네 주민들과 가깝고 따뜻한 거래를<br />지금 경험해보세요.
						</p>
					</div>
					<div className="cover-img">
						<span className="fleamarket-cover-img">
							<img src="assets/coverimg.png" alt="커버 이미지" />
						</span>
					</div>
				</CoverCnt>
			</div>
			<div className="product">
				
			</div>
		</div>
	);
}

export default Fleamarket;

/**
 * 질문: 현재 css를 props를 이용해서 가져올 수는 없을까?
 * 
 */
