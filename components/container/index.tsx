import { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface IContainer {
    children: ReactNode | ReactNode[];
};

const Container = ({ children }: IContainer) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
};

export { Container };