<template>
   <NavBar>
    <ContactCom/>
  </NavBar>
  <FooterP/>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavBar from '../components/NavBar.vue';
  import ContactCom from '../components/ContactCom.vue';
  import FooterP from '../components/FooterP.vue';
  
  export default defineComponent({
    name: 'ContactView',
  
    components: {
      ContactCom,
      NavBar,
      FooterP
    },
  });
  </script>