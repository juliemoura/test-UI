import { Container } from "./styles";

interface ILink {
    href: string;
    title: string;
};

const Link = ({ href, title }: ILink) => {
    return (
        <Container href={href}>{title}</Container>
    )
};

export { Link };