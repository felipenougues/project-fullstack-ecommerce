import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import Label from './components/Label/Label'
import Table from './components/Table/Table'

const App = () =>  {

  const[products, setProducts] = useState([])
  const[loading, setLoading] = useState(false)
  const[users, setUsers] = useState([])

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      
      fetch('http://localhost:3030/api/products')
      .then(response => response.json())
      .then(products => {
        const { data } = products
        setProducts(data.products)
        setLoading(false)
      });
      
      fetch('http://localhost:3030/api/users')
      .then(response => response.json())
      .then(data => {
        const { users } = data
        setUsers(users)
      })
    }, 4000);
    

  },[])

  const productColumns = ['id','Nombre', 'Categoría', 'Precio', 'Descripción']

  function countUnique(iterable) {
    return new Set(iterable).size;
  }

  const productCategories = products.map(product => product.category)

  const totalCategories = countUnique(productCategories)


  return (
    <>
    <Header />
    <main className="App">
      <h1>Dashboard</h1>
      {
        loading ? 
        <div className='loading'>
          <span>Cargando... </span>
          <img src='http://cdn.onlinewebfonts.com/svg/img_1586.png' alt='loading'/>
        </div>
        : ""
      }
      <section className='labels-container'>
        <Label title="Productos" value={products.length} description="6 Nuevos productos en la última semana" loading={loading} />
        <Label title="Usuarios" value={users.length} description="1 Nuevo usuario en el último mes" loading={loading} />
        <Label title="Categorías" value={totalCategories} description='"Vestidos" la categoría más visitada' loading={loading} />
      </section>
      <Table title="Productos" columns={productColumns} rows={products}/>
    </main>
    </>
  );
}

export default App;
