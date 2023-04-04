import { Palindromos } from "@/sections/palindromo";
import { TestUI } from "@/themes/TestUI";
import { ThemeProvider } from "styled-components";

export default function Palindromo() {
    return (
        <ThemeProvider theme={TestUI}>
            <Palindromos />
        </ThemeProvider>
    )
}