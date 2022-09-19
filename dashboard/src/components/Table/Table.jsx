import './Table.css'

const Table = ({title, columns, rows}) => {
    return(
        <div className='table'>
            <h2>Tabla de {title}</h2>
            <div className='columns'>{columns.map((column, i) => <span key={i}>{column}</span>)}</div>
            {rows.map((product, i) => {
                return(
                    <div className='row' key={i}>
                        <span>{product.id}</span>
                        <span>{product.name}</span>
                        <span>{product.category}</span>
                        <span>$ {product.price}.00</span>
                        <span>{product.description}</span>
                    </div>

                )
            })}

            

        </div>
    )
}

export default Table