<!-- 
    🧩 Example of basic component using custom properties. 
    How to add properties:
    1. Add key to props object.
    2. You can define type, default value, required status.  
--->
<template>
  <button :class="className" :id="id">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    className: {
      type: String
    }
  }
};
</script>

<style>
    button {
       border: 1px solid rgb(7, 171, 154);  
       border-radius: 5px
    }
</style>
