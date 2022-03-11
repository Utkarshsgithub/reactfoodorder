import React, { useState } from 'react'

function Checkout() {
    const [userData, setUserData] = useState({
        name:"",
        address:"",
        number: undefined,
        pincode: undefined
    })
    let name, value;
    const postUserData = (event) => {
        name = event.target.name
        value = event.target.value
        
        setUserData({...userData, [name]:value})
    }

    const submitData = async (event) => {
        event.preventDefault();
        const { name, address, number, pincode } = userData
        const res = await fetch(
            'https://bhojan-b1d4b-default-rtdb.firebaseio.com/userData.json',
            {method: "POST",
            headers: {
                "Content-Type" : "application/json",

            },
            body: JSON.stringify({
                name, 
                address, 
                number, 
                pincode,
            })
        }
        )
        if (res) {
            alert("Data Stored In Firebase")
        } else {
            alert ("Error Submitting The Data")
        }
    }

  return (
    <div className="center">
        <div className="checkout-page">
            <h1 className='center' style={{'margin':'25px 0px'}}>Checkout</h1>
            <form method="POST" >
                <input value={userData.name} onChange={postUserData} type="text" id='name' name='name' placeholder='Name' required />
                <input value={userData.address} onChange={postUserData} type="text" id='address' name='address' placeholder='Address' required />
                <input value={userData.number} onChange={postUserData} type="number" id='number' name='number' placeholder='Mobile Number' required />
                <input value={userData.pincode} onChange={postUserData} type="number" id='pincode' name='pincode'placeholder='Pincode' required />
                <button className='btn-od' type='submit' onSubmit={submitData}>Order Done!</button>
            </form>
        </div>
    </div>
  )
}

Checkout.propTypes = {}

export default Checkout