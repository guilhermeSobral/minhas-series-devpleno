import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [nome, setNome] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const onChange = event => {
        setNome(event.target.value)
    }    
    const save = () => {
        axios
            .post('/generos', {
                nome
            })
            .then(res => {
                setSuccess(true)
            })
    }
    
    if(success) {
        return <Redirect to='/generos'></Redirect>
    }
    return (
        <div className='container'>
            <h1>Novo Genêro</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nomeGenero">Genêro</label>
                    <input type="text" value={nome} onChange={onChange} className="form-control" id="nomeGenero" placeholder="Nome do Genêro"></input>
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero