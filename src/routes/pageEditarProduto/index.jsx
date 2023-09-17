import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/listaProdutos";
import { useState } from "react";


export default function EditarProduto(){
   
    // Utizando o Navigate para mudar de página
    const navegacao = useNavigate();
    
    //Utilizando o HOOK useParams() para recuperar o ID passado no path
    const { id } = useParams();

    const produtoRetornado = ListaProdutos.filter(produto => produto.id == id)[0];
    
    //useState() - Intancio o item buscado na lista em um contexto local
    const [produto, setProduto] = useState({
        id: produtoRetornado.id,
        nome: produtoRetornado.nome,
        desc: produtoRetornado.desc,
        preco: produtoRetornado.preco,
        img: produtoRetornado.img
    });

    const handleChange = (event) =>{
        const{name,value} = event.target;
        setProduto({...produto,[name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        ListaProdutos.forEach((item,index) => {
            if(item.id == id){
                indice = index
            }
        });
        ListaProdutos.splice(indice,1,produto);
        // alert(`Produto editado com sucesso!`);
        navegacao("/produtos"); 
    }

    const cancelar = () => {
        return navegacao("/produtos")
    }

    document.title = "Edt. Produto " + id;

    // <h1>EDITANDO PRODUTO</h1>
    return(
        <>  
            <div>
                <h1>Editar Produto</h1>
                <div>
                    <p>Nome : {produto.nome}</p>
                    <p>Desc : {produto.desc}</p>
                    <p>Preço : {produto.preco}</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                                <legend>Produto Selecionado</legend>
                                <input type="hidden" name="id" ondefaultValue={produto.id}/>
                            <div>
                                <label htmlFor="idProduto">Nome do produto</label>
                                <input type="text" name = "nome" id="idProd"  onChange={handleChange} defaultValue={produto.nome}/>
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name = "desc" id="idDesc" onChange={handleChange}  defaultValue={produto.desc}/>
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço do produto</label>
                                <input type="text" name = "preco" id="idPreco"  onChange={handleChange} defaultValue={produto.preco}/>
                            </div>
                            <button onClick={cancelar}>Cancelar</button>
                            <button onClick="submit">Salvar</button>
                            {/* <button>Salvar</button> */}
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}