import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  border-radius: 5px;
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.fs100};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  background: ${({ theme }) => theme.colors.purple200};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.purple100};
    cursor: pointer;
  }
`;
