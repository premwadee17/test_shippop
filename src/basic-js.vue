<template lang="">
  <div></div>
</template>
<script>
export default {
  name: 'basic-js',
  methods: {
    logData (firstName, lastName) {
      if (firstName === 'Shippop') {
        console.log('"Best Online Shipping Platform"')
      } else {
        console.log(`"Hello Shippop, My name is {{${firstName}}} {{${lastName}}}"`)
      }
    },
    copyArrayObj () {
      const array = [{
        number: 10,
        name: 'hello!'
      }]
      const copy = [...array]
      const copy1 = array.slice()
      console.log('copy ', copy)
      console.log('copy1 ', copy1)
    }
  },
  created () {
    this.logData('Shippop', 'Hello!')
    this.copyArrayObj()
  }
}
</script>
