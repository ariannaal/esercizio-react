function ArticleComponent(props) {
    console.log(props);
    return (
        <>
            <h2 className="breedTitle">{props.breed}</h2>
            <div className="articleContainer">
            
            <img src="https://media.istockphoto.com/id/824245238/it/foto/gatto-persiano-seduto-di-fronte-a-sfondo-bianco.jpg?s=612x612&w=0&k=20&c=Czr1MmFxCtjR5vSJxXFwpCBaaXpnDRGhHtaRwDxaZvc=" alt="persian cat article" className="imageArticle"/>
            <p className="infoBreed">{props.info}</p>  
    </div>
</>
    )
    
}

export default ArticleComponent;