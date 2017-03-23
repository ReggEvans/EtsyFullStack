import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import {EtsyCollection} from './models/etsyCollection'
import {EtsyModel} from './models/etsyModel'
import HomePage from './views/homePage'
import Header from './views/components/header'
import Results from './views/results'
import DetailsPage from './views/detailsPage'
import Details from './views/details'
import MyEtsy from './views/myEtsyPage'
import NewItemForm from './views/newItemForm'



var app = function() {
	var EtsyRouter = Backbone.Router.extend({
		routes: {
			'home': 'handleHomePage',
			'search/:query': 'handleSearchListPage',
			'detail/:id': 'handleDetailsPage',
			'myetsy': 'handleMyEtsyPage',
			'newItem': 'handleNewItem',
			'*default': 'handleHomePage'
		},
		handleHomePage: function(){
			var collectionInstance = new EtsyCollection()
			var promise = collectionInstance.fetch({
				dataType: 'jsonp',
				data: {
					includes : 'Images',
					'api_key': 'hlqdmhetmrobnovh0nfudwdd'
				}
			})
			promise.then(function(){
				ReactDOM.render(<HomePage
					etsyCollection={collectionInstance}
					/>, document.querySelector('.container'))
			})
		},
		handleSearchListPage: function(query){
			var collectionInstance = new EtsyCollection()
			var promise = collectionInstance.fetch({
				dataType: 'jsonp',
				data: {
					includes: 'Images',
					keywords: query,
					'api_key': 'hlqdmhetmrobnovh0nfudwdd'
				}
			})
			promise.then(function(){
				ReactDOM.render(<HomePage
					etsyCollection={collectionInstance}
					/>, document.querySelector('.container'))
			})
		},
		handleDetailsPage: function(id) {
			var modelInstance = new EtsyModel()
			modelInstance.url += id + '.js'
			var promise = modelInstance.fetch({
				dataType: 'jsonp',
				data: {
					includes: 'Images',
					'api_key': 'hlqdmhetmrobnovh0nfudwdd'
				}
			})
			promise.then(function(){
				ReactDOM.render(<DetailsPage
					etsyModel={modelInstance}
					/>, document.querySelector('.container'))
			})
		},
		handleMyEtsyPage: function(){
			ReactDOM.render(<MyEtsy />, document.querySelector('.container'))
		},
		handleNewItem: function(){
			ReactDOM.render(<NewItemForm />, document.querySelector('.container'))
		}
	})
	new EtsyRouter()
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..