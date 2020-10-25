<template>
<div class="world-entries-list">
  <div class="world-entries-list__filter">
    <div>
      <button class="btn btn-sm btn-outline-danger" v-if="context.Picklist.length>0" @click="batchRemoveEntries()">        
        <font-awesome-icon class="text-danger" icon="times" /> Remove Selected
      </button>
    </div>
    <WorldInfosListFilter :context="context" v-model="query" @filter="filterEntries()"></WorldInfosListFilter>
  </div>
  <div class="container">
    <div class="world-entry" v-for="e in filteredEntries" :key="e.id">
      <WorldEntryItem :item="e" :context="context" @remove="removeEntry($event)"></WorldEntryItem>
    </div>
  </div>
</div>
</template>

<script>
//-----------------------------------------------
import swal from 'sweetalert'
import WorldEntryItem from './WorldEntryItem'
import WorldInfosListFilter from './WorldInfosListFilter'
//-----------------------------------------------
export default {
  name: "WorldinfosList",
  components: { WorldEntryItem, WorldInfosListFilter },
  props: {
    context: Object
  },
  data() {
    return {
      query: null,
      filteredEntries: []
    }
  },
  computed: {
    worldEntries() { return this.context.WorldInfos }
  },
  watch: {
    worldEntries() { this.init(); }
  },
  mounted() { this.init(); },
  methods: {
    init() {
      this.filterEntries();
    },
    filterEntries() {
      if(this.query != null) {
        let filteredItems = this.worldEntries.filter(item => {
          if(item.entry.toLowerCase().indexOf(this.query.toLowerCase()) >= 0) {
            return item;
          }
        });
        this.filteredEntries = filteredItems;
      } else {
        this.filteredEntries = [...this.worldEntries];
      }
    },
    removeEntry(item) {      
      this.context.removeEntry(item);
    },
    batchRemoveEntries() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover these items on this list!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.context.batchRemoveEntries();
        } 
      });
    }
  }
}
</script>