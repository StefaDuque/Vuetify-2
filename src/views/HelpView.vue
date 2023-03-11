<template>
  <NavBar>
    <HelpCom/>
</NavBar>
<FooterP/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import HelpCom from '../components/HelpCom.vue';  
import FooterP from '../components/FooterP.vue';

export default defineComponent({
  name: 'HelpView',

  components: {
    HelpCom,
    NavBar,
    FooterP
  },
});
</script>