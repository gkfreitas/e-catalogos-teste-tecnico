import styled from 'styled-components';

// ProductTools

export const ToolsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 12px 20px 12px 20px;
  border-bottom: 2px solid #001A1E;
`;

export const ToolImage = styled.img`
  cursor: pointer;
  &:hover {
    border-radius: 99999999999px;
    background-color: transparent;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 34px;
  height: 44px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
`;

export const ImagePrewiew = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

// InfoCard

export const InfoCardContainer = styled.section`
  margin: 0px 10px 0px 10px;
  position: absolute;
  top: 100px;
  left: 0px;
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  transition-duration: 400ms;
`;

export const InfoCardHeader = styled.header`
  padding: 15px 0px 15px 0px;
  background-color: rgb(147 197 253);
  text-align: center;
`;

export const InfoCardHeaderTitle = styled.h1`
  margin: auto;
  vertical-align: middle;
  color: #001A1E;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`;

export const ButtonCloseInfoCard = styled.button`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const InfoProductContainer = styled.section`
  padding: 20px;
  color: #1e1e1e;
  font-family: 'Roboto';
  font-size: 18px;
`;

export const ProductInfo = styled.p`
  font-weight: 700;
  margin-bottom: 4px;
`;

export const ProductInfoContent = styled.span`
  font-weight: 400;
`;

export const BlackBackground = styled.div`
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`;
