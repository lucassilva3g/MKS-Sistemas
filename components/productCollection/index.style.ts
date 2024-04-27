import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding-top: 70px;
  flex-wrap: wrap;
  gap: 22px;
`;

export const Card = styled.div`
  display: flex;
  width: 218px;
  height: 285px;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  height: 31.91px;
  background-color: #0f52ba;
  color: #fff;
  border: none;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #093779;
    transition: 0.5s;
  }
`;

export const ProductImage = styled.img`
  margin-top: 20px;
  object-fit: contain;
`;

export const ProductPriceTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 15px;
  gap: 10px;
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 64px;
  font-size: 15px;
  font-weight: 700;
  background-color: #373737;
  padding: 0 10px;
  border-radius: 5px;
  color: #fff;
`;

export const Paragraph = styled.p`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
  padding: 0 15px;
`;
