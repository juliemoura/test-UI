import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.colors.fs100};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  background: ${({ theme }) => theme.colors.purple200};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.purple100};
    cursor: pointer;
  }
`;

export const Result = styled.h4`
  padding-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.fs100};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
`;
