import Backbone from 'backbone'

export var EtsyCollection = Backbone.Collection.extend({
	url: 'https://openapi.etsy.com/v2/listings/active.js',
	parse: function(apiResponse){
		return apiResponse.results
	}
})

