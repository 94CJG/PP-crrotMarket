import styled from "styled-components";

const TopContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
`;

const HdInner = styled.div`
	width: 1000px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem;
	margin: 0 auto;
	li {
		text-align: center;
		font-size: 1.2rem;
		margin-right: 1.5rem;
	}
	li {
		text-align: center;
		font-size: 1.2rem;
		margin-right: 1.5rem;
	}
	.logo{
		width: 65px;
		margin: 0;
	}
	.logo_a {
		width: 100%;
		display: block;
	}
`;

const NavList = styled.ul`
	display: flex;
`;

function Header() {
	return (
		<div id="header">
			<TopContainer>
				<div className="hd_Inner">
					<HdInner>
						<div className="logo">
							<a className="logo_a" href="/">
								<img className="logImag" src="assets/logo.png" alt="로고" style={{ width: '100%' }} />
							</a>
						</div>
						<nav className="header_nav" role="navigation" aria-label="메인 메뉴">
							<ul>
								<NavList>
									<li>중고거래</li>
									<li>동네가게</li>
									<li>알바</li>
									<li>부동산 직거래</li>
									<li>중고차 직거래</li>
								</NavList>
							</ul>
						</nav>
						<div className="search">
							<input type="text" placeholder="물품이나 동네를 검색 해보세요" />
							<button>채팅하기</button>
						</div>
					</HdInner>
				</div>
			</TopContainer>
		</div>
	);
}

export default Header;

/**
 * 오류: 글로벌 스타일 컴포넌트가 적용이 안됨.
 * 해결: 전체적인 태그를 적용 후 그 안에 작성 해주기.
 * 
 * 오류: 'React'는 UMD 전역을 참조하지만 현재 파일은 모듈입니다.
 * 해결: import React from "react"; 및 tsconfig.json또는 의 jsx컴파일러 옵션이 있어야 한다.
 */