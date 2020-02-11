// import draggable from 'vuedraggable'
import * as _ from "./_blocks"

export const State = {
	count:1,
	name:"Dan Coyle"
}

export default function(comp){
	console.log(comp)
	return [
		_.layout([
			_.fullCol([
				_.el("B-Jumbotron",[
					_.h1Row(process.env.VUE_APP_WELCOME),
					_.h5Row(comp.name) 
					],
					{class:"text-center mt-3"}
				)
			]),
			_.container([
				_.fullCol([
					_.h1Row("Services"),
					_.row([
						_.col("Local<br> Dog Walkers"),
						_.col("Online and Mobile<br> Booking and Payment"),
						_.col("Happy Pets<br> Happy Owners"),
					],{class:"text-center"})
				])
			]),
		]),
	]
}

