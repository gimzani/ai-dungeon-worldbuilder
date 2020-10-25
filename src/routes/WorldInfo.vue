<template>
<div class="world-info">
  <div>
    <WorldInfoToolbar :context="context"></WorldInfoToolbar>
  </div>
  <div class="work-area">
    <div class="ml-auto" style="width:350px;">      
      <NewWorldEntry :context="context"></NewWorldEntry>
    </div>
    <WorldInfosList :context="context"></WorldInfosList>
  </div>
</div>
</template>

<script>
//--------------------------------------------
import WorldInfoToolbar from '../components/WorldInfoToolbar'
import NewWorldEntry from '../components/NewWorldEntry'
import WorldInfosList from '../components/WorldInfosList'
//--------------------------------------------
export default {
  name: "WorldInfo",
  props: { context: Object },
  components: { WorldInfoToolbar, WorldInfosList, NewWorldEntry }
}
</script>