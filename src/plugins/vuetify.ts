import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        // primary: colors.amber,
        bambiBlue: '#2A92AB',
      },
      dark: {
        // primary: colors.amber,
        bambiBlue: '#2A92AB',
      },
    },
  },
});
