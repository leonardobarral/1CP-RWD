import { Link } from "react-router-dom";

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
            </nav>

        </>
        
    )
}
