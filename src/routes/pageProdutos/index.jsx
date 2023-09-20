import { ListaProdutos } from "../../components/listaProdutos";
import { Link } from "react-router-dom";
import {AiOutlineDelete as Excluir, AiFillEdit as Editar} from "react-icons/ai";
import "./pageProdutos.css"
import { useEffect,useState } from "react";

export default function Produtos(){

    document.title = "Lista de Produtos"

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


    },[])

    // useEffect(()=>{
    //     setExemplo(ListaProdutos)
    //   console.log("Use-Effect que será renderizado o objeto ou componente ou elemento que está no array de depenências sofrer atualização.");
    // },[count]);

    return(
        <>
    
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Editar|Excluir</th>
                            <th>Imagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutoLocal.map((produto,index) =>(
                            <tr key = {index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    <Link to={`/editar/produto/${produto.id}`}><Editar/></Link> |
                                    <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link>
                                </td>
                                <td><img src={produto.img} alt={produto.desc}/></td>
                            </tr>
                        ))}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan ="5">Total de produtos: {ListaProdutos.length}</td>
                            <td colSpan ="1">
                                <Link to={`/incluir/produto`}>Incluir Produto</Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>
    );
}


    // const [exemplo, setExemplo] = useState([{}]);
    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //   console.log("Use-Effect que será sempre renderizado!");
    // });

    // useEffect(()=>{
    //   console.log("Use-Effect que será renderizado apenas 1 vez!");
    //     setExemplo(ListaProdutos);
    // },[]);

    // useEffect(()=>{
    //   console.log("Use-Effect que será renderizado o objeto ou componente ou elemento que está no array de depenências sofrer atualização.");
    // },[count]);