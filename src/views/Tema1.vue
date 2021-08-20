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
    p.mb-5.text-it  El proceso de registro o check-in, es el proceso mediante el cual los pasajeros confirman su viaje con la llegada al aeropuerto con anterioridad. En Colombia los tiempos de presentación para vuelos nacionales o domésticos es de 2 horas y para vuelos internacionales es de 3 horas. El cumplimiento de estos tiempos por parte del pasajero garantiza una tarjeta de embarque. Durante el check-in se obtiene información con la que se crea el plan de vuelo según el peso, tanto de pasajero como de equipaje. En la mayoría de los casos, la ubicación dentro del avión se determina durante este proceso. Además, es allí donde la persona verificará la documentación de viaje y recibirá la información sobre el equipaje que está permitido dentro de la franquicia del equipaje.

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

    h3.titulo-tercero A. Questions passangers may be asked at check-in // <i>Preguntas que los pasajeros pueden tener que responder durante el registro en el aeropuerto.</i>

    .row.mb-4
      .col-lg-12
        .cajon.color-secundario.p-5
          p.mb-0  Read and review the security questions a traveler may have to answer at check-in.
    p.mb-5.text-it  Leer y revisar atentamente las preguntas de seguridad que un viajero puede tener que responder durante su registro en el aeropuerto.

    .row.mb-5
      .col-lg-2
        figure
          img.nW(src='@/assets/curso/t1-i3.svg', alt='imagen decorativa')
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          table
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Are you checking any bags? <br>
                span.text-normal Yes, just one
              td
                span.text-bold  ¿Va a registrar alguna maleta? <br>
                span.text-normal Sí, solamente una              
            tr
              td 
                span.text-bold  Did you pack your baggage yourself? <br>
                span.text-normal Yes, I packed it myself
              td
                span.text-bold  ¿Usted hizo su equipaje solo? <br>
                span.text-normal Sí, yo mismo empaqué      
            tr
              td
                span.text-bold  Are you sure nobody could have interfered with it since it was packed? <br>
                span.text-normal Yes, I packed it myself and it has been with me all the time 
              td 
                span.text-bold  ¿Estás seguro de que nadie metió mano a tu equipaje desde que empacaste? <br>
                span.text-normal Sí, yo mismo empaqué y el equipaje ha estado conmigo todo el tiempo.
            tr
              td
                span.text-bold  Are you carrying anything for anyone else? <br>
                span.text-normal No 
              td 
                span.text-bold  ¿Lleva algo que le pertenezca a alguna otra persona? <br>
                span.text-normal No

        .tabla-b.color-acento-contenido.mb-5        
          table
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Who packed your bag? <br>
                span.text-normal Me and my wife did
              td
                span.text-bold  ¿Quién empacó su maleta? <br>
                span.text-normal Mi esposa y yo lo hicimos            
            tr
              td 
                span.text-bold  When did you pack it? <br>
                span.text-normal Last night.
              td
                span.text-bold  ¿Cuándo la empacaron? <br>
                span.text-normal Anoche     
            tr
              td
                span.text-bold  Has it been with you since you packed it? <br>
                span.text-normal Yes, it has been with us all the time
              td 
                span.text-bold  ¿La han tenido con ustedes desde que la empacaron? <br>
                span.text-normal Sí, ha estado con nosotros todo el tiempo
            tr
              td
                span.text-bold  Are you traveling with any liquids? <br>
                span.text-normal No. I know I can´t take any liquids on the plane 
              td 
                span.text-bold  ¿Lleva con usted algunos líquidos? <br>
                span.text-normal No. Yo sé que no puedo llevar líquidos en el avión.               

        .tabla-b.color-acento-contenido.mb-5        
          table
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Is there anything fragile in your bags? <br>
                span.text-normal No
              td
                span.text-bold  ¿Hay alguna cosa frágil en su maleta?<br>
                span.text-normal No           
            tr
              td 
                span.text-bold  Are there any dangerous godos in your luggage (checked baggage)? <br>
                span.text-normal No, none
              td
                span.text-bold  ¿Hay mercancías peligrosas en su equipaje (equipaje facturado)? <br>
                span.text-normal No, ninguno    
            tr
              td
                span.text-bold  Are you carrying recently repaired electronic equipment? <br>
                span.text-normal No, none
              td 
                span.text-bold  ¿Lleva equipos electrónicos recientemente reparados? <br>
                span.text-normal No, ninguno
            tr
              td
                span.text-bold  Did anybody ask you to carry anything for them? <br>
                span.text-normal No, nobody 
              td 
                span.text-bold  ¿Alguien te pidió que le llevaras algo en tu equipaje? <br>
                span.text-normal No, nadie              
    
    .row.mb-5.justify-content-end
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5        
          table.table
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Is all this luggage yours? <br>
                span.text-normal Yes, it is all mine
              td
                span.text-bold  ¿Es suyo todo este equipaje?<br>
                span.text-normal Sí, todo es mío           
            tr
              td 
                span.text-bold  Did you leave your luggage unattended at any time? <br>
                span.text-normal No, it has been with me all the time
              td
                span.text-bold  ¿Dejaste tu equipaje solo en algún momento?<br>
                span.text-normal No, ha estado conmigo todo el tiempo    
            tr
              td
                span.text-bold  Do you have any spare batteries, power banks or e-cigarettes in your check-in baggage? <br>
                span.text-normal No, I don´t
              td 
                span.text-bold  ¿Tiene baterías de repuesto, cargadores portátiles o cigarrillos electrónicos en su equipaje facturado? <br>
                span.text-normal No, no tengo
            tr
              td
                span.text-bold  Excuse me, sir. Could you please come behind the counter and open your bag? <br>
                span.text-normal Sure 
              td 
                span.text-bold  Discúlpeme señor. ¿Podría pasar detrás del mostrador y abrir su maleta? <br>
                span.text-normal Seguro        

      .col-lg-2
        figure
          img.nW(src='@/assets/curso/t1-i4.svg', alt='imagen decorativa')


    p.mb-5 <b>Con la ayuda de su instructor y el uso de un diccionario,</b> buscar los términos y expresiones desconocidas en el diálogo anterior. Aquí hay algunos de estos:

    .card.bg-soft-blue.vb-list.mb-5
      .row
        .col-lg-3.d-flex.align-items-end
          figure
            img.nW(src='@/assets/curso/t1-i5.svg', alt='imagen decorativa')
        .col-lg-9
          .p-4
            p.mb-3  <i>* Luggage/baggage</i> es el término general (como equipaje) y está formado por <i>suitcases</i> (maletas) y <i>trunks</i> (baules).
            p.mb-3  En Estados Unidos se usa <i>baggage</i> con más frecuencia mientras que en el Reino Unido se usa <i>luggage</i>. Estos dos términos siempre se usan en singular.
            p.mb-3  <i>Bags</i> puede traducirse como bolsos, maletas o piezas de equipaje. <i>Bags</i> acepta la forma plural.
            p.mb-3  <i>Carry-on Baggage</i> son maletas y bolsos de un tamaño adecuado para llevarlos en la cabina del avión. Normalmente llamado <i>Hand</i> Luggage or <i>Cabin Baggage</i>.
            p.mb-3  <i>Personal Item</i> (artículo personal) puede ser una mochila, un morral, un maletín, un bolso, o un computador portátil. Es más pequeño que un <i>Carry-on bag</i>.

    h3.titulo-tercero B. Terms and concepts related to the check-in process and passenger security interview // <i>Palabras y conceptos relacionados con el proceso de registro en el aeropuerto y la entrevista de seguridad al pasajero.</i>
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-5.mb-5
          p.mb-3.text-bold  Here is a chart for you to explore more vocabulary related to the check-in process. You can use a dictionary to look up the words you do not know.
        p.mb-5  Aquí hay una tabla para explorar más vocabulario y conceptos relacionados con el proceso de registro del pasajero en el aeropuerto. Se puede apoyar en un diccionario para consultar las palabras desconocidas, a continuación se pueden ver:
    //- Slide 1  
    SlyderB.mb-5(:datos="datosSlyder")

    h3.titulo-tercero C. At the check-in counter. Explore the following dialogue with the help of a good dictionary. Pay special attention to the security questions asked by the check-in attendant. // <i>En el counter de registro. Explorar el siguiente diálogo con la ayuda de un buen diccionario. Prestar especial atención a las preguntas de seguridad que hace la asistente de counter, revisar con atención el siguiente video:</i>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.titulo-tercero D. Carry-on and Personal Item Size and Weight Limits for 3 Major Colombian Airlines. // <i>Límites de peso y tamaño para equipaje de mano y artículos personales en tres (3) aerolíneas principales de Colombia.</i>
    p.mb-5  Aquí hay una tabla para explorar más vocabulario y conceptos relacionados con el proceso de registro del pasajero en el aeropuerto. Se puede apoyar en un diccionario para consultar las palabras desconocidas, a continuación se pueden ver:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-secundario.p-4(titulo="LATAM AIRLINES")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic1.svg', alt='imagen decorativa')
          .col-lg-10
            .h4 Carry-on Size and Weight Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>21 in (55 cm) x 13 in (35 cm) x 9 in (25 cm)</b> <i>(height, depth and width)</i>, including the pcoket, wheels and handle.
              li 
                i.fas.fa-check
                p <b>10 kilos (22 pounds)</b> in <i>Economy</i> and <b>16 kilos (35 pounds)</b> in <i>Premium Economy</i> or <i>Premium Business</i>.  
            .h4 Personal Item Size Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>18 in (45 cm) x 14 in (35 cm) x 8 (20 cm)</b> <i>(height, depth and width)</i>, including the pockets, wheels, handle, etc.

      .tarjeta.color-secundario.p-4(titulo="COPA AIRLINES")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic1.svg', alt='imagen decorativa')
          .col-lg-10
            .h4 Carry-on Size and Weight Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>22’’ (56 cm)</b> <i>height</i> <b>x 14’’ (36 cm)</b><i>long</i> <b>x 10’’ (26 cm)</b><i>wide.</i>
              li 
                i.fas.fa-check
                p <b>10 kilos (22 pounds)</b> <i>for all passengers. </i>
            .h4 Personal Item Size Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>17’’ (43 cm)</b> <i>high</i> x <b>10’’ (25 cm)</b> <i>long</i> x <b>9’’ (22 cm)</b> <i>wide</i>.

      .tarjeta.color-secundario.p-4(titulo="AVIANCA")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic1.svg', alt='imagen decorativa')
          .col-lg-10
            .h4 Carry-on Size and Weight Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>55 cm x 35 cm x 25 cm</b><i> (height, length and width),</i> including wheels and handles.
              li 
                i.fas.fa-check
                p <b>10 kilos (22 pounds)</b> <i>for all passengers. </i>
            .h4 Personal Item Size Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>45 cm x 35 cm x 25 cm</b> <i>(height, length and width).</i>.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .card.bg-soft-blue.vb-list.mb-5
          .row
            .col-lg-3.d-flex.align-items-end
              figure
                img.nW(src='@/assets/curso/t1-i6.svg', alt='imagen decorativa')
            .col-lg-9
              .p-3
                p <b>Note:</b> Some personal Items you can bring into the cabin, free of cost, include: // 
                p <b>Nota:</b> Algunos artículos personales que puede traer a la cabina, sin costo, incluyen:
                ul.lista-ul.compress
                  li 
                    i.fas.fa-check
                    p <b>Food to be eaten on board the aircraft</b> // <i>[Alimentos para consumir a bordo del avión]</i>
                  li 
                    i.fas.fa-check
                    p <b>Products purchased at the airport</b> // <i>[Productos comprados en el aeropuerto]</i>
                  li 
                    i.fas.fa-check
                    p <b>A purse or handbag</b> // <i>[Un bolso o cartera]</i>
                  li 
                    i.fas.fa-check
                    p <b>A backpack</b> // <i>[Un morral]</i>
                  li 
                    i.fas.fa-check
                    p <b>A briefcase</b> // <i>[Un maletín]</i>
                  li 
                    i.fas.fa-check
                    p <b>A laptop case or bag</b> // <i>[Un maletín o bolso para portátil]</i>
                  li 
                    i.fas.fa-check
                    p <b>A video game console (PlayStation®, Xbox®, or Nintendo®)</b> // <i> [Una consola de videojuegos]</i>
                  li 
                    i.fas.fa-check
                    p <b>A jacket or coat</b> // <i>[Un chaqueta o abrigo]</i>
                  li 
                    i.fas.fa-check
                    p <b>A pocket umbrella</b> // <i>[Una sombrilla de bolsillo]</i>
                  li 
                    i.fas.fa-check
                    p <b>A travel pillow</b> // <i>[Una almohada de viaje]</i>
                  li 
                    i.fas.fa-check
                    p <b>A small waist bag (like a fanny pack)</b> // <i>[Una riñonera (como un bolso de cintura)]</i>
                  li 
                    i.fas.fa-check
                    p <b>Headphones, or reading material</b> // <i>[Auriculares o material de lectura.]</i>

    h3.titulo-tercero E. Excess Baggage. Explore this second mini-dialogue and learn the way to handle an excess baggage situation. // <i>Exceso de Equipaje. Explorar este segundo mini diálogo y aprender la forma de cómo manejar un caso de exceso de equipaje, observar con atención:</i>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    h3.titulo-tercero F. Customer Management System. At the same time the attendant at the counter asks the security questions, she also checks other aspects such as the ticket number, whether or not the passenger is fit to travel and whether they are traveling with children. This information must be included in the system. // <i>Sistema de Manejo de Clientes. Mientras la auxiliar en counter hace las preguntas de seguridad, al mismo tiempo ella revisa otros aspectos como el número de tiquete, si el pasajero está apto para viajar, si lleva niños. Dicha información debe ser incluida en el sistema.</i>
    //- Aqui vienen las imagenes horrorosas
    
    h4.titulo-cuarto PART 1 – APPLICATION, DEVICE AND NAVIGATION MENU // 
      span.text-normal  [PARTE 1 – LOS MENÚ DE APLICACIÓN, DISPOSITIVO Y NAVEGACIÓN]
    //- Aqui vienen las imagenes horrorosas
    
    
    h4.titulo-cuarto PART 2 – CLOSE FILE OPTION // 
      span.text-normal  [PARTE 2 – LA OPCIÓN DE CERRAR APLICACIONES]
    //- Aqui vienen las imagenes horrorosas    
    
    
    h4.titulo-cuarto PART 3 – LOGOFF AND HELP MENU // 
      span.text-normal  PARTE 3 – [MENÚ PARA SALIR DEL SISTEMA Y MENU DE AYUDA]
    //- Aqui vienen las imagenes horrorosas        
    
    h4.titulo-cuarto PART 4 – SENDING ERROR REPORT // 
      span.text-normal  [PARTE 4 – ENVIANDO REPORTE DE ERRORES]
    //- Aqui vienen las imagenes horrorosas       

    
    Separador
    br
    br      

    #t_1_2.titulo-segundo
      h2 1.2  Airport information // <i>Información del aeropuerto</i>
    .row.mb-5
      .col-lg-4
        figure
          img.nW(src='@/assets/curso/t1-i7.svg', alt='imagen decorativa')
      .col-lg-8
        .cajon.color-secundario.p-5
          p.mb-0  In the travel process, the passenger must go through certain areas in the airport in order to complete the travel cycle without any setback and thus reach their final destination.
        
        p.mb-5.p-5.py-4.text-it  En el proceso de viaje, el pasajero debe recorrer ciertas áreas del aeropuerto para poder completar el ciclo de viaje sin ningún contratiempo y así llegar a su destino final.
    
    h3.titulo-tercero A. Different Airport Areas // <i>Diferentes Áreas en el Aeropuerto</i>
    p.mb-5.text-bold  Let´s explore together some of the main areas at an airport. // 
      span.text-normal  Se exploran a continuación juntos algunas de las principales áreas en un aeropuerto.
    .row
      .col-lg-3
        figure
          img.nW(src='@/assets/curso/t1-i8.svg', alt='Azafata de pie')
      .col-lg-9
        .tabla-b.color-acento-contenido.mb-5
          table.custom-table-list
            tr
              td 
                .lista-ol--cuadro__vineta 1
                p.text-bold Immigration Area for International Flights: It is where the migratory flow is controlled, that is, the entries and exits of nationals and foreigners to our country.
              td
                .lista-ol--cuadro__vineta 1
                p.text-bold.text-it Área de Migración para vuelos Internacionales: es la entidad que controla el flujo migratorio, es decir, las entradas y salidas de nacionales y extranjeros a nuestro país.            
            tr
              td 
                .lista-ol--cuadro__vineta 2
                p.text-bold Airport Health Services: it is where emergency medical assistance within the Air Terminal facilities is provided to passengers, airport staff and users in general.
              td
                .lista-ol--cuadro__vineta 2
                p.text-bold.text-it Sanidad Aeroportuaria: la entidad presta asistencia médica de urgencia dentro de las instalaciones del Terminal Aéreo a pasajeros, funcionarios del aeropuerto y a usuarios en general.            
            tr
              td 
                .lista-ol--cuadro__vineta 3
                p.text-bold Security checkpoints to Access the Boarding Gates: Airports emphasize their security processes, that is why the checkpoints have people and luggage scanners in order to avoid any situation that threatens air security.
              td
                .lista-ol--cuadro__vineta 3
                p.text-bold.text-it  Filtros de seguridad para acceso a las salas de Abordaje: los aeropuertos se enfatizan en sus procesos de seguridad, es por eso que los filtros cuentan con escáneres de personas y de equipaje con el fin de evitar cualquier situación que atente contra la seguridad aérea.          
            tr
              td 
                .lista-ol--cuadro__vineta 4
                p.text-bold Departure lounge: These are the appropriate areas for travelers to be comfortable while the airline staff prepares the boarding of the plane.
              td
                .lista-ol--cuadro__vineta 4
                p.text-bold.text-it Salas de embarque: son los espacios adecuados para que los viajeros estén cómodos mientras el personal de la aerolínea prepara el abordaje del avión.       
            tr
              td 
                .lista-ol--cuadro__vineta 5
                p.text-bold Luggage conveyor belt: These are the mechanisms available at the end of the travel process where travelers can collect their luggage after finishing their flight.
              td
                .lista-ol--cuadro__vineta 5
                p.text-bold.text-it  Bandas de equipajes: son los mecanismos disponibles al final del proceso de viaje en donde los viajeros pueden recoger su equipaje luego de finalizar su vuelo.         

    h3.titulo-tercero B. Some other airport terminal facilities  // <i>Algunas otras instalaciones en el aeropuerto</i>
    p.mb-5  Se observan a continuación algunas de estas instalaciones que se mencionan:
    //- Slide 2  
    SlyderB.mb-5(:datos="datosSlyder2")    

    h3.titulo-tercero C. Asking for and giving directions at the airport // <i> Pidiendo y dando orientación para encontrar las diferentes áreas en el aeropuerto.</i>
    p.mb-5  Let´s explore together in the following dialogue some ways of asking for and giving directions about the main areas at an airport. // <i>[Explorar a través del siguiente video con un diálogo sobre algunas formas de pedir y dar orientación sobre las principales áreas de un aeropuerto.]</i>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Validation of information in travel documents // <i>Validación de la información de los documentos del viaje</i>
    .row.mb-5
      .col-lg-4
        figure
          img.nW(src='@/assets/curso/t1-i9.svg', alt='imagen decorativa')        
      .col-lg-8
        .cajon.color-secundario.p-5.mb-5
          p.mb-0  It is important for this process to bear in mind that documentation is the first requirement to start the travel process. Knowing what the passenger requires to reach their final destination is key to be able to register him in the system. For this reason, it is necessary to know about immigration documents and travel documents such as passports, visas, transit visas, residence card, vaccination card, boarding pass, luggage tags, EMD.

        p.mb-5 Es importante para este proceso tener en cuenta que la documentación es el primer requisito para empezar el proceso de viaje. Saber lo que el pasajero requiere para llegar a su destino final es de vital importancia para poder hacer su registro en el sistema, por esta razón es necesario conocer acerca de documentos migratorios y documentos de viaje: pasaportes, visas, visas de tránsito, tarjeta de residencia, carnet de vacunas, pasabordo, etiquetas de equipaje y EMD.

    h3.titulo-tercero A. Different types of travel documents // <i>Diferentes clases de documentos de viaje</i>
    p.mb-5.p-4  Let´s explore together the names and definitions of some travel documents. // <i>Explorar los nombres y definiciones de algunos documentos de viaje, como son:</i>
    //- Slide 3
    SlyderB.mb-5(:datos="datosSlyder3")    




    Separador
    br
    br  
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
    datosSlyder: [
      {
        titulo: 'CHECK-IN PROCESS',
        texto:
          'The process of registering someone upon their arrival at the airport.',
        imagen: require('@/assets/curso/t1-s1.png'),
      },
      {
        titulo: 'CHECK-IN DESK/COUNTER',
        texto:
          'The desk (or counter) that airlines have at the airport where passengers register and hand over baggage to the care of the airline with which they are travelling.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'CHECKED BAGGAGE',
        texto:
          'Is luggage delivered to an airline during check-in to be stored in the hold of an aircraft.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'HAND LUGGAGE',
        texto:
          '(Also know as Cabine Baggage). Suitcases and bags of a size suitable for carrying on to an aircraft. Normally called Carry-on Baggage in the USA.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'OVERWEIGHT BAGGAGE',
        texto:
          'Any bag weighing more than a passenger&apos;s standard luggage allowance.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'LITHIUM ION BATTERY',
        texto:
          'A type of rechargeable battery that uses lithium ions as their primary component.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'DANGEROUS GOODS',
        texto:
          '(Also known as hazardous material or hazmat). Substances that are corrosive, flammable, combustible, explosive, oxidising or water-reactive or have other hazardous properties.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'POWER BANK',
        texto:
          'A portable device that can store electricity for charging phones, cameras, laptop computers, etc.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: 'ELECTRONIC CIGARETTE',
        texto:
          'An electronic device that simulates tobacco smoking. (Also know as E-Cigarette)',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Self service Check-in',
        texto:
          '<p><i>(Auto Registro o Auto check-in).</i><br><br>A process allowing passengers with bags to check-in at machines that can read your Passport or ID Card.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Passport Check/Control',
        texto:
          '<p><i>(Control de Pasaportes).</i><br><br>The place at an airport, where an official checks your passport to validate your identity.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Airport Security Checkpoint',
        texto:
          '<p><i>(Punto de control de seguridad del aeropuerto).</i><br><br>The area where the airport security staff screens and processes passengers, belongings and cabin baggage. X-Ray machines and scanners are used here.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Duty Free Shop',
        texto:
          '<p><i>(Tienda Libre de Impuestos).</i><br><br>A shop or store at the airport where goods are sold at a cheaper price because they are not taxed.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Departure Lounge',
        texto:
          '<p><i>(Sala de Embarque).</i><br><br>A seating area in an airport where passengers wait immediately prior to boarding. It is located next to the <i>Boarding Gate</i>.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Departure Gate // Boarding Gate',
        texto:
          '<p><i>(Puerta de Salida/Partida // Puerta de Embarque o Abordaje).</i><br><br>Any of the numbered gates that allow passengers to go from the terminal to the airplane.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Baggage Claim / Reclaim Area',
        texto:
          '<p><i>(Zona de Recolección de Equipaje).</i><br><br>The area in an airport where arriving passengers pick up their checked baggage.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Baggage carousel // Luggage Conveyor Belt',
        texto:
          '<p><i>(Banda/cinta de equipaje).</i><br><br>A continuously revolving belt, track or other device on which items are placed for later retrieval.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Control Tower',
        texto:
          '<p><i>(Torre de Control).</i><br><br>A tower at an airport from which air traffic is controlled.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
    ],
    datosSlyder3: [
      {
        titulo: 'PASSPORT',
        texto:
          '<p>An official document for travelling, identifying a person (with their photo and their nationality).</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'VISA',
        texto:
          '<p>An official stamp or mark made on a passport, which permits the holder to enter the country.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'TRANSIT VISA',
        texto:
          '<p>An airport transit visa allows a traveler to pass through the international zone of an airport, without entering the country’s territory.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'RESIDENCE CARD/PERMIT',
        texto:
          '<p>A document or card required in some regions, allowing a foreign national to reside in a country for a fixed or indefinite length of time.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'BOARDING PASS',
        texto:
          '<p>A pass for boarding an aircraft, given to passengers when checking in.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'LUGGAGE LABLE/TAG',
        texto:
          '<p>A small piece of card or plastic with your name and address written on it that you fasten to a bag or case to show that it belongs to you.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'BIRTH CERTIFICATE',
        texto:
          '<p>An official document giving details of the time and place of a person&apos;s birth, and his or her name, sex, and the name of the parents.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'IDENTIFICATION CARD',
        texto:
          '<p>A card giving identifying data about a person, as full name, address, age, and color of hair and eyes, and often containing a photograph.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'MIGRATION REQUIREMENTS',
        texto:
          '<p>Conditions for changing one’s palce of residence from one country, or region within a country, to another.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'MIGRATION REQUIREMENTS',
        texto:
          '<p>A paper document that gives details of the diseases you have been vaccinated against. It is also known as an <i>International Certificate of Vaccination or Prophylaxis.</i> or ICVP.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
      {
        titulo: 'HEALTH CERTIFICATE',
        texto:
          '<p>A certificate attesting a person’s good health, sometimes required when travelling between states or countries.</i> or ICVP.</p>',
        imagen: require('@/assets/curso/t1-s3.png'),
      },
    ],
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
