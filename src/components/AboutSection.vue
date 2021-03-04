<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <!-- <h1 class="font-weight-light display-2">¿Quienes somos?</h1> -->
              <h1 class="font-weight-light display-1 mb-3">
                Enepsi es
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Un movimiento estudiantil que busca promover espacios de reflexión y discusión sobre temas, problemas y fenómenos vigentes en la psicología a través de eventos académicos. Es también un espacio de intercambio y participación activa en la construcción de aprendizajes.
                  </p>
                </v-col>
              </v-row>
              <v-row>
              <h1 class="font-weight-light display-1 mb-3">¿A quién se dirige?</h1>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Se dirige a estudiantes de psicología de todo del país, interesados en los procesos de investigación y formación académica. 
                  </p>
                </v-col>
              </v-row>
              <v-row>
                
              <h1 class="font-weight-light display-1 mb-3">ENEPSI-VI te ofrece</h1>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Una experiencia formativa, social y cultural. Donde podrás conocer las diferentes perspectivas investigativas de los estudiantes de psicología del país.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
