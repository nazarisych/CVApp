import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {createVuetify} from 'vuetify'

const myCustomLightTheme = {
    dark: false,
    colors: {
        primary: '#6200EE',
    }
}
export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        },
    },
});
