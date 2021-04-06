<template>
<div>
  <WorldInfoToolbar :context="context" @set-theme="$emit('set-theme', $event)"></WorldInfoToolbar>

  <div style="padding-top: 50px">    
    <router-view :class="theme" :context="context" @set-theme="theme=$event"></router-view>
  </div>
</div>
</template>

<script>
//-----------------------------------------------
import WorldInfoToolbar from './components/WorldInfoToolbar'
import Context from './models/Context'
//-----------------------------------------------
export default {
  name: 'App',
  components: { WorldInfoToolbar },
  data() {
    return {
      context: null,
      theme: 'light'
    }
  },
  created() {
    this.context = new Context();
  }
}
</script>