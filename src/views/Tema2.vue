<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Passenger boarding process / <i>Proceso de embarque del pasajero</i>
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/t2-i1.svg', alt='imagen decorativa alusiva a pasajeros haciendo fila para abordar un avion')
    
    .cajon.color-secundario.p-5.mb-3
      p The passenger boarding process begins at the check-in counter, when travelers are given all the detailed information on their boarding pass related to the departure lounge. This is the same information that is displayed on the screens inside the airport facilities. The departure lounge is the waiting room closest to the departure gate of your flight. It is there where the airline staff will be assisting the passengers in boarding the plane.
    .tarjeta.translated.p-5.mb-5
      p.mb-0.text-it  El proceso de embarque de pasajeros inicia cuando en el mostrador de registro se les entrega a los viajeros toda la información detallada en su tarjeta de embarque de la sala de abordaje que es la misma en las pantallas informativas que hay dentro de las instalaciones del aeropuerto. La sala de embarque es la sala de espera más próxima a la puerta de su vuelo, es allí donde el personal de la aerolínea dará el manejo a los pasajeros para poder acceder al avión.

    #t_2_1.titulo-segundo
      h2 2.1 Making of boarding announcements at the boarding gate area / <i>Manejo de anuncios en sala de abordaje</i>
    .row.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t2-i2.svg', alt='Icono decorativo')
      .col-lg-9
        .cajon.color-secundario.p-5.mb-3
          p One of the steps in the boarding process are boarding announcements that provide passengers with information about the flight and its possible changes. It is important to make these announcements periodically to guide travelers.
        .tarjeta.translated.p-5.mb-3
          p.text-it Uno de los pasos en el proceso de abordaje son los anuncios de abordaje que brindan información a los pasajeros acerca del vuelo y sus posibles novedades. Es importante hacer estos anuncios periódicamente para orientar a los viajeros.

    h3.titulo-tercero A. Guidelines for making boarding announcements at the boarding gate area / <i>Parámetros para los anuncios en sala de abordaje</i>
    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2-i3.svg', alt='imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-8
        .card.bg-soft-gray
          .card-title.color-acento-botones
            .h4 Structure of a boarding announcement
          .card-body.px-5
             ol.lista-ol
              li 
                span.text-normal-bold 1. 
                p.text-bold  Greeting / 
                  span.text-normal.text-it (Saludar)
              li 
                span.text-normal-bold 2. 
                p.text-bold  Tell the name of the Airline / 
                  span.text-normal.text-it  (Decir el nombre de la aerolínea)                    
              li 
                span.text-normal-bold 3. 
                p.text-bold  State clearly the Flight Number / 
                  span.text-normal.text-it (Decir claramente el número del vuelo)
              li 
                span.text-normal-bold 4. 
                p.text-bold  State the Route / 
                  span.text-normal.text-it (Decir la ruta)
              li 
                span.text-normal-bold 5. 
                p.text-bold Tell the Boarding Gate Number / 
                  span.text-normal.text-it (Decir el número de la sala de abordaje)
              li 
                span.text-normal-bold 6. 
                p.text-bold.text-it  Inform of any changes that may arise / 
                  span.text-normal.text-it (Informar alguna novedad que haya surgido)                 
    
    h3.titulo-tercero B. Sample Boarding Announcements. With the help of your tutor, explore the different elements in the following announcements and practice reading them out loud. / <i>Ejemplos de anuncios de embarque. Con la ayuda del instructor, explorar los diferentes elementos de los siguientes anuncios y practicar su lectura en voz alta.</i>
    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img.nW(src='@/assets/curso/t2-i4.svg', alt='una auxiliar de vuelo de pie')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Pre-boarding Announcement")
            .col-md-10.mb-4.mb-md-0
              p Good afternoon, ladies and gentlemen! Your SENA Airways flight SA433 to Cali is now ready for boarding. Please, proceed to Gate B3. We kindly ask Business Class passengers and passengers with small children to proceed to the airplane at their convenience without queuing. Passengers requiring special assistance can also begin boarding now. Please have your boarding pass and ID ready. Regular boarding will start in approximately twelve minutes. Thank you.      

          .row(titulo="Announcing a Flight Delay")
            .col-md-10.mb-4.mb-md-0
              p Good morning. This announcement is for passengers travelling on the 8:25 flight SA387 to Baltimore with stops in Panama City and Miami. The boarding Gate has been changed to C2. The flight is delayed by one hour and forty minutes due to bad weather. The flight is also slightly overbooked, so we are offering a complimentary travel voucher worth $300 to a few passengers willing to take a later flight. Our new departure time is 10:05. Thank you for your patience.    

          .row(titulo="Final Boarding Call Announcement")
            .col-md-10.mb-4.mb-md-0
              p This is the final boarding call for passengers travelling to Baltimore on SENA Airways flight SA387 due to leave at 10:05. Will any remaining passengers, please, proceed to Gate C2 immediately, where the flight is now closing? I repeat. This is the final boarding call for passengers travelling to Baltimore on Sena Airways flight SA387. Thank you.    
    
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .card.bg-soft-blue
          .row
            .col-lg-9
              .p-4
                ul.lista-ul
                  li.text-bold Ready for boarding   
                    span.text-normal.text-it  / Listo para abordar
                  li.text-bold Proceed to Gate B3  
                    span.text-normal.text-it / Proceda a la Puerta B3
                  li.text-bold  Without queuing    
                    span.text-normal.text-it / Sin hacer fila
                  li.text-bold  With stops in…  
                    span.text-normal.text-it / Con escalas en…
                  li.text-bold  Due to bad weather   
                    span.text-normal.text-it / Debido al mal tiempo
                  li.text-bold  The flight is also slightly overbooked    
                    span.text-normal.text-it / El vuelo también está ligeramente sobrevendido
                  li.text-bold A complimentary travel voucher worth $300   
                    span.text-normal.text-it / Un voucher de viaje de cortesía por valor de $300
                  li.text-bold  Due to leave at…    
                    span.text-normal.text-it / Previsto para salir a las…
                  li.text-bold  Remaining passengers    
                    span.text-normal.text-it / Los pasajeros que hacen falta
                  li.text-bold  The flight is now closing    
                    span.text-normal.text-it  / El vuelo ahora se está cerrando                    

                    
            .col-lg-3.align-items-bottom
              figure
                img(src='@/assets/curso/t2-i5.svg', alt='una mujer pensando')

    #t_2_2.titulo-segundo
      h2 2.2  Completion of reports and forms for the boarding process / <i>Diligenciamiento de informes y formatos para el proceso de abordaje</i>

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-secundario.p-5.mb-3
          p The flight close-out process is of the utmost importance. Detailed information of the flight and about any changes is given here, that is, information about the flight deck crew and cabin crew operating the flight, how many passengers travel in the different cabins (first, business and economy class), infants on the flight, how many adults, the weight of the flight, whether employees of the same airline are on board this flight, the special services requested on the flight, etc.
        .tarjeta.translated.p-5.mb-5
          p.text-it El cierre del vuelo al finalizar el abordaje es de suma importancia ya que en este está el detallado de novedades del vuelo, es decir, información acerca de la tripulación de cabina de mando y de cabina de pasajeros que opera el vuelo, cuántos pasajeros viajan en las diferentes cabinas (primera clase, ejecutiva y económica), infantes en el vuelo, cuántos adultos, el peso del vuelo, si en este vuelo están abordados empleados de la misma aerolínea, los servicios especiales solicitados en el vuelo, etc.
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i6.png', alt='sillas de sala de espera en un aeropuerto')

    .row.justify-content-center.mb-3
      .col-lg-10
        .cajon.color-secundario.p-5.mb-5
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 <b>The Flight Close-Outmessage</b> indicates the actual date and time of departure of a flight, the total passengers onboard, and identifies travelers, using their unique identifier, who boarded the aircraft. Two types of Flight Close-Out messages are available. One option indicates the unique identifiers of passengers who were boarded. A second option indicates the unique identifiers of passengers who were not boarded.<br>
              .bloque-texto-d__autor
                p.text-bold According to DHS Pre-departure Aircraft Operator Compliance Requirements Reference Guide (2007, p. 24).
              i.fas.fa-quote-right
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-5
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.text-it <b>El mensaje de cierre de vuelo </b> indica la fecha y hora reales de salida de un vuelo, el total de pasajeros a bordo e identifica a los viajeros, utilizando su identificador único, que abordaron la aeronave. Hay dos tipos de mensajes de cierre de vuelo disponibles. Una opción indica los identificadores únicos de los pasajeros que fueron abordados. Una segunda opción indica los identificadores únicos de los pasajeros que no fueron abordados.<br>
              .bloque-texto-d__autor
                p.text-bold Según la DHS Pre-departure Aircraft Operator Compliance Requirements Reference Guide (2007, p. 24).
              i.fas.fa-quote-right














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
