<template>
<div class="input-group input-group-sm mb-3">
  <input type="text" class="form-control" placeholder="Enter Keys separated by commas" v-model="worldKey" />
  <div class="input-group-append">
    <button type="button" class="btn btn-sm btn-outline-secondary" title="Add World Entry" @click="createNew()">
      <font-awesome-icon class="text-success" icon="plus" />
    </button>
  </div>
</div>
</template>

<script>
//--------------------------------------------
import WorldEntry from '../models/WorldEntry'
//--------------------------------------------
export default {
  name: "NewWorldEntry",
  props: { context: Object },
  data() {
    return {
      worldKey: null
    }
  },
  methods: {
    createNew() {
      if(this.worldKey) {
        let entry = new WorldEntry({ keys: this.worldKey });
        this.context.addEntry(entry);
        this.worldKey = null;
      }
    }
  }
}
</script>