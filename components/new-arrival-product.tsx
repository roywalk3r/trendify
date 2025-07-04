import {all_products} from "@/public/images/data";
import ProductCard from "@/components/product-card"
export default function NewArrivalProduct(){

    // @ts-ignore
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-8">
            {/* Map over products */}
          {Array.from({ length: 9 })
            .map((_, index) => all_products[Math.floor(Math.random() * all_products.length)])
            .map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
        </div>
        </>
    )
    
}