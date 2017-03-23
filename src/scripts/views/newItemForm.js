import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

import STORE from '../store'
import ACTIONS from '../actions'

var NewItemForm = React.createClass({
	handleSubmit: function(eventObj) {
		eventObj.preventDefault()
		var formItem = eventObj.target
		var etsyData = {
			title: formItem.title.value,
			price: formItem.price.value,
			image: formItem.image.value,
			description: formItem.description.value
		}
		ACTIONS.addItem(etsyData)
		formItem.reset()
	},

	render: function(){
		return(
			<div className="main-container">
				<Header />
				<div className='content-container'>
					<div className='form-container'>
						<h4>Submit a New Item</h4> <br />
						<form className='new-form' onSubmit={this.handleSubmit}>
							* Title:   <br />
				 			<input name="title" type="text" placeholder="Title" />  <br />
				 			* Price:   <br />
				 			<input name="price" type="text" placeholder="Price" />   <br />
				 			Image:   <br />
				 			<input name="image" type="text" placeholder="Image URL" />   <br />
				 			* Description:   <br />
				 			<input name="description" rows="5" cols="97" placeholder='Description...'></input> <br />  <br />
				 			<button className='submit' type="submit">Submit</button>
			 			</form>
			 		</div>
		 		</div>
				<Footer />
			</div>
		)
	}
})

export default NewItemForm