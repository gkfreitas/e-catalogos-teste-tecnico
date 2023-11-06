import styled from 'styled-components';

// ProductSizesClosedGrid & ProductSizesOpenGrid

export const SizesContainer = styled.section`
  display: flex;
  margin: 18px 20px 0px 20px;
  justify-content: center;
  align-items: end;
`;

// ProductSizesClosedGrid

export const EqualSymbol = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PackCard = styled.div`
  margin-left: 8px;
  text-align: center;
  text-transform: uppercase;
`;

// SizeCardClosed && SizeCardOpen

export const CardContainer = styled.div`
  margin-right: 8px;
  padding: 0px 8px 0px 8px;
  position: relative;
  text-align: center;
  border: 0.2px solid #055663;
  background-color: #bbf6ff;
  border-radius: 5px;
`;

export const QuantitySize = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SizeBall = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
`;

// SizeCardOpen

export const StockBall = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
`;
