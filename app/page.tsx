import Image from "next/image";
import { ProductItem } from "./interfaces/ProductInterface";

import ProductCard from "./Products/ProductsCard";

export default async function Home() {

  let response = await fetch ('https://ecommerce.routemisr.com/api/v1/products' ,
    {
      next: { revalidate: 60 } 
    })

  let {data : allProduct}:{data : ProductItem[]} = await response.json()
  return <>

  <div className="grid md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">

    {allProduct.map((prod)=>{return <ProductCard key={prod._id} prod={prod}/> })}

  </div>
  


  
  </>
}
