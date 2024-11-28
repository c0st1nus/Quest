import React from "react";
import styled, { css, keyframes } from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  time?: boolean;
}

const backgroundColorAnimation = keyframes`
  0% {
    background-color: #197e19;
  }
  100% {
    background-color: #4F6A88;
  }
`;

const backgroundColorAnimation2 = keyframes`
  0% {
    background-color: #af1414;
  }
  100% {
    background-color: #4F6A88;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  margin-top: 20px;
  background-color: #4F6A88;
  color: #62BEC1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 500;
  width: max-content;
  padding: 10px 40px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  position: relative;
  user-select: none;

  ${(props) =>
    props.time
      ? css`
          &:after {
            content: "";
            display: block;
            position: absolute;
            border-radius: 30px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%; 
            opacity: 0;
            transition: all 0.5s;
            box-shadow: 0 0 10px 10px white;
          }

          &:active:after {
            box-shadow: 0 0 0 0 white;
            position: absolute;
            border-radius: 30px;
            left: 0;
            top: 0;
            opacity: 1;
            transition: 0s;
          }

          &:active {
            background-color: #197e19;
            top: 1px;
            animation: ${backgroundColorAnimation} 2s forwards;
          }
        `
      : css`
          &:active {
            animation: ${backgroundColorAnimation2} 2s forwards;
          }
      `}
`;

export const Button: React.FC<ButtonProps> = ({ onClick, children, size, time }) => {
  return (
    <StyledButton onClick={onClick} size={size} time={time}>
      {children}
    </StyledButton>
  );
};