import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/listaProdutos";

export default function ExcluirProduto(){

    document.title = "Exclusão Produto"
    const {id} = useParams();
    const navigate = useNavigate();

    const produto = ListaProdutos.filter((intem)=>item.id == id)[0];

    

    return(
        <>
            
            <h1>ExcluirProduto</h1>
            <div>
                <h2>Produto Selecionado Para Exclusão</h2>
                <h3>Você tem certeza que deseja excluir este produto?</h3>
                <figure>
                    <img src="" alt="" />
                    <figcaption>
                        Nome - R$ Preço
                    </figcaption>
                    <button>Excluir</button>
                    <button>Cancelar</button>
                </figure>
            </div>
            
        </>
    );
}