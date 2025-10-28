import { useContext, useState } from 'react'
import ProductContext from './context/ProductContext.context';

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    ingredients: ''
  })

  const { createNewProduct } = useContext(ProductContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    console.log(formData);
    setFormData((prevState) => ({...prevState, [name]: value}));
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    createNewProduct(formData)

    setTimeout(() => {
      setFormData({
        name: '',
        price: '',
        ingredients: ''
      })
    }, 500);

  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name"  name="name" value={formData.name} onChange={handleChange}/>
            <input type="number" placeholder="Price" step="0.01" name="price" value={formData.price} onChange={handleChange}/>
            <input type="text" placeholder="Ingredients (space separated)" name="ingredients" value={formData.ingredients} onChange={handleChange}/>
            <button type="submit">Create Product</button>
        </form>
    </div>
  )
}
