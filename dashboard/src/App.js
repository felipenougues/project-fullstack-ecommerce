import { useEffect } from 'react';
import { useState } from 'react';
import Label from './components/Label/Label'

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
    }, 2000);
    

  },[])

  return (
    <main className="App">
      <h1>Dashboard</h1>
      {
        loading ? <p>Cargando...</p> : "..."
      }
      <Label title="Productos" value={products.length} description="Test" />
      <Label title="Usuarios" value={users.length} description="Test" />
    </main>
  );
}

export default App;
