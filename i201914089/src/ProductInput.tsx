import type * as types from "./types";
import useForm from "./useForm";
import "./App.css";

type Props = {
    addProduct : types.AddProductFunc
}

function ProductInput({addProduct}: Props) {
    const initValue = {name: "", price: 0};
    const [product, handler, setProduct] = useForm(initValue);
    const onClick = () => {
        addProduct(product.name, product.price);
        setProduct(initValue);
    }


    return (
        <div id="app">
            <h1>제품</h1>
            <div className="control">
                <input type="text" name="name"
                    onChange={handler} value={product.name}/>
            </div>
            <div className="control">
                <input type="number" min="0" step="1" name="price"
                    onChange={handler} value={product.price}/>
                <button onClick={onClick}>추가</button>
            </div>
        </div>
    )
}

export default ProductInput;