<template>
  <NavBar>
  <AboutCom/>
</NavBar>
<FooterP/>
</template>

<script>
import { defineComponent } from 'vue';

// Components

import NavBar from '../components/NavBar.vue';
import AboutCom from '../components/AboutCom.vue';
import FooterP from '../components/FooterP.vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    AboutCom,
    NavBar,
    FooterP
  },
});
</script>
