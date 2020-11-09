import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'



const AtualizaGenero = (props) => {
    const [nome, setNome] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const id = props.match.params.id
    const onChange = evento => {
        setNome(evento.target.value)
    }

    React.useEffect(() => {
        axios.get('/generos/' + id).then(res => {
            setNome(res.data.nome)
        })

    }, [])

    const save = () => {
        axios
            .put('/generos/' + id, {
                nome
            })
            .then(() => {
                setSuccess(true)
            })
    }

    if(success) {
        return <Redirect to='/generos'></Redirect>
    }

    return (
        <div>
            <h1>Atualiza Genero</h1>
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

export default AtualizaGenero