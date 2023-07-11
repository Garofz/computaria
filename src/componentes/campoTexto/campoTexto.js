import "./CampoTexto.css"

 
const CampoTexto = (props) =>{
  
    const placeHolderModificada = `Digite seu ${props.label}`



    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="espaco">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificada} />

        </div>
    )
}

export default CampoTexto