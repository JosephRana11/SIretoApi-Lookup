'use client'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'


function recordKey(e : string){
    console.log(e)
}

export default function SearchBar(){
    return(
            <Input type="email" placeholder="Search Products" className="w-[400px] h-[50px] bg-neutral-50" onChange={(e) => {recordKey(e.target.value)}}/>
    )
}