import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`		
	body {
		font-family: 'Titillium Web', sans-serif;
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}

	.page {
	position: absolute;
	top: 80px;
	left: 0;
	right: 0;
	}

	.fade-appear,
	.fade-enter {
	opacity: 0;
	z-index: 99;
	}

	.fade-appear-active,
	.fade-enter.fade-enter-active {
	opacity: 1;
	transition: opacity 100ms linear 150ms, transform 300ms ease-out 150ms;
	}
	
	.fade-exit {
	opacity: 1;
	}

	.fade-exit.fade-exit-active {
	opacity: 0;
	transition: opacity 10ms linear, transform 150ms ease-in;
	}
`;
