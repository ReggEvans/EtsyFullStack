import React from 'react'
import Header from './components/header'
import Results from './results'
import Footer from './components/footer'


var HomePage = React.createClass({
	render: function(){
		return(
			<div className="main-container">
				<Header />
				<div className="featured"></div>
				<div className="headline">
					<div className="decore-line"></div>
					<div className="feature-line">Most Recent</div>
					<div className="decore-line"></div>
				</div>
				<Results collection={this.props.etsyCollection}/>
				<Footer />
			</div>
		)
	}
})

export default HomePage
