<template>
	<div class="home">
		<Dynamic2 v-for="(block,index) in blocks" :key="index" :block="block" />
	</div>
</template>
<script>
	import Dynamic2 from "@/components/Dynamic2"
	import Test from "@/components/Test"
	export default {
		name: "Home",
		components: {
			Dynamic2
		},
		data(){
			return {
				counter:0,
				blocks:[
				{
					tag:"a",
					slot:"Hello",
					attrs: {
						href:"#"
					}
				},
				{
					tag:"h1",
					slot:"Hello Whats up?"
				},
				{
					tag:Test,
					attrs:{
						text:"!!Not loading on page load!!!!"
					}
				},
				{
					tag:"div",
					attrs:{
						style:"color:red"
					},
					subs:[
					{
						tag:"h1",
						slot:"Sub component whats good?"
					},
					{
						tag:"h2",
						slot:"and another?"
					},
					{
						tag:"h3",
						slot:"and another!"
					},
					{
						tag:"h4",
						slot:"and another!!"
					},
					{
						tag:"h5",
						slot:"and another!!!"
					}
					],
				},
				]
			}
		}
	};
</script>
