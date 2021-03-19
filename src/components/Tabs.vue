<template>
<!-- contenedor raiz -->
  <v-container fluid>
    <v-row align="center" justify="center">
      <!-- contenedor tabs -->
    <div class="tabs-container" align>
      <div class="tabs-item" @click="handleTabClick(tabNames.EJES)" :class="{ 'tabs-item-active': activeTabName === tabNames.EJES }">
        Ejes temáticos
      </div>
      <div class="tabs-item" @click="handleTabClick(tabNames.PONENCIAS)" :class="{ 'tabs-item-active': activeTabName === tabNames.PONENCIAS }">
        Ponencias centrales
      </div>
      <div class="tabs-item" @click="handleTabClick(tabNames.MASINFO)" :class="{ 'tabs-item-active': activeTabName === tabNames.MASINFO }">
        Fechas importantes
      </div>
      <div class="tabs-item" @click="handleTabClick()">
        Memorias
      </div>
    </div>
    <Component :is="currentTab" />
    </v-row>
  </v-container>
</template>

<script>
 
import Ejes from './Ejes'
import Ponencias from './Ponencias'
import Masinfo from './masinfo'

const tabNames = {
  EJES: 'ejes',
  PONENCIAS: 'ponencias',
  MASINFO: 'masinfo',
}

export default {
  name: 'Tabs',
  components: { Ejes, Ponencias, Masinfo },
  methods: {
    handleTabClick(tabName){
      this.activeTabName = tabName;
      this.currentTab = this.tabs[tabName];
    },
  },
  created() {
      handleTabClick(tabNames.EJES);
  },
  
  data() {
    return {
      // Guarda el componente, es utilizado por Component, que esta bindead con is
      currentTab: this.activeTabName = "ejes",
      // Guarda el nombre
      activeTabName: tabNames.EJES,
      // variable de estado
      tabNames,
      tabs: {
        [tabNames.EJES]: Ejes,
        [tabNames.PONENCIAS]: Ponencias,
        [tabNames.MASINFO]: Masinfo,
      }
    }
  },
}
</script>

<style>
.tabs-container {
  display: flex;
}

.tabs-item{
  padding: 12px;
  border-bottom: 1px solid slategray;
  margin-right: 2px;
  cursor: pointer;
}
.tabs-item-active,
.tabs-item:hover {
  background-color: #bdbdbd96;
  border-bottom: 1px solid darkblue;
  color: grey;
}


</style>