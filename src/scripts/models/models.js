import Backbone from 'backbone'


export const EtsyItemModel = Backbone.Model.extend({
	url: '/api/items',
	idAttribute: '_id'
})

export const EtsyItemCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	model: EtsyItemModel,
	url: '/api/items'
})