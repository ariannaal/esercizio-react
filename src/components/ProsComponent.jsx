function ProsComponent(props) {
    console.log("Why adopting a Persian cat?", props)
    return (
        <div className="listContainer">
            <div className="adopting">{props.adoption}</div>
            <ol>
                <li className="listPro">{props.first}</li>
                <p>{props.firstReason}</p>
                <li className="listPro">{props.second}</li>
                <p>{props.secondReason}</p>
                <li className="listPro">{props.third}</li>
                <p>{props.thirdReason}</p>
                <li className="listPro">{props.fourth}</li>
                <p>{props.fourthReason}</p>
            </ol>
</div>
    )
}

export default ProsComponent