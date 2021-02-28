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


    <div v-if="query">
      <div class="world-entry" v-for="e in filteredEntries" :key="e.id">
        <WorldEntryItem :item="e" :context="context" @remove="removeEntry($event)" :can-drag="false"></WorldEntryItem>
      </div>   
    </div>
  
    <draggable v-else v-model="context.WorldInfos"
      handle=".handle"  
      group="world-infos" 
      @start="drag=true" 
      @end="drag=false" 
      :animation="200">
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <div class="world-entry" v-for="e in context.WorldInfos" :key="e.id">
          <WorldEntryItem :item="e" :context="context" @remove="removeEntry($event)" :can-drag="true"></WorldEntryItem>
        </div>        
      </transition-group>
    </draggable>


  </div>
</div>
</template>

<script>
//-----------------------------------------------
import swal from 'sweetalert'
import draggable from 'vuedraggable'
import WorldEntryItem from './WorldEntryItem'
import WorldInfosListFilter from './WorldInfosListFilter'
//-----------------------------------------------
export default {
  name: "WorldinfosList",
  components: { WorldEntryItem, WorldInfosListFilter, draggable },
  props: {
    context: Object
  },
  data() {
    return {
      query: null,
      drag: false,
      filteredEntries: []
    }
  },
  watch: {
    context() { this.init(); }
  },
  mounted() { this.init(); },
  methods: {
    init() {
      this.filterEntries();
    },
    filterEntries() {
      if(this.query != null) {
        let filteredItems = this.context.WorldInfos.filter(item => {
          let query = this.query ? this.query.toLowerCase() : '';
          if(query.length>0) {

            let isTitle = (item.keys && item.keys.indexOf(query) >= 0);
            let isInContent = (item.entry && item.entry.toLowerCase(query).indexOf() >= 0);

            if(isTitle || isInContent) {
              return item;
            }
          } else {
            return item;
          }

        });
        this.filteredEntries = filteredItems;
      } else {
        this.filteredEntries = [...this.context.WorldInfos];
      }
    },
    setEntries(evt) {
      let entries = [...this.context.WorldInfos];
      entries.splice(evt.moved.oldIndex, 1);
      entries.splice(evt.moved.newIndex, 0, evt.moved.element);
      this.context.setWorldInfos(entries);      
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