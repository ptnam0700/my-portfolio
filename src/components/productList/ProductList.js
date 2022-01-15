import Product from "../product/Product"
import "./productList.css"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                    Beautiful pages, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((product) => (<Product key={product.id} product={product} />))}
            </div>
            <div className="pl-videos">
                <iframe className="pl-video" width="1519" height="593" src="https://www.youtube.com/embed/nRBX9gYUOn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="pl-video" width="1519" height="593" src="https://www.youtube.com/embed/pag-0xBfVZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default ProductList
