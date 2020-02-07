<template>
  <component :is="block.tag" v-bind="block.attrs">
  	<template v-if="block.slot">
  		{{block.slot}}
  	</template>
  	<template v-if="block.subs">
		<component v-for="(sub,index) in block.subs" :is="sub.tag" :key="index" v-bind="sub.attrs">
			{{sub.slot}}
		</component>
  	</template>
  </component>
</template>
<script>
  export default {
    name: "test",
  	props:{
  		block:Object
  	}
  };
</script>

