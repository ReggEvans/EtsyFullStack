import React from 'react'

var Footer = React.createClass({
	render: function() {
		return (
			<footer>
				<div className="sell">
						<p>Sell on Etsy</p>
						<ul>
							<li>Open a Shop</li>
							<li>Seller Handbook</li>
							<li>Etsy Credit Card Reader</li>
						</ul>
					</div>
					<div className="discover">
						<p>Discover and Shop</p>
						<ul>
							<li>Gift Cards</li>
							<li>Blog</li>
							<li>Mobile Apps</li>
						</ul>
					</div>
					<div className="getToKnow">
						<p>Get to know us</p>
						<ul>
							<li>About</li>
							<li>Policies</li>
							<li>Careers</li>
						</ul>
					</div>
					<div className="follow">
						<p>Follow Etsy</p>
						<ul>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>Instagram</li>
						</ul>
					</div>
			</footer>
		)
	}
})

export default Footer