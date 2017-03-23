import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

import STORE from '../store'
import ACTIONS from '../actions'

var MyEtsy = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchAllIssues()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState: function() {
		return STORE.data
	},

	render: function(){
		return(
			<div className="main-container">
				<Header />
				<a href='#newItem'>
					<div className='submit' id='my-etsy'>
						<p>Add a New Item!</p>
					</div>
				</a>
				<MyEtsyList etsyItemCollection={this.state.etsyItemCollection}/>
				<Footer />
			</div>
		)
	}
})

var MyEtsyList = React.createClass({
	singleItems: function(model) {
		return <SingleItem etsyModel={model} key={model.cid} />
	},
	render: function() {
		return (
			<div className="content-container">
				{this.props.etsyItemCollection.map(this.singleItems)}
			</div>
		)
	}
})

var SingleItem = React.createClass({
	render: function() {
		var imgStyle = {
			width: 170,
			height: 135
		}

		return (
			<div className='list-wrapper'>
				<div className="list">
					<img style={imgStyle} src={this.props.etsyModel.get('image')} />
					<p className="title">{this.props.etsyModel.get('title')}</p>
				</div>
			</div>
		)
	}
})

export default MyEtsy