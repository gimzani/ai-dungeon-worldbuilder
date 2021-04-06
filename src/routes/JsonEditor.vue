<template>
<div class="world-info">
  <div class="work-area">
    <VJsoneditor v-model="context.WorldInfos" :options="options"></VJsoneditor>
  </div>  
</div>
</template>

<script>
//--------------------------------------------
import VJsoneditor from 'v-jsoneditor'
//--------------------------------------------
export default {
  name: "JsonEditor",
  props: { context: Object },
  components: { VJsoneditor },
  data() {
    return {
      options: {}
    }
  }
}
</script>