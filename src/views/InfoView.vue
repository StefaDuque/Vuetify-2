<template>
    <NavBar>
    <InfoCom/>
</NavBar>
<FooterP/>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components

  import NavBar from '../components/NavBar.vue';
  import InfoCom from '../components/InfoCom.vue';
  import FooterP from '../components/FooterP.vue';
  
  export default defineComponent({
    name: 'InfoView',
  
    components: {
      InfoCom,
      NavBar,
      FooterP
    },
  });
  </script>