import React from 'react'

var Header = React.createClass({
	_handleKeyDown: function(e){
		if (e.keyCode === 13) {
			location.hash = `search/${e.target.value}`
			e.target.value = ''
		}
	},
	render: function() {
		var spanStyle = {
			color: 'red'
		}
		return (
			<header>
				<h2 className="main-title"><a href="#home">ETSIFY</a></h2>
				<input className="search" type="text" name="search" placeholder="Search..." onKeyDown={this._handleKeyDown}/>
				<nav>
					<a href="#home">Home</a>
					<a href="#myetsy"><span style={spanStyle}>NEW! &nbsp;</span>MyEtsy</a>
					<a href="#">This</a>
					<a href="#">That</a>
					<a href="#">The Other</a>
				</nav>
			</header>
		)
	}
})

export default Header