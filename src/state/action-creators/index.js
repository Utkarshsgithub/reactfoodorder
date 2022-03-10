export const increaseTotalAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: amount
        })
    }
}

export const decreaseTotalAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'decrease',
            payload: amount
        })
    }
}