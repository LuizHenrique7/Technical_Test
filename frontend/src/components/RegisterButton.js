import React, { useState } from 'react';
import ProductForm from './ProductForm';

function RegisterButton() { const [showForm, setShowForm] = useState(false)
    const toggleForm = () => { setShowForm(!showForm);};



    return (<div>
        <button className="register-button" onClick={toggleForm}>Register Product</button>
        {showForm && <ProductForm/>}
    </div>)

}

export default RegisterButton

