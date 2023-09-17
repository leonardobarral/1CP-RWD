import { ListaProdutos } from "../../components/listaProdutos";
import { Link } from "react-router-dom";
import {AiOutlineDelete as Excluir, AiFillEdit as Editar} from "react-icons/ai";
import "./pageProdutos.css"
// import { useEffect } from "react";



export default function Produtos(){
    document.title = "Lista de Produtos"

    // const [exemplo, setExemplo] = useEffect([{}]);
    // const [count, setCount] = useEffect(0);


    // useEfect(()=>{
    //     console.log("Use-Effect que será rederizado apenas 1 vez");

    //     setExemplo(ListaProdutos)

    // },[])

    // useEffect(()=>{
    //     console.log("Use-Effect que será sempre");
    // })

    // useEffect(()=>{
    //     console.log("Use-Effect que será rederizado quando o objeto, componente ou elemento que está no array dependênica sofrer atualização");
    // },[])



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
                        {ListaProdutos.map((produto,index) =>(
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
                                <td>
                                    <Link to={`/incluir/produto/${ListaProdutos.length + 1}`}>Incluir Produto</Link>
                                </td>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>
    );
}