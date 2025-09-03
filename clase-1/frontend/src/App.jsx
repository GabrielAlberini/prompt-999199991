import { useEffect, useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
            <p><strong>Marca:</strong> {producto.marca}</p>
            <p><strong>Modelo:</strong> {producto.modelo}</p>
            <p><strong>Color:</strong> {producto.color}</p>
            <p><strong>Peso:</strong> {producto.peso}</p>
            <p><strong>Fecha de creación:</strong> {producto.fecha_creacion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
