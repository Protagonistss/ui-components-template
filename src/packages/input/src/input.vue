<template>
  <div>
    <input type="text" :value="foo" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      foo: 'foo',
    }
  },
}
</script>

<style lang="scss" scoped></style>
