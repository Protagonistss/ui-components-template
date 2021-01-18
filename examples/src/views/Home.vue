<template>
  <div>home</div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.setFoo('foo')
  },
  methods: {
    setFoo(param) {
      console.log(param)
    },
  },
}
</script>

<style lang="scss" scoped></style>
