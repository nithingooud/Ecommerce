import react from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
const Productdetails = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => {
        return p._id === productId;
    })
    console.log(product.price);
    return (
        <>
        </>
    )
}
export default Productdetails