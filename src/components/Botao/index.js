import './Botao.css'

const Botao = (props) => {

    return (
        <button className="botao" onClick={props.toggleShow}>
            {props.children}
        </button>
    )
}

export default Botao