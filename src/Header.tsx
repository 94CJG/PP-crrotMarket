import styled from "styled-components";

const TopContainer = styled.div`
	background-color: green; // 색상 변경 예정
	color: black;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	max-width: 100vw;
	z-index: 999;
`;

const Logo = styled.img`
	width: 65px;
`;

const HeaderDiv = styled.div`
  display: flex;
	width: 100%;
`;

const HdInner = styled.div`
	padding: 1.2rem 2rem;
	box-sizing: border-box;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
	position: relative;
`;


function Header() {
	return (
		<div id="header">
			<div className="hd_inner">
				<div className="logo">
					<a href="/">
						<img className="logImag" src="assets/logo.png" alt="로고" />
					</a>
				</div>
				<nav className="header_nav" role="navigation" aria-label="메인 메뉴">
					<ul>
						<li>중고거래</li>
						<li>동네가게</li>
						<li>알바</li>
						<li>부동산 직거래</li>
						<li>중고차 직거래</li>
					</ul>
				</nav>
				<input type="text" placeholder="물품이나 동네를 검색 해보세요" />
				<button>채팅하기</button>
			</div>
		</div>
	);
}

export default Header;

/**
 * 오류: 글로벌 스타일 컴포넌트가 적용이 안됨.
 * 해결: 전체적인 태그를 적용 후 그 안에 작성 해주기.
 */