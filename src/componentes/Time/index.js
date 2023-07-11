import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria} 

    return(

       (props.colaboradores.length) ? <section className="time" style={css}>
            <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>
            <div className="cards">
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={props.nome}  nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}    
            </div>    
        </section>
        : ""
    )
        
}

export default Time