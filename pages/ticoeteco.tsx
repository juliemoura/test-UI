import { TicoTeco } from "@/sections/ticoteco";
import { TestUI } from "@/themes";
import { ThemeProvider } from "styled-components";

export default function TicoETeco() {
    return (
        <ThemeProvider theme={TestUI}>
            <TicoTeco />
        </ThemeProvider>
    )
}