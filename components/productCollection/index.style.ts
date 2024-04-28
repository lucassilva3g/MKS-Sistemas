import { motion } from "framer-motion";
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

export const Card = styled(motion.div)`
  display: flex;
  width: 238px;
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
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2px 10px;
`;

export const ProductName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  font-size: 15px;
  font-weight: 700;
  background-color: #373737;
  padding: 0 2px;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #000;
    transition: 0.8s;
  }
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
  padding: 0 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

export const Sidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: #0f52ba;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 25px;
  background-color: #0f52ba;
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  padding: 15px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: #0a0a0a;
    transition: 0.5s;
  }
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 95px;
  width: 379px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 50px;
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

export const TotalAmount = styled.div`
  display: flex;
  font-weight: 700;
  padding-bottom: 20px;
  justify-content: space-around;
  width: 100%;
  gap: 115px;
  font-size: 25px;
  color: #fff;
`;

export const CartButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #0a0a0a;
    transition: 0.5s;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const QuantitySelectorButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 6px;
`;

export const Quantity = styled.span`
  padding: 0 10px;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  font-size: 13px;
`;
