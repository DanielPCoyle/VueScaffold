const el = (el,slot,attrs = null) => {
	return {
		tag:el,
		slot:slot,
		attrs:attrs
	}
}

const button = (slot,attrs) => {
	return el("B-Button",slot,attrs)
}

const fullCol = (slot) => {
	return el("B-Row",[
		el("B-Col",slot)
	])
}

const multiply = (obj,x) => {
	let out = []
	for (var i = x - 1; i >= 0; i--) {
		out.push(obj)
	}
	return out
}

const h1Row = (slot,attrs) => {
	return el("B-Row",[
		el("B-Col",[
			el("h1",slot,attrs)
		]),
	])
}

const h2Row = (slot,attrs) => {
	return el("B-Row",[
		el("B-Col",[
			el("h2",slot,attrs)
		]),
	])
}

const h3Row = (slot,attrs) => {
	return el("B-Row",[
		el("B-Col",[
			el("h3",slot,attrs)
		]),
	])
}

const h4Row = (slot,attrs) => {
	return el("B-Row",[
		el("B-Col",[
			el("h4",slot,attrs)
		]),
	])
}

const h5Row = (slot,attrs) => {
	return el("B-Row",[
		el("B-Col",[
			el("h5",slot,attrs)
		]),
	])
}

const h6Row = (slot,attrs) => {
	return el("B-Row",[
		el("B-Col",[
			el("h6",slot,attrs)
		]),
	])
}

const topBar = (attrs = null) => {
	return el("B-Row",[
		el("B-Col","[Logo]"),
		el("B-Col","[Login/SignUp]",{class:"text-right"},attrs)
	])
}

const container = (slot,attrs = null) => {
	return el("B-Container",slot,attrs)
}

const row = (slot,attrs = null) => {
	return el("B-Row",slot,attrs)
}
const col = (slot,attrs = null) => {
	return el("B-Col",slot,attrs)
}

export default {
	el,
	button,
	multiply,
	fullCol,
	h1Row,
	h2Row,
	h3Row,
	h4Row,
	h5Row,
	h6Row,
	topBar,
	container,
	row,
	col,
}