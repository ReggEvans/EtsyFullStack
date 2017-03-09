import React from 'react'

var Details = React.createClass({
	render: function() {
		console.log(this)
		return (
			<div className="content-container">
				<div className="detail-container">
					<div className="info-container">
						<h4 className="detail-title">{this.props.collection.get('title')}</h4>
						<h4 className="detail-price">{'$'}{this.props.collection.get('price')}</h4>
						<p className="detail-description">{this.props.collection.get('description')}</p>
					</div>
					<div className="img-container">
						<img className="detail-main-image" src={this.props.collection.get('Images')[0].url_570xN}/>
					</div>
				</div>
			</div>
		)
	}
})

export default Details