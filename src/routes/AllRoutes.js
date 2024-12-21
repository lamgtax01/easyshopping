import { Routes, Route } from "react-router-dom";
import { ProductList, Cart, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <main className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<ProductList title="Home"/>}/>
            <Route path="/cart" element={<Cart title="Shopping Cart"/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </main>
  )
}

