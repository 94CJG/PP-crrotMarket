import { Link } from "react-router-dom";
import styled from "styled-components";

const TopContainer = styled.div`
	background-color: #fff;
	position: sticky;
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
	height: 7rem;
	li {
		text-align: center;
		font-size: 1.2rem;
		margin-right: 1.5rem;
		font-weight: 600;
	}
	.logo{
		width: 65px;
		margin: 0;
	}
	.logo_a {
		width: 100%;
		display: block;
	}
	.logImg {
		width: 100%;
	}
`;

const NavList = styled.ul`
	display: flex;
`;

const HdInput = styled.input`
	height: 2.5rem;
	border-radius: 0.6rem;
	border: none;
	background-color: #f2f3f6;
	width: 14rem;
`;

const HdTalk = styled.button`
	background-color: #ffffff;
	cursor: pointer;
	border: 1px solid #d1d3d8;
	appearance: none;
	height: 2.5rem;
	border-radius: 0.4rem;
	margin-left: 1.5rem;
`;



function Header() {
	return (
		<TopContainer>
			<HdInner>
				<div className="logo">
					<Link to="/" className="logo_a">
						<img className="logImg" src="/assets/logo.png" alt="로고" />
					</Link>
				</div>
				<nav className="header_nav" role="navigation" aria-label="메인 메뉴">
					<NavList>
						<li><Link to="/Fleamarket">중고거래</Link></li>
						<li><Link to="/AreaStores">동네가게</Link></li>
						<li><Link to="/Jobs">알바</Link></li>
						<li><Link to="/Realty">부동산 직거래</Link></li>
						<li><Link to="/Car">중고차 직거래</Link></li>
					</NavList>
				</nav>
				<div className="search">
					<HdInput type="text" placeholder="  물품이나 동네를 검색 해보세요" />
					<HdTalk>채팅하기</HdTalk>
				</div>
			</HdInner>
		</TopContainer>
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