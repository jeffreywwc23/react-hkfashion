import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  width: 150px;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

TitleContainer.displayName = 'TitleContainer';

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${'' /* @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  } */}

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
  }

  @media screen and (max-width: 570px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
  }

`;
