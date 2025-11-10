import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const url = categoryId
      ? `https://dummyjson.com/products/category/${categoryId}`
      : `https://dummyjson.com/products`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <h2 style={{ textAlign: "center", margin: "50px" }}>Cargando productos...</h2>;
  }

  if (!products || products.length === 0) {
    return <h2 style={{ textAlign: "center", margin: "50px" }}>No hay productos disponibles.</h2>;
  }

  return (
    <div className="item-list-container">
      <h2 style={{ textAlign: "center" }}>
        {categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}
      </h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
