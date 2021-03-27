<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <home />
      <!-- <about /> -->
      <!-- Objetivo -->
      <download />
      <!-- categorías -->
      <inscripciones />
      <tabs />
      <!--Ponentes -->
      <pricing />
      <comite></comite>
      <contact />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>
.v-main {
  /* background-image: url("~@/assets/img/bgMain.png"); */
  background-color: #ffffff;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import tabs from './components/Tabs'
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import download from "./components/DownloadSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";
import Inscripciones from './components/inscripciones';
import Comite from './components/Comite';



export default {
  name: "App",

  components: {
    navigation,
    foote,
    home,
    about,
    tabs,
    download,
    pricing,
    contact,
    Inscripciones,
    Comite
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "#fff";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        // color nav inicial y scrolling
        this.color = "#f9f9f9";
        this.flat = false;
      } else {
        // cuando retorna
        this.color = "#fff";
        this.flat = false;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
