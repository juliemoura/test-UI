import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { useState } from "react";
import { Button, Form, Input, Title } from "./styles";

function isPalindrome(s: string): boolean {
    const regex = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const stringReversedJoin = regex.split('').reverse().join('');
    return regex === stringReversedJoin;
};

const Palindromos = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isPalindromeResult = isPalindrome(inputValue);
        alert(`${isPalindromeResult}`);
    };

    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Title>
                    Insira uma palavra:
                    <Input type="text" value={inputValue} onChange={handleInputChange} />
                </Title>
                <Button type="submit">Verificar</Button>
                <Link href="/" title="Voltar à pagina inicial" />
            </Form>
        </Container>
    )
};

export { Palindromos };