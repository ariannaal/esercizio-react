//dovrebbe ritornare un tag ‘button’. Il testo del bottone dovrebbe essere passato tramite le Props del componente e visualizzato in mezzo ai tag  <button></button> .



function ButtonComponent(props) {
    console.log("PROPS", props)
    return (
        <>
            <button className="button" type="button">{props.text} {props.reason}
            </button>
        </>
    )
    
}

export default ButtonComponent;