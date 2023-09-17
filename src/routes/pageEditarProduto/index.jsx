import { useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/listaProdutos";
import { useState } from "react";


export default function EditarProduto(){
    
    //Utilizando o HOOK useParams() para recuperar o ID passado no path
    const {id} = useParams();

    const prondutoRetornado = ListaProdutos.filter(produto => produto.id == id);
    
    //useState()
    const [produto,setProduto] = useState("NOME");



    document.title = "EDITAR PRODUTOS " + id;
    return(
        <>
            <main>
                <h1>EDITANDO PRODUTO</h1>
                <p>Valor do state = {produto}</p>

                <button onClick={()=>{setProduto("Joaquin gosta de xuxu!!")}}>Mudar o State</button>
                <p>Objeto selecionado: {prondutoRetornado[0].nome}</p>
                <form>
                    <fieldset>
                        <legend>Produto Selecionado</legend>
                        <input type="hidden" name="id" defaultValue={prondutoRetornado[0].id}/>
                        <div>
                            <label htmlFor="idProduto">Nome do produto</label>
                            <input type="text" name = "nome" id="idProd" defaultValue={prondutoRetornado[0].nome}/>
                        </div>
                        <div>
                            <label htmlFor="idDesc">Descrição</label>
                            <input type="text" name = "desc" id="idDesc" defaultValue={prondutoRetornado[0].desc}/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Descrição do produto</label>
                            <input type="text" name = "preco" id="idPreco" defaultValue={prondutoRetornado[0].preco}/>
                        </div>
                        <button>EDITAR</button>
                    </fieldset>
                </form>
            </main>
        </>
    );
}