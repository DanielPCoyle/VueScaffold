<template>
	<div class="home">
		<Dynamic2 v-for="(block,index) in blocks" :key="index" :block="block" />
	</div>
</template>
<script>
	import Dynamic2 from "@/components/Dynamic2"
	export default {
		name: "Dynamic",
		components: {
			Dynamic2
		},
		props:{
			Blocks:Function,
			State:Object,
		},
		data(){
			return {...this.$props.State}
		},
		computed:{
			blocks(){
				return this.$props.Blocks(this)
			}
		},
	};
</script>
