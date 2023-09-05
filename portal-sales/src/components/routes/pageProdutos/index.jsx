import { ListaProdutos } from "../../components/listaProdutos";
import { Link } from "react-router-dom";
import {AiOutlineDelete as Excluir, AiFillEdit as Editar} from "react-icons/ai";



export default function Produtos(){
    document.title = "Lista de Produtos"
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
                            </tr>
                        ))}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan ="4">Total de produtos: {ListaProdutos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <main>
                <h1>PRODUTOS</h1>
            </main>
        </>
    );
}