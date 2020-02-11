const path = require('path');
const fs = require('fs');
const watch = require('node-watch');
const recursive = require("recursive-readdir-sync");
const appDir = path.dirname(require.main.filename).replace("/src/watchers","");
const viewDirectory = path.join("src","views","blocks");

watchViewDirectory = () => {
	var comp = this;
	watch(viewDirectory, { recursive: false }, function(evt, name) {
		let data = require(appDir+path.sep+name).default;
		const blockFunc = (block) => {
			if(typeof(block.tag) !== "string"){
				console.log(block.tag.name)
			}
			if(block.slot && typeof(block.slot) !== "string"){
				block.slot.forEach(sub => {
					blockFunc(sub)
				})
			}
		}
		let blocks = data().map(block => {
			return blockFunc(block) 
		})
	});
}

watchViewDirectory()