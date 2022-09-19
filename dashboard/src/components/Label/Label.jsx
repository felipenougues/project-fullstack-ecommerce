import './Label.css'
const Label = ({title, value, description, loading}) => {

    return (
        <div className="label">
            {/* icon */}
            <p className="title">Total de {title}</p>
            <h3 className="value">{value}</h3>
            {loading ? '' : <span className="description">{description}</span>}
        </div>
    )

}

export default Label