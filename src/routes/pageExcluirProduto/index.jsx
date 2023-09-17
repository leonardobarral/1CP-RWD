import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/listaProdutos";

export default function ExcluirProduto(){

    document.title = "Exclusão Produto"
    const {id} = useParams();
    const navegacao= useNavigate();

    const produto = ListaProdutos.filter((item)=>item.id == id)[0];

    const handleDelete = (evento)=>{
        let indice = ListaProdutos.findIndex(item => item.id == produto.id);
        ListaProdutos.splice(indice,1);
        navegacao("/produtos");
    }
    
    const cancelar = () => {
        return navegacao("/produtos")
    }

    const editar = ()=>{
        return navegacao(`/editar/produto/${id}`)
        
    }

    


    return(
        <>
            <div>
                <h1>ExcluirProduto</h1>
                <h2>Produto Selecionado Para Exclusão</h2>
                <div>
                    <p>Nome : {produto.nome}</p>
                    <p>Desc : {produto.desc}</p>
                    <p>Preço : {produto.preco}</p>
                </div>
                <div>
                    <h3 >Você tem certeza que deseja excluir este produto?</h3>
                    <figure>
                        <img src={produto.img} alt={produto.desc} />
                        <figcaption>
                            {produto.nome} - R$ {produto.preco}
                        </figcaption>
                    </figure>
                    <button onClick={cancelar}>Cancelar</button>
                    <button onClick={editar}>Editar</button>
                    <button onClick={handleDelete}>Excluir</button>
                </div>

            </div>
            
        </>
    );
}