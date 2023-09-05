import { Link } from "react-router-dom";

export default function Cabecalho(){

    return(
        <>
            
            <header>
                
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produto</Link>
                    </li>
                    <li>
                        <Link to="/editar/produto/1">Editar Produto</Link>
                    </li>
                    <li>
                        <Link to="/excluir/produto/1">Excluir Produto</Link>
                    </li>
                
                </ul>
            </header>

        </>
        
    )
}
