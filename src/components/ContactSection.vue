<template>
  <section class="pb-8" id="inscripciones">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Inscripciones</h1>
              <h3 class="font-weight-light mt-3">
                <p>Hasta el <span class="font-weight-medium">24 de abril de 2021</span></p>
              </h3>
              <h3 class="font-weight-light mt-3">
                Proceso de inscripción
              </h3>
              <ul>
                <li>Pago a través de las cuentas bancarias  </li>
                <li>Acceso al formulario de inscripción y suministrar los datos requeridos: Formulario  de inscripción en google:  xxxxxxxx</li>
                <li>Al final del formulario adjuntar el recibo de pago para hacer la respectiva corroboración </li>
              </ul>
              <h3 class="font-weight-light mt-3">
                Telefone: +xx (xx) xxxxx-xxxx
              </h3>
              <h3 class="font-weight-light">
                Email: enepsi6@ucp.edu.co
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              

              <v-divider></v-divider>
              <v-card>
              
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="text-center font-weight-light display-1 ">Costo de inscripción</v-list-item-title>
                  </v-list-item>
                </v-list>

                <v-flex>
                  <v-divider></v-divider>
                  <v-row justify="center">
                    <v-col cols="5"><span class="text-center font-weight-medium">Estudiantes</span></v-col>
                    <v-col cols="5" class="text-center font-weight-medium">$25000</v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row justify="center">
                    <v-col cols="5"><span>Docentes y profesionales</span></v-col>
                    <v-col cols="5" class="text-center">$50000</v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row justify="center">
                    <v-col cols="5"><span>Ponentes</span></v-col>
                    <v-col cols="5" class="text-center">$0</v-col>
                  </v-row>
                  <v-divider></v-divider>
                </v-flex>

                <!-- <v-card-actions>
                  <v-btn text>Cristhian</v-btn>
                </v-card-actions> -->
              </v-card>

              <!-- 

                <v-form @submit="onSubmit" ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nome"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  label="Mensagem"
                  required
                />

                <v-btn
                  :disabled="!valid"
                  color="primary"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  type="submit"
                >
                  Enviar
                </v-btn>
              </v-form>
               -->

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>

import Cuentas from './Cuentas';

export default {
  
  components: {    Cuentas  },

  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
  }),
  methods: {
    onSubmit (e) {
      //Código para enviar mensagens
      console.log("teste")
      e.preventDefault();
    }
  }
};
</script>