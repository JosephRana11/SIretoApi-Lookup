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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.code}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};


export default ProductCard