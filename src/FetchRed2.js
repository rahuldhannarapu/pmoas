import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
// import FetchRed from './FetchRed'

const initialState = {
	loading: true,
	error: '',
	post: {}
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}

function FetchRed2() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(`http://localhost:3011/users/1`)
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
	}, [])
	return (
		<div>
			{state.loading ? 'Loading' : state.post.name}
			{state.error ? state.error : null}
		</div>
	)
}

export default FetchRed2;