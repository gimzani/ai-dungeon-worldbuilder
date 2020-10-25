<template>
<div class="input-group input-group-sm" v-if="context.WorldInfos.length > 1">
  <div class="input-group-prepend">
    <div class="input-group-text">
      Filter Items:
    </div>
  </div>
  <input type="search" class="form-control" :value="value" @input="$emit('input', $event.target.value)" @keypress.enter="$emit('filter')" @search="$emit('filter')" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" @click="$emit('filter')">
      <font-awesome-icon class="text-info" icon="search" />
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "WorldInfosListFilter",
  props: { 
    value: String,
    context: Object
  }
}
</script>