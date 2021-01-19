<template>
  <div>
    <a-input placeholder="Basic usage" v-model="foo" />
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  data() {
    return {
      foo: 'foo',
    }
  },
}
</script>

<style lang="scss" scoped></style>
