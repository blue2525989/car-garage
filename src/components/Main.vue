<template>
  <div>
    <label>
      {{ title }}
    </label>
     <input type="file" accept="image/*" capture>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      title: 'This is my fancy title'
    }
  }
}
</script>

<style>

</style>
