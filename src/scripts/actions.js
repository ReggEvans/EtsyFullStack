import STORE from './store.js'
import {EtsyItemCollection} from './models/models.js'
import {EtsyItemModel} from './models/models.js'

const ACTIONS = {
	addItem: function(etsyData) {
		var newEtsyItem = new EtsyItemModel(etsyData)
		newEtsyItem.save()
			.then(
				function(response) {
					alert('saved')
					ACTIONS.fetchAllIssues()
				},
				function(err) {
					alert('There was a problem')
					console.log(err)
				}
			)
	},

	fetchAllIssues: function() {
		var etsyColl = STORE.get('etsyItemCollection')
		etsyColl.fetch()
			.then(function() {
				STORE.set({
					etsyItemCollection: etsyColl
				})
			})
	}
}

export default ACTIONS