<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Management process in counter // <i>Proceso de manejo en counter</i>

    #t_1_1.titulo-segundo
      h2 1.1. Passenger security interview // <i>Entrevista de seguridad del pasajero</i>


    #t_1_2.titulo-segundo
      h2 1.2  Airport information // <i>Información del aeropuerto</i>



    #t_1_3.titulo-segundo
      h2 1.3  Validation of information in travel documents // <i>Validación de la información de los documentos del viaje</i>


    #t_1_4.titulo-segundo
      h2 1.4  Offer and charging of special services // <i>Oferta y cobro de servicios especiales</i>
















    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
