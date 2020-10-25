<template>
<router-view :context="context"></router-view>
</template>

<script>
//-----------------------------------------------
import Context from './models/Context'
//-----------------------------------------------
export default {
  name: 'App',
  data() {
    return {
      context: null
    }
  },
  created() {
    this.context = new Context();
  }
}
</script>