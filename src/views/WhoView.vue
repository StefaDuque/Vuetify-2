<template>
    <NavBar>
        <WhoCom/>
    </NavBar>
    <FooterP/>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components

  import NavBar from '../components/NavBar.vue';
  import WhoCom from '../components/WhoCom.vue';
  import FooterP from '../components/FooterP.vue';
  
  export default defineComponent({
    name: 'WhoView',
  
    components: {
      WhoCom,
      NavBar,
      FooterP
    },
  });
  </script>