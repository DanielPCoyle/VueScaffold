<template>
  <component :is="block.tag" v-bind="block.attrs"  
	@mouseover="e('onMouseover')"
	@click="e('onClick')">
  	<template v-if="typeof(block.slot) !== 'object'">
		<span v-html="block.slot" />
  	</template>
  	<template v-else>{{/* there are subs */}}
		<template v-for="(sub,index) in block.slot">
				<template v-if="typeof(sub.slot) !== 'object'">
					<component :key="index" :is="sub.tag" v-bind="sub.attrs">
					<span v-html="sub.slot" />
				</component>
				</template>
				<template v-else>
					<Block :key="index" :block="sub"/>
				</template>
		</template>
  	</template>
  </component>
</template>
<script>
  export default {
    name: "Block",
  	props:{
  		block:Object
  	},
  	methods:{
	  	e(event){
	  		if(this.$props.block.attrs && typeof(this.$props.block.attrs[event]) !== "undefined"){
	  			this.$props.block.attrs[event](this)
	  		} else{
	  			return null
	  		}
	  	},
	  	
  	}
  };
</script>

