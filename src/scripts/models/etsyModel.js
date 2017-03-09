import Backbone from 'backbone'

export var EtsyModel = Backbone.Model.extend({
	url: 'https://openapi.etsy.com/v2/listings/',
	parse: function(apiResponse){
	return apiResponse.results[0]
	}
})