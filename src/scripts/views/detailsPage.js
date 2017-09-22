import React from 'react'
import Header from './components/header'
import Details from './details'
import Footer from './components/footer'

var DetailsPage = React.createClass({
	render: function(){
		return(
			<div className="main-container" id="details-container" >
				<Header />
				<Details collection={this.props.etsyModel}/>
				<Footer />
			</div>
		)
	}
})

export default DetailsPage
