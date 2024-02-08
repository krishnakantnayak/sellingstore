const ProductTile=({ title, content })=>{
    return (<>
        <div className="tile m-4">
            <h2 className="title">{title}</h2>
            <p className="content">{content}</p>
        </div>
    </>)
}

export default ProductTile;