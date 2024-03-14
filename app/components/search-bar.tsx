'use client'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { clear } from "console";
import { useState } from "react"
import { useDebounce } from "use-debounce";
import { useDebouncedCallback } from "use-debounce"




const SearchBar = () => {
     

      const [searchVal , setSearchVal] = useState("")
      
      const  callDebounce  = useDebouncedCallback(()=> callApi() , 3000)
       
      function callApi(){
            console.log("Calling Api")
        }

      function recordKey(e : string){
          setSearchVal(e)
          callDebounce()
        }
        
        
        return(
            <Input type="email" placeholder="Search Products" className="w-[400px] h-[50px] bg-neutral-50" value={searchVal} onChange={(e) => {recordKey(e.target.value)}}/>
            )

        }


export default SearchBar