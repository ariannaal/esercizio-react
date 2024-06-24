// Crea un nuovo componente come classe, chiamalo ImageComponent: dovrebbe ritornare un tag ‘img’. La fonte dell’immagine ‘src’ oltre che l’attributo ‘alt’ dovrebbero essere passate tramite Props del componente e assegnate al tag  <img /> .

function ImageComponent() {
    return (
        <>
       <h1 className="title">Persian Cats</h1>     
       <img src="https://media.istockphoto.com/id/1943409896/it/foto/red-white-persian-cat-on-a-black-background.webp?b=1&s=170667a&w=0&k=20&c=284a8X66gqS14ehfWZMlX5-eWu1zPc140gT12Yaaubw=" alt="persian cat" className="mainPicture" />
        </>
    )
}

export default ImageComponent