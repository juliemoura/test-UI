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
  width: max-content;

  &:hover {
    background: ${({ theme }) => theme.colors.purple100};
    cursor: pointer;
  }
`;

export const Title = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.fs100};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
`;

export const Form = styled.form`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  padding: 10px 20px;
  border-radius: 5px;
`;
