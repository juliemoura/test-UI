
import { Link } from '@/components/link'
import { TestUI } from '@/themes'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  return (
    <ThemeProvider theme={TestUI}>
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", paddingBottom: "40px" }}>
        <Link title="Tico e Teco" href="/ticoeteco" />
        <Link title="Palíndromo" href="/palindromo" />
        <Link title="Link do Github" href="https://github.com/juliemoura/test-UI" />
      </div>
    </ThemeProvider>
  )
}
