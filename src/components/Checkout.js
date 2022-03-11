import React from 'react'
import PropTypes from 'prop-types'

function Checkout(props) {
  return (
    <div className="center">
        <h1 style={{'marginBottom':'25px'}}>Checkout</h1>
        <form>
            <input type="text" id='name' name='name' placeholder='Tony Stark'/>
            <input type="text" id='address' name='address' placeholder='Address'/>
            <input type="tel" id='number' name='number' placeholder='9415XXXXXX'/>
            <input type="tel" id='pincode' name='pincode'placeholder='pincode' />
        </form>
    </div>
  )
}

Checkout.propTypes = {}

export default Checkout
