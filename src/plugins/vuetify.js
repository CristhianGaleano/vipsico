import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#171b34",
                accent: "3D87E4"
            }
        }
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
});
