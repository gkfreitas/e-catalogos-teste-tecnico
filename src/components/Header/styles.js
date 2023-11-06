import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  height: 46px;
  justify-content: space-between;
  justify-items: center;
  background-color: #1CBFD8;
  padding: 0px 20px 0px 20px;
  border-radius: 0px 0px 5px 5px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const CategoryName = styled.h1`
  text-transform: uppercase;
  margin-left: 24px;
  color: #001A1E;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`;

export const CategoryButton = styled.div`
  margin: 4px;
  padding: 5px;
  text-transform: uppercase;
  background-color: #12A1B8;
  border-radius: 5px;
  color: #001A1E;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;
