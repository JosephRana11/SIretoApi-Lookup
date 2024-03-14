'use client'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { clear } from "console";
import { useState } from "react"
import { useDebounce } from "use-debounce";
import { useDebouncedCallback } from "use-debounce"
import { fetchProduct } from "../lib/data";
import ProductCard from "./product-card";




export interface Productdata {
    code : string , 
    description : string
}
const SearchBar = () => {
    

     const [searchVal , setSearchVal] = useState("")
      
     const  callDebounce  = useDebouncedCallback(()=> callApi() , 150)

     const [result , setResult ] = useState({"code" : "", "description" : ""})
       
     async function callApi(){
            console.log("Calling Api")
            if (searchVal != ""){
                const products = await fetchProduct(searchVal)
                setResult(products)
            }
        }

      function recordKey(e : string){
          setSearchVal(e)
          callDebounce()
        }
        
        
        return(
            <div className="">
             <Input type="email" placeholder="Search Products" className="w-[400px] h-[50px] bg-neutral-50" value={searchVal} onChange={(e) => {recordKey(e.target.value)}}/>
             <ProductCard {...result} />
            </div>
            )
        }


export default SearchBar;
