import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axios
            .get('generos')
            .then(res => {
                setData(res.data)
            })
    }, [])

    const renderLine = record => {
        return (
            <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.nome}</td>
                <td><Link to={'/atualiza-genero/' + record.id} className='btn btn-info'>Atualizar</Link></td>
            </tr>
        )
    }
    return (
        <div className='container'>
            <h1>Generos</h1>
            <Link to='/novo-genero' className='btn btn-secondary'>Novo Genêro</Link>            
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(renderLine)}
                    </tbody>
                </table>
            </div>
    )
}

export default Generos