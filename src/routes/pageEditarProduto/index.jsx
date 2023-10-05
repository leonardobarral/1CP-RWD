import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/listaProdutos";
import { useEffect, useState } from "react";


export default function EditarProduto(){
   
    // Utizando o Navigate para mudar de página
    const navegacao = useNavigate();
    
    //Utilizando o HOOK useParams() para recuperar o ID passado no path
    const { id } = useParams();

    const [produto, setProduto] = useState({        
    id: '',
    nome: '',
    desc: '',
    preco: '',
    img: ''});


    useEffect(()=>{
        
        fetch("http://localhost:5000/produtos/"+id,{
            method:"GET",
            headers:{
                'Content-type':'application/json',
            }
        })
        .then((response)=>response.json())
        .then((data)=>{            
            setProduto(data);
        })
        .catch((err)=>console.log(err));


    },[])


    // const produtoRetornado = ListaProdutos.filter(produto => produto.id == id)[0];
    
    //useState() - Intancio o item buscado na lista em um contexto local

    // const [produto, setProduto] = useState({
    //     id: ProdutoLocal[0],
    //     nome: ProdutoLocal[1],
    //     desc: ProdutoLocal[2],
    //     preco: ProdutoLocal[3],
    //     img: ProdutoLocal[4]
    // });

    const handleChange = (event) =>{
        const{name,value} = event.target;
        setProduto({...produto,[name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // let indice;
        // ListaProdutos.forEach((item,index) => {
        //     if(item.id == id){
        //         indice = index
        //     }
        // });
        // ListaProdutos.splice(indice,1,produto);
        // alert(`Produto editado com sucesso!`);
        
        fetch(`http://localhost:5000/produtos/${id}`,{
            method:"PUT",
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(produto),
        })
        .then((response)=>response.json())

        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>console.log(err))
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
                                <input type="hidden" name="id" value={produto.id}/>
                            <div>
                                <label htmlFor="idProduto">Nome do produto</label>
                                <input type="text" name = "nome" id="idProd"  onChange={handleChange} value={produto.nome}/>
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name = "desc" id="idDesc" onChange={handleChange}  value={produto.desc}/>
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço do produto</label>
                                <input type="text" name = "preco" id="idPreco"  onChange={handleChange} value={produto.preco}/>
                            </div>
                            <button onClick={cancelar}>Cancelar</button>
                            <button>Salvar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}