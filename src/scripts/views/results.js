import React from 'react'

var Results = React.createClass({
	_etsyItems: function() {
		var newArray = []
		for (var i = 0; i < this.props.collection.models.length; i++) {
			newArray.push(<Article model={this.props.collection.models[i]} />)
		}
		return newArray
	},
	render: function() {
		return (
			<div className="content-container">
				{this._etsyItems()}
			</div>
		)
	}
})

var Article = React.createClass({
	render: function(){
		return (
			<a href={`#detail/${this.props.model.get('listing_id')}`}>
				<div className="list-wrapper">
					<div className="list">
						<img src={this.props.model.get('Images')[0].url_170x135}/>
						<p className="title">{this.props.model.get('title')}</p>
					</div>
				</div>
			</a>
		)
	}
})

export default Results