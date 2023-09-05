import { Outlet } from "react-router-dom"
// import reactLogo from "./assets/react.svg"
import Cabecalho from "./components/cabecalho"
// import Conteudo from "./components/contudo"
// import Conteudo from "./components/rodape"

      // {/* Área imperativa */}
      // <div>
      //   {/* um cabeçalho Header, um h1, uma lista ul com 3 itens com 3 links */}
      //   <Cabecalho/>
      //   {/* uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem */}
      //   <Conteudo reactLogoProps = {reactLogo}  reactLogoTextoAltPropos = {reactLogoTextoAlt}/>
      //   {/* <Rodape/> */}
      // </div>
export default function App() {
  // Área declarativa
  let reactLogoTextoAlt = "Logo React"

  return (
    <>
      <Cabecalho/>
      <Outlet/>
    </>
  )
}
