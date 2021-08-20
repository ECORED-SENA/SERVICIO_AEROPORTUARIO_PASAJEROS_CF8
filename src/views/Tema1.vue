<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Management process in counter // <i>Proceso de manejo en counter</i>

    .row.mb-4
      .col-lg-6
        .cajon.color-secundario.p-5.mb-5
          p.mb-3  The registration or check-in process is the process by which passengers confirm their trip, arriving at the airport in advance. In Colombia, for national or domestic flights, the traveler has to be at the airport 2 hours in advance and for international flights, 3 hours in advance. Compliance with these times by the passenger guarantees a boarding pass. During check-in, information is obtained with which the flight plan is created according to the weight of both passengers and luggage.
          p.mb-0 In most cases, the passenger´s seating location inside the aircraft is determined during this process. In addition, it is there where the person will verify the travel documentation and receive the information about the luggage that is allowed within the baggage allowance. 
      .col-lg-6
        figure
          img(src='@/assets/curso/t1-i1.svg', alt='gente en sala de espera')
    p.mb-5  El proceso de registro o check-in, es el proceso mediante el cual los pasajeros confirman su viaje con la llegada al aeropuerto con anterioridad. En Colombia los tiempos de presentación para vuelos nacionales o domésticos es de 2 horas y para vuelos internacionales es de 3 horas. El cumplimiento de estos tiempos por parte del pasajero garantiza una tarjeta de embarque. Durante el check-in se obtiene información con la que se crea el plan de vuelo según el peso, tanto de pasajero como de equipaje. En la mayoría de los casos, la ubicación dentro del avión se determina durante este proceso. Además, es allí donde la persona verificará la documentación de viaje y recibirá la información sobre el equipaje que está permitido dentro de la franquicia del equipaje.

    #t_1_1.titulo-segundo
      h2 1.1. Passenger security interview // <i>Entrevista de seguridad del pasajero</i>
    .row.mb-4
      .col-lg-7
        .cajon.color-secundario.p-5.mb-5
          p.mb-3  This is a very important step that takes place at the beginning of the travel process. It corresponds to one of the security processes which is performed to prevent incidents or accidents. The security procedure for a flight does not apply only to passengers; it also applies to crews.
          p.mb-3  Security interviews normally apply for flights to the USA as commanded by the TSA (Transportation Security Administration). This North American agency is in charge of managing everything related to security in the different transport systems, especially the air one.
          p.mb-3  The questions asked during this interview refer to dangerous goods, corrosive substances, explosives, lithium batteries, etc. They are intended to prevent luggage from containing items not suitable for commercial flight.
 
      .col-lg-5
        figure
          img(src='@/assets/curso/t1-i2.svg', alt='mujer registrandose en sala de espera')
    p.mb-3  Este es un paso muy importante que tiene lugar al inicio del proceso de viaje, corresponde a uno de los procesos de seguridad con el que se busca la prevención de incidentes o accidentes. El procedimiento de seguridad para un vuelo no aplica solo para los pasajeros, también aplica para las tripulaciones.
    p.mb-3  Las entrevistas de seguridad normalmente aplican para vuelos a los Estados Unidos por directriz de la TSA (Transportation Security Administration), esta entidad norteamericana es la encargada de gestionar todo lo relacionado con la seguridad en los diferentes sistemas de transporte, en especial el aéreo.
    p.mb-5  Las preguntas formuladas durante esta entrevista hacen referencia a las mercancías peligrosas, sustancias corrosivas, explosivos, baterías de litio, etc. Tienen el fin de evitar que el equipaje contenga mercancía no apta para vuelo comercial.

    h3.titulo-tercero A. Questions passangers may be asked at check-in // Preguntas que los pasajeros pueden tener que responder durante el registro en el aeropuerto.

    .row.mb-4
      .col-lg-12
        .cajon.color-secundario.p-5
          p.mb-0  Read and review the security questions a traveler may have to answer at check-in.
    p.mb-5  Leer y revisar atentamente las preguntas de seguridad que un viajero puede tener que responder durante su registro en el aeropuerto.

    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i3.svg', alt='imagen decorativa')
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 Niveles del lenguaje
          table
            tr
              th  
                span.text-Bold  Are you checking any bags?<br>
                span.text-normal Yes, just one
              th

            tr
              td Vulgar
              td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
            tr
              td Coloquial
              td It isn’t what you are, but what you’re going to become. Don’t censor yourself.  Sterility leads to susceptibility.It is, in effect, conditioned to prefer bad design.







    Separador
    br
    br      

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
