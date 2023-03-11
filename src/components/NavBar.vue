<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" >
        <v-btn
        v-for="(item, index) in rutas" :key="index"
        block
        color="primary"
        class=" d-block ma-auto pa-2 "
        variant="tonal"
        @click="url(item.ruta)">
        <span>{{ item.nombre }}</span>
        </v-btn>
      </v-navigation-drawer>
  
      <v-app-bar class="bg-blue-accent-1">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Application</v-toolbar-title>
        <v-btn variant="outlined">
          Acceder
        </v-btn>
      </v-app-bar>
  
      <v-main>
        <slot></slot>
        <slot></slot>
      </v-main>
    </v-app>
  </template>
  
  <script>
   export default{
        name: 'VBtn',
        data: () => ({drawer : false,
        rutas:[
          {nombre:'Home', ruta: '/'},
          {nombre:'About', ruta: '/about'},
          {nombre:'Help', ruta: '/help'},
          {nombre:'Info', ruta: '/Info'},
          {nombre:'Contact', ruta: '/Contact'},
          {nombre:'Who', ruta: '/Who'},

        ]}),
        methods:{
        url(ruta){
          this.$router.push(ruta)
        }
      }
    }

  </script>