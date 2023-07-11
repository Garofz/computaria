import "./Botao.css"

const Botao = (props) => {
    return (
        <button className="botaoDesing">
            {props.children}
        </button>
    )
}

export default Botao  