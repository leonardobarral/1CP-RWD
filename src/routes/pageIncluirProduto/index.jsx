import { useNavigate} from "react-router-dom";
import { ListaProdutos } from "../../components/listaProdutos";
import { useState } from "react";







export default function IncluirProduto(){
    
    const [listaProdutoLocal, setListaProdutoLocal] = useState([{}])

    useEffect(()=>{
        
        fetch("http://localhost:5000/produtos/",{
            method:"GET",
            headers:{
                'Content-type':'application/json',
            },
        })
        .then((response)=>response.json())
        .then((data)=>{
            setListaProdutoLocal(data);
        })
        .catch((err)=>console.log(err));

        let novoid = listaProdutoLocal[listaProdutoLocal.length - 1].id + 1


    },[])

    const [produto, setProduto] = useState({
        id: novoid,
        nome: "",
        desc: "",
        preco: "",
        img: "https://picsum.photos/100/100"
    });



    // Utizando o Navigate para mudar de página
    const navegacao = useNavigate();
    
    function getId(){
        let maiorId = 0;
        ListaProdutos.forEach(elemento=>{
            if (elemento.id > maiorId){
                maiorId = elemento.id;
            }
        })
        return maiorId+1;
    }   
    const newId = getId();
    
    // const [produto, setProduto] = useState({
    //     id: newId,
    //     nome: null,
    //     desc: null,
    //     preco: null,
    //     img: "https://picsum.photos/100/100"
    // });


    const handleChange = (event) =>{
        const{name,value} = event.target;
        setProduto({...produto,[name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/produtos/",{
            method: "POST",
            bory:JSON.stringify(produto),
            headers:{
                "Content-Type":"applications/json",
            }

        })
        .then((response)=> response.json())
        .then((data)=> console.log(data))
        .then(error => console.log(error))

        // if(ListaProdutos.some((elemento) => elemento.id === newId)){
        //     console.log("Erro, o indice já existe!");
        // }else{
        //     ListaProdutos.push(produto);
        // }

        // return navegacao("/produtos/"); 
    }

    const cancelar = () => {
        return navegacao("/produtos/")
    }

    document.title = "Edt. Produto " + newId;

    // <h1>EDITANDO PRODUTO</h1>
    return(
        <>  
            <div>
                <h1>Adicionar Produto</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                                <legend>Produto Selecionado</legend>
                                <input type="hidden" name="id"/>
                            <div>
                                <label htmlFor="idProduto">Nome do produto</label>
                                <input type="text" name = "nome" id="idProd"  onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name = "desc" id="idDesc" onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço do produto</label>
                                <input type="text" name = "preco" id="idPreco"  onChange={handleChange}/>
                            </div>
                            <button onClick={cancelar}>Cancelar</button>
                            <button >Salvar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}