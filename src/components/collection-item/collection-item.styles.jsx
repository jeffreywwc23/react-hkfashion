import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom:50px;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 30vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 235px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    min-width: unset;
    padding: 0 10px;
  }

  @media screen and (max-width: 570px) {
    display: block;
    width: 140px;
    padding: 0 10px;
  }
`;

AddButton.displayName = 'AddButton';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media screen and (max-width: 570px) {
  width: 200%;
  }
`;

BackgroundImage.displayName = 'BackgroundImage';


export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 570px) {
  width: 180px;
  }
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    text-align: left;
  }
`;

PriceContainer.displayName = 'PriceContainer';
