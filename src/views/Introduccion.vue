<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introduction / Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img.nW(src='@/assets/curso/t0-i1.svg', alt='Personas haciendo fila para registrarse en sala de espera')

    .cajon.color-secundario.p-5.mb-4
      p.mb-4  The check-in or passenger registration process at the airport and the passenger boarding process are of great importance for the flight close-out. Most airlines have implemented the use of technology to make these processes more efficient. When the check-in, at the start of the flight, or in a connecting flight, is performed in a timely and effective manner, time and resources are minimized and the generation of non-conformities from users is avoided.
      p Good service and the efficient execution of technical procedures that facilitate the trip is key to the satisfaction of a traveler.
    .tarjeta.translated.p-5.mb-5
      p.mb-4 El proceso de <i>check-in</i> o de registro de pasajeros en aeropuerto y el proceso de embarque de pasajeros son de gran importancia para el cierre de un vuelo. La mayoría de las aerolíneas ha implementado el uso de la tecnología para agilizar dichos procesos. Cuando el registro en el inicio del vuelo o en conexión es ejecutado de manera oportuna y efectiva, se minimizan tiempos y recursos y se evita la generación de inconformidades por parte de los usuarios.
      p  El buen servicio y la eficiente ejecución de procedimientos técnicos que faciliten el viaje es clave para la satisfacción de un viajero.














</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
