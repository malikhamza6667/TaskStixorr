import React,{useState} from "react"

export const useProducts=()=>{
const[categoriesLoading,setCategoriesLoading]=useState(false)
const[categories,setCategories]=useState([])

const[productsLoading,setProductsLoading]=useState(false)
const[products,setProducts]=useState([])
    const getAllCategories=async()=>{
        try {
            setCategoriesLoading(true)

        const res= await fetch('https://dummyjson.com/products/categories')
        const result=await res.json()
        setCategories(result)

        } catch (error) {
            console.log("[Categories Error] ",error)
        }
       
        setCategoriesLoading(false)
    }
    const getAllProducts=async()=>{
        try {
            setProductsLoading(true)

        const res= await fetch('https://dummyjson.com/products')
        const result=await res.json()
        setProducts(result.products)

        } catch (error) {
            console.log("[Products Fetching Error] ",error)
        }
       
        setProductsLoading(false)
    }
    return{
        getAllCategories,
        categoriesLoading,
        categories,


        getAllProducts,
        products,
        productsLoading
    }
}