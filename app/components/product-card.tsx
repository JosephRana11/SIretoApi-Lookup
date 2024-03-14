import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Productdata } from "./search-bar";


const ProductCard = (props : Productdata) => {
    if (props.code != "")
    {
        return(
    <Card className="bg-purple-50">
      <CardHeader>
        <CardTitle>{props.code}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
    </Card>
        )
    }
    else{
        return (
            <></>
        )
    }
};


export default ProductCard