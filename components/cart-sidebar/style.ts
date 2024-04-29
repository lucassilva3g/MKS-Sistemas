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

export const ProductImage = styled.img`
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const CartProducts = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 95px;
  width: 360px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    height: fit-content;
    padding: 20px;
    width: 280px;
  }
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
  padding-top: 20px;
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

export const QuantitySelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: -50px;
    padding-right: 120px;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
    width: 100px;
  }
`;

export const QuantitySelectorButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 6px;

  &:hover {
    background-color: #ccc;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Quantity = styled.span`
  padding: 0 10px;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  font-size: 13px;
`;

export const QuantityLabel = styled.p`
  font-size: 12px;
  padding-right: 48px;
  font-weight: 400;
  color: #000;
  margin-top: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItemPrice = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: #000;

  @media (max-width: 768px) {
    margin-left: 130px;
    background-color: #373737;
    color: #fff;
    text-align: center;
    padding: 5px;
    height: 30px;
    width: 110px;
    border-radius: 5px;
  }
`;

export const RemoveProductButton = styled.button`
  position: absolute;
  bottom: 80px;
  right: -3px;
  font-size: 12px;
  background-color: #000;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;

  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
    border-radius: 0;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    background-color: #fff;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #d3d3d3;
`;
