<template>
<div class="toolbar">

  <div class="app-header__title">
    <h1 class="nomargin">World Infos</h1>
  </div>

  <div>
    <div class="btn-group">

      <button class="btn btn-sm btn-outline-secondary" @click="newWorldEntriesDialog()" title="New World Entries File (.json)">
        <font-awesome-icon class="text-warning" icon="file" />
      </button>
      <button class="btn btn-sm btn-outline-secondary" @click="openWorldEntriesDialog()" title="Open World Entries File (.json)">
        <font-awesome-icon class="text-warning" icon="folder-open" />
      </button>
      <button class="btn btn-sm btn-outline-secondary" @click="addWorldEntriesDialog()" title="Merge File with current list" v-if="context.WorldInfos.length>0">
        <font-awesome-icon class="text-warning" icon="folder-plus" />
      </button>
      <button class="btn btn-sm btn-outline-secondary" @click="saveWorldEntriesAsDialog()" title="Save World Entries As" v-if="context.WorldEntriesFilePath">
        <font-awesome-icon class="text-success" icon="file-export" />
      </button>   
      <button class="btn btn-sm btn-outline-secondary" @click="saveWorldEntries()" title="Save World Entries" v-if="context.WorldEntriesFilePath">
        <font-awesome-icon class="text-success" icon="save" />
      </button>  
    
    </div>
  </div>
</div>
</template>

<script>
//-----------------------------------------------
const { dialog } = require('electron').remote;
import * as ipc from '../utils/ipc'
//-----------------------------------------------
export default {
  name: "WorldInfoToolbar",
  props: { context: Object },
  methods: {
      
    //-------------------------------------------------------------  save to and load from file
    newWorldEntriesDialog() {
      dialog.showSaveDialog({ title: 'New WorldEntries File', filters: [{ name: "WorldEntries File", extensions:['json'] }] }).then(res => {
        let worldEntriesFilePath = res.filePath;
        if(worldEntriesFilePath) {            
          this.context.setWorldEntriesFilePath(worldEntriesFilePath);
          this.setWorldInfos([]);
          this.saveWorldEntries();
        }
      })
    },

    openWorldEntriesDialog() {
      dialog.showOpenDialog({ title: 'Select WorldEntries File', properties: ['openFile'], filters: [{ name: "WorldEntries File", extensions:['json'] }]}).then(res => {
        let worldEntriesFilePath = res.filePaths[0]; 
        if(worldEntriesFilePath) {
          ipc.loadWorldEntries(worldEntriesFilePath).then(worldEntriesData => {    
            this.context.setWorldEntriesFilePath(worldEntriesFilePath);
            this.setWorldInfos(worldEntriesData);
          });
        }
      })
    },

    addWorldEntriesDialog() {
      dialog.showOpenDialog({ title: 'Select WorldEntries File', properties: ['openFile'], filters: [{ name: "WorldEntries File", extensions:['json'] }]}).then(res => {
        let worldEntriesFilePath = res.filePaths[0]; 
        if(worldEntriesFilePath) {
          ipc.loadWorldEntries(worldEntriesFilePath).then(worldEntriesData => {    
            this.addWorldInfos(worldEntriesData);
          });
        }
      })
    },

    saveWorldEntriesAsDialog() {
      dialog.showSaveDialog({ title: 'Save WorldEntries File As', filters: [{ name: "WorldEntries File", extensions:['json'] }] }).then(res => {
        let worldEntriesFilePath = res.filePath;
        if(worldEntriesFilePath) {            
          this.context.setWorldEntriesFilePath(worldEntriesFilePath);
          this.saveWorldEntries();
        }
      })
    },

    saveWorldEntries() {
      ipc.saveWorldEntries({filePath: this.context.WorldEntriesFilePath, worldEntries: this.context.WorldInfos}).then(() => {
        this.$toasted.global.saveProject();
      });
    },

    addWorldInfos(data) {
      this.context.addWorldInfos(data);
      if(data.length > 1) {
        this.context.sortWorldInfos();
      }
    }, 

    setWorldInfos(data) {
      this.context.setWorldInfos(data);
      if(data.length > 1) {
        this.context.sortWorldInfos();
      }
    }

    //------------------------------------------------------------- 
  }
}
</script>