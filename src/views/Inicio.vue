<template>
 <NavBar>
  <template v-slot:drawer>  
    <ButtonV/>
  </template>
  <template v-slot:main>
    <HelloWorld/>
  </template>
  <template v-slot:footer>
   <FooterP/>
  </template>
 </NavBar>
</template>
  
  <script>
  import { defineComponent } from 'vue';

  import NavBar from '../components/NavBar.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import FooterP  from '@/components/FooterP.vue'
  
  export default defineComponent ({
    name: 'InicioP',
    components: {
    NavBar,
    HelloWorld,
    FooterP
}
  })
  </script>