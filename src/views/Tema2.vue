<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Management process in counter // Proceso de manejo en counter

      #t_2_1.titulo-segundo
        h2 2.1 Making of boarding announcements at the boarding gate área // Manejo de anuncios en sala de abordaje


      #t_2_2.titulo-segundo
        h2 2.2  Completion of reports and forms for the boarding process // Diligenciamiento de informes y formatos para el proceso de abordaje




















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
