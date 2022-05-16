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
