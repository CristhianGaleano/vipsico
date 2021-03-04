<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        ENEPSI-VI te ofrece una experiencia formativa, social y cultural. Donde podrás conocer las diferentes perspectivas investigativas de los estudiantes de psicología del país. 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Oficina de Comunicaciones - Universidad Catòlica de Pereira</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/ENEPsi-VI-103668431400330",
      },
      // {
      //   text: "mdi-twitter",
      //   link: "",
      // },
      // {
      //   text: "mdi-linkedin",
      //   link: "",
      // },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/enepsi6/",
      },
    ],
  }),
};
</script>
