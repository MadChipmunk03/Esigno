import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: false,
    themes: {
      light: {
        primary: '#327DDA',
        successText: '#409230',
        primaryText: '#327DDA',
        warningText: '#E47410',
        errorText: '#E4162F',
        successBg: '#E2EFE0',
        primaryBg: '#E0ECF9',
        warningBg: '#FBEADB',
        errorBg: '#FBDCE0'
      },
    },
  },
});
