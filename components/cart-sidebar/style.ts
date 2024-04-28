import { motion } from "framer-motion";
import styled from "styled-components";

export const Sidebar = styled(motion.div)`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: #0f52ba;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
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

export const ProductsContainer = styled.div`
  overflow-y: auto;
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

export const CartItemPrice = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: #000;
`;

export const RemoveProductButton = styled.button`
  position: absolute;
  top: 167px;
  right: 5px;
  font-size: 15px;
  background-color: #000;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;
`;
