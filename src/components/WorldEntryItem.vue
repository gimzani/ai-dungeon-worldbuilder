<template>
<div class="world-entry-item" style="border: solid 1px #ccc; border-radius: 5px; margin: 5px;">

  <header>
    <div class="p-2">
      <div>
        <span class="handle" style="margin-right:10px;" v-if="canDrag">
          <font-awesome-icon class="text-muted" icon="grip-vertical" />
        </span>
        <label class="nomargin">
          <input type="checkbox" v-model="isChecked" @change="toggleSelection()">
          {{item.keys}}
        </label>
      </div>      
    </div>
    <div class="world-entry-buttons">
      <div class="btn-group">
        <button class="btn btn-sm btn-outline-danger" @click="removeEntry(item)" title="remove item">
          <font-awesome-icon class="text-danger" icon="times" />
        </button>
        <button class="btn btn-sm btn-outline-secondary" @click="open = !open" title="show hide details">
          <font-awesome-icon class="text-info" icon="chevron-up" v-if="open" />
          <font-awesome-icon class="text-info" icon="chevron-down" v-else />
        </button>
      </div>
    </div>
  </header>

  <div  class="p-2" v-show="open">    
    <div class="form-group">
      <label for="title">Keys: (comma separated)</label>
      <input id="title" type="text" class="form-control" v-model="item.keys" @input="setDirty()" />
    </div>
    <div class="form-group">
      <label for="title">Entry Text:</label>
        <textarea ref="author" class="form-control" rows="1" v-model="item.entry" @input="setDirty(); autoExpand($event.target)"></textarea>
    </div>
  </div>

</div>
</template>

<script>
//-----------------------------------------------
import * as utils from '../utils/utils'
import swal from 'sweetalert'
//-----------------------------------------------
export default {
  name: "WorldEntryItem",
  props: { 
    item: Object,
    context: Object,
    canDrag: Boolean
  },
  data() {
    return {
      open: false,
      isChecked: false
    }
  },
  watch: {
    open(val) {
      if(val) {
        this.$nextTick(() => {            
          this.autoExpand(this.$refs.author);
        });
      }
    }
  },
  methods: {

    removeEntry(item) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this item in this list!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.setDirty();
          this.$emit('remove', item);
        } 
      });
    },

    toggleSelection() {
      if(this.isChecked) {
        this.context.addToPicklist(this.item);
      } else {
        this.context.removeFromPicklist(this.item);
      }
    },

    autoCap(val) {
      return utils.autocap(val);
    },

    autoCapAll(val) {
      return utils.autocapAll(val);
    },
    
    autoExpand(el) {
      el.style.height = 'inherit';
      var computed = window.getComputedStyle(el);
      var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                  + parseInt(computed.getPropertyValue('padding-top'), 10)
                  + el.scrollHeight
                  + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                  + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
      el.style.height = height + 'px';
    },

    setDirty() {
      this.context.setPristine(false);
    }

  }
}
</script>