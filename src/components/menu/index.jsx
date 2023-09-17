import { Link } from "react-router-dom";
import { ListaProdutos } from "../listaProdutos";

export default function Menu(){

    return(
        <>

            <nav>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/produtos">Produto</Link>
                <span> | </span>
                <Link to="/editar/produto/1">Editar Produto</Link>
                <span> | </span>
                <Link to="/excluir/produto/1">Excluir Produto</Link>
                <span> | </span>
                <Link to={`/incluir/produto/${ListaProdutos.length+1}`}>Incluir Produto</Link>
            </nav>

        </>
        
    )
}
