<template>
  <div class="home">
    <Block v-for="(block, index) in blocks" :key="index" :block="block" />
  </div>
</template>
<script>
import Block from "@/components/Block";
export default {
  name: "Dynamic",
  components: {
    Block
  },
  props: {
    Blocks: Function,
    State: Object
  },
  data() {
    return { ...this.$props.State };
  },
  computed: {
    blocks() {
      return this.$props.Blocks(this);
    }
  }
};
</script>
