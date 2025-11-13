"use client";
import { useEffect, useState } from "react";

export default function TestCRUD() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "T-Shirt", price: 19.99, description: "Cool shirt", category: "Clothing" }),
    });
    fetchProducts();
  };

  const updateProduct = async (id) => {
    await fetch(`/api/products?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: 25.99 }),
    });
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    fetchProducts();
  };

  useEffect(() => {
  async function loadProducts() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  }

  loadProducts();
}, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test CRUD Products</h1>
      <button onClick={addProduct} className="px-4 py-2 bg-green-600 text-white rounded mb-4">Add Product</button>

      <ul className="space-y-3">
        {products.map((p) => (
          <li key={p.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p>${p.price}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => updateProduct(p.id)} className="px-3 py-1 bg-yellow-400 rounded">Update</button>
              <button onClick={() => deleteProduct(p.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
