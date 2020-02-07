<script>
  export default {
  functional: true,
  render(createElement, {props}) {
    let slot = null;
    if(props.block.subs){
      slot = [];
      props.block.subs.forEach(sub => {
        slot.push(createElement(sub.tag, { attrs: sub.attrs}, sub.slot))   
      })
    }

      return () => {
       createElement(props.block.tag, { attrs: props.block.attrs}, slot ? slot : props.block.slot);
       }
  }
};
</script>