import axios from 'axios';
import { useState, useEffect } from "react";

export interface Product {
  _id:string;
  PN:string;
  SN:string;
  TEST_TYPE:string;
  PASS: boolean;
  TEST_DATE: string;
  }
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>();

    const fetchProducts = async () => {
          try {
            const res = await axios.get(
              `/api/products`);
            if (res){
              setProducts(res.data as Product[])
            }
          } catch (e) {}
    
        }
        useEffect(() => {
            fetchProducts();
          }, []);
    
          return products 
        };