import {all_products} from "@/public/images/data";
import ProductCard from "@/components/product-card"
export default function NewArrivalProduct(){

    return(
        <>
        <div className="flex flex-col-4 col">
            {/* Map over products */}
            {/* {all_products.map((product, index) => (
                    <ProductCard key={product._id} {...product} index={index} />
                ))} */}
        </div>
        </>
    )
    
}