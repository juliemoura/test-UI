import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { useState } from "react";
import { Button, Result } from "./styles";

const TicoTeco = () => {
    const [resultado, setResultado] = useState("");

    function ticoTeco() {
        let texto = "";
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                texto += "TicoTeco\n";
            } else if (i % 3 === 0) {
                texto += "Tico\n";
            } else if (i % 5 === 0) {
                texto += "Teco\n";
            } else {
                texto += i + "\n";
            }
        }
        setResultado(texto);
    }

    return (
        <Container>
            <div style={{ display: "flex", gap: "20px" }}>
                <Link href="/" title="Voltar à pagina inicial" />
                <Button onClick={ticoTeco}>Ver resultado</Button>
                <Button onClick={() => setResultado("")}>Limpar Resultado</Button>
            </div>
            {resultado && <Result>{resultado}</Result>}
        </Container>
    )
};

export { TicoTeco };