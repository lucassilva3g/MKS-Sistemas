import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 101px;
  width: 100%;
  background-color: #0f52ba;
  justify-content: space-between;
  padding: 0 65px;
`;

export const Title = styled(motion.h1)`
  font-size: 40px;
  font-weight: 600;
  color: #fff;

  span {
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    color: #fff;
  }
`;

export const CartIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  gap: 20px;
  cursor: pointer;
`;
