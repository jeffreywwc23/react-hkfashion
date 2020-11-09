import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.5);
			${'' /* transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95); */}
			transition: transform 2s ease-in-out;
		}

		& .content {
			opacity: 0.9;
		}
	}

	&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

MenuItemContainer.displayName = 'MenuItemContainer';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export const ContentContainer = styled.div`
  width: 150px;
  height: 90px;
  ${'' /* padding: 0 25px; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media screen and (min-width: 2000px) {
    width: 250px;
  }

  @media screen and (max-width: 630px) {
    width: 120px;
  }

  @media screen and (max-width: 370px) {
    width: 100px;
    height: 90px;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;

  @media screen and (max-width: 370px) {
    font-size: 18px;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;

  @media screen and (max-width: 370px) {
    font-size: 14px;
  }
`;
