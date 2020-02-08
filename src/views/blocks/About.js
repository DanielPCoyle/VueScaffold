import * as _ from "./_blocks.js"

export const State = {
	count:1,
	name:"Dan Coyle"
}

export default function(){
	return [

		_.layout([
				_.fullCol("<h1>About</h1>")
			]
		)
	]
}