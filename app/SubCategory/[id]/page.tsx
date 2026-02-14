
import React from 'react'
import { SubCategoryItem } from '../../interfaces/SubCategory'
import SubCategorycard from '../SubCategorycard'

type MyProps = {
  params : {
    id:string
  }
}

export default async function SubCategory(props:MyProps) {
  let {id} = await props.params 

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)

  let {data : allSubCategory} : {data : SubCategoryItem[]} = await response.json()

  //  const filteredSub = allSubCategory.filter(
  //   (sub) => sub.category === params.id
  // )

  // console.log(allSubCategory)



  return <>
  
  <div className='grid md:grid-cols-3 md:gap-5'>

    {allSubCategory.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500">
          No subcategories found for this category
        </p>
      ) : (
        allSubCategory.map((sub) => (
          <SubCategorycard key={sub._id} sub={sub} />
        ))
      )}

  </div>
  
  </>
}
