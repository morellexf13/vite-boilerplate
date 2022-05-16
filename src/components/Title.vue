<!-- 
    🧩 Example of basic component using <slot />.  
    <slot /> serve as content distribution outlets in component templates.
    This means that the content of the slot will be replaced by the content of the component that is inserted into the slot.
--->
<template>
    <h1>
        You are in the <slot /> page 
    </h1>
</template>

<script>

export default {
    name: 'headerTitle'
}
</script>
