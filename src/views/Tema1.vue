<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Management process in counter / <i>Proceso de manejo en counter</i>

    .row.mb-2
      .col-lg-6
        .cajon.color-secundario.p-5.mb-5
          p.mb-3  The registration or check-in process is the process by which passengers confirm their trip, arriving at the airport in advance. In Colombia, for national or domestic flights, the traveler has to be at the airport 2 hours in advance and for international flights, 3 hours in advance. Compliance with these times by the passenger guarantees a boarding pass. During check-in, information is obtained with which the flight plan is created according to the weight of both passengers and luggage.
          p.mb-0 In most cases, the passenger´s seating location inside the aircraft is determined during this process. In addition, it is there where the person will verify the travel documentation and receive the information about the luggage that is allowed within the baggage allowance. 
      .col-lg-6
        figure
          img(src='@/assets/curso/t1-i1.svg', alt='gente en sala de espera')
    .tarjeta.translated.p-3.mb-5
      p.mb-5.text-it  El proceso de registro o check-in, es el proceso mediante el cual los pasajeros confirman su viaje con la llegada al aeropuerto con anterioridad. En Colombia los tiempos de presentación para vuelos nacionales o domésticos es de 2 horas y para vuelos internacionales es de 3 horas. El cumplimiento de estos tiempos por parte del pasajero garantiza una tarjeta de embarque. Durante el check-in se obtiene información con la que se crea el plan de vuelo según el peso, tanto de pasajero como de equipaje.<br><br> En la mayoría de los casos, la ubicación dentro del avión se determina durante este proceso. Además, es allí donde la persona verificará la documentación de viaje y recibirá la información sobre el equipaje que está permitido dentro de la franquicia del equipaje.

    #t_1_1.titulo-segundo
      h2 1.1. Passenger security interview / <i>Entrevista de seguridad del pasajero</i>
    .row.mb-2
      .col-lg-7
        .cajon.color-secundario.p-5.mb-5
          p.mb-3  This is a very important step that takes place at the beginning of the travel process. It corresponds to one of the security processes which is performed to prevent incidents or accidents. The security procedure for a flight does not apply only to passengers; it also applies to crews.
          p.mb-3  Security interviews normally apply for flights to the USA as commanded by the TSA (Transportation Security Administration). This North American agency is in charge of managing everything related to security in the different transport systems, especially the air one.
          p.mb-3  The questions asked during this interview refer to dangerous goods, corrosive substances, explosives, lithium batteries, etc. They are intended to prevent luggage from containing items not suitable for commercial flight.
 
      .col-lg-5
        figure
          img(src='@/assets/curso/t1-i2.svg', alt='mujer registrandose en sala de espera')
    .tarjeta.translated.p-3.mb-5      
      p.mb-3.text-it  Este es un paso muy importante que tiene lugar al inicio del proceso de viaje, corresponde a uno de los procesos de seguridad con el que se busca la prevención de incidentes o accidentes. El procedimiento de seguridad para un vuelo no aplica solo para los pasajeros, también aplica para las tripulaciones.
      p.mb-3.text-it  Las entrevistas de seguridad normalmente aplican para vuelos a los Estados Unidos por directriz de la TSA (Transportation Security Administration), esta entidad norteamericana es la encargada de gestionar todo lo relacionado con la seguridad en los diferentes sistemas de transporte, en especial el aéreo.
      p.mb-5.text-it  Las preguntas formuladas durante esta entrevista hacen referencia a las mercancías peligrosas, sustancias corrosivas, explosivos, baterías de litio, etc. Tienen el fin de evitar que el equipaje contenga mercancía no apta para vuelo comercial.

    h3.titulo-tercero A. Questions passengers may be asked at check-in / <i>Preguntas que los pasajeros pueden tener que responder durante el registro en el aeropuerto.</i>

    .row.mb-5
      .col-lg-12
        .cajon.color-secundario.p-5
          p.mb-0  Read and review the security questions a traveler may have to answer at check-in.
        .tarjeta.translated.p-5.mb-3
          p.text-it  Leer y revisar atentamente las preguntas de seguridad que un viajero puede tener que responder durante su registro en el aeropuerto.

    .row.mb-5
      .col-lg-2
        figure
          img.nW(src='@/assets/curso/t1-i3.svg', alt='imagen decorativa')
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          table.table.txt-block
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td
                span.text-bold  Are you checking any bags?
                span.text-normal Yes, just one.
              td.b-left 
                span.text-bold  ¿Va a registrar alguna maleta?
                span.text-normal Sí, solamente una.              
            tr
              td 
                span.text-bold  Did you pack your baggage yourself?
                span.text-normal Yes, I packed it myself.
              td.b-left 
                span.text-bold  ¿Usted hizo su equipaje solo?
                span.text-normal Sí, yo mismo empaqué.      
            tr
              td
                span.text-bold  Are you sure nobody could have interfered with it since it was packed?
                span.text-normal Yes, I packed it myself and it has been with me all the time. 
              td.b-left  
                span.text-bold  ¿Estás seguro de que nadie metió mano a tu equipaje desde que empacaste?
                span.text-normal Sí, yo mismo empaqué y el equipaje ha estado conmigo todo el tiempo.
            tr.b-bottom
              td
                span.text-bold  Are you carrying anything for anyone else?
                span.text-normal No. 
              td.b-left 
                span.text-bold  ¿Lleva algo que le pertenezca a alguna otra persona?
                span.text-normal No.

        .tabla-b.color-acento-contenido.mb-5        
          table.table.txt-block
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Who packed your bag?
                span.text-normal Me and my wife did.
              td.b-left
                span.text-bold  ¿Quién empacó su maleta?
                span.text-normal Mi esposa y yo lo hicimos.            
            tr
              td 
                span.text-bold  When did you pack it?
                span.text-normal Last night.
              td.b-left
                span.text-bold  ¿Cuándo la empacaron?
                span.text-normal Anoche.     
            tr
              td
                span.text-bold  Has it been with you since you packed it?
                span.text-normal Yes, it has been with us all the time.
              td.b-left 
                span.text-bold  ¿La han tenido con ustedes desde que la empacaron?
                span.text-normal Sí, ha estado con nosotros todo el tiempo.
            tr.b-bottom
              td
                span.text-bold  Are you traveling with any liquids?
                span.text-normal No. I know I can´t take any liquids on the plane. 
              td.b-left 
                span.text-bold  ¿Lleva con usted algunos líquidos?
                span.text-normal No. Yo sé que no puedo llevar líquidos en el avión.               

        .tabla-b.color-acento-contenido.mb-5        
          table.table.txt-block
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Is there anything fragile in your bags?
                span.text-normal No.
              td.b-left
                span.text-bold  ¿Hay alguna cosa frágil en su maleta?
                span.text-normal No.           
            tr
              td 
                span.text-bold  Are there any dangerous goods in your luggage (checked baggage)?
                span.text-normal No, none.
              td.b-left
                span.text-bold  ¿Hay mercancías peligrosas en su equipaje (equipaje facturado)?
                span.text-normal No, ninguno.    
            tr
              td
                span.text-bold  Are you carrying recently repaired electronic equipment?
                span.text-normal No, none.
              td.b-left 
                span.text-bold  ¿Lleva equipos electrónicos recientemente reparados?
                span.text-normal No, ninguno.
            tr.b-bottom
              td
                span.text-bold  Did anybody ask you to carry anything for them?
                span.text-normal No, nobody. 
              td.b-left 
                span.text-bold  ¿Alguien te pidió que le llevaras algo en tu equipaje?
                span.text-normal No, nadie.              
    
    .row.mb-5.justify-content-end
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5        
          table.table.txt-block
            tr.tabla-b__header.text-white
              th  Inglés
              th  Español
            tr
              td 
                span.text-bold  Is all this luggage yours? 
                span.text-normal Yes, it is all mine.
              td.b-left
                span.text-bold  ¿Es suyo todo este equipaje?
                span.text-normal Sí, todo es mío.      
            tr
              td 
                span.text-bold  Did you leave your luggage unattended at any time? 
                span.text-normal No, it has been with me all the time.
              td.b-left
                span.text-bold  ¿Dejaste tu equipaje solo en algún momento?
                span.text-normal No, ha estado conmigo todo el tiempo.   
            tr
              td
                span.text-bold  Do you have any spare batteries, power banks or e-cigarettes in your check-in baggage? 
                span.text-normal No, I don´t.
              td.b-left 
                span.text-bold  ¿Tiene baterías de repuesto, cargadores portátiles o cigarrillos electrónicos en su equipaje facturado? 
                span.text-normal No, no tengo.
            tr.b-bottom
              td
                span.text-bold  Excuse me, sir. Could you please come behind the counter and open your bag? 
                span.text-normal Sure. 
              td.b-left 
                span.text-bold  Discúlpeme señor. ¿Podría pasar detrás del mostrador y abrir su maleta?
                span.text-normal Seguro.        

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
            p.mb-3  <i>Carry-on Baggage</i> son maletas y bolsos de un tamaño adecuado para llevarlos en la cabina del avión. Normalmente llamado <i>Hand Luggage</i> or <i>Cabin Baggage</i>.
            p.mb-3  <i>Personal Item</i> (artículo personal) puede ser una mochila, un morral, un maletín, un bolso, o un computador portátil. Es más pequeño que un <i>Carry-on bag</i>.

    h3.titulo-tercero B. Terms and concepts related to the check-in process and passenger security interview / <i>Palabras y conceptos relacionados con el proceso de registro en el aeropuerto y la entrevista de seguridad al pasajero.</i>
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-5.mb-5
          p.mb-3.text-bold  Here is a chart for you to explore more vocabulary related to the check-in process. You can use a dictionary to look up the words you do not know.
        .tarjeta.translated.p-5.mb-3
          p.mb-5  Aquí hay una tabla para explorar más vocabulario y conceptos relacionados con el proceso de registro del pasajero en el aeropuerto. Se puede apoyar en un diccionario para consultar las palabras desconocidas, a continuación se pueden ver:
    //- Slide 1  
    SlyderB.mb-5(:datos="datosSlyder")

    h3.titulo-tercero C. At the check-in counter. Explore the following dialogue with the help of a good dictionary. Pay special attention to the security questions asked by the check-in attendant. / <i>En el counter de registro. Explorar el siguiente diálogo con la ayuda de un buen diccionario. Prestar especial atención a las preguntas de seguridad que hace la asistente de counter, revisar con atención el siguiente video:</i>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.titulo-tercero D. Carry-on and Personal Item Size and Weight Limits for 3 Major Colombian Airlines. / <i>Límites de peso y tamaño para equipaje de mano y artículos personales en tres (3) aerolíneas principales de Colombia.</i>
    p.mb-5  Esta información es importante para que se conozcan los límites de peso y tamaño que tienen algunas aerolíneas como son:

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
                p <b>21 in (55 cm) x 13 in (35 cm) x 9 in (25 cm)</b> <i>(height, depth and width)</i>, including the pocket, wheels and handle.
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
              img.nW(src='@/assets/curso/t1-ic2.svg', alt='imagen decorativa')
          .col-lg-10
            .h4 Carry-on Size and Weight Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>22’’ (56 cm)</b> <i>height</i> <b>x 14’’ (36 cm)</b> <i>length</i> <b>x 10’’ (26 cm)</b> <i>wide.</i>
              li 
                i.fas.fa-check
                p <b>10 kilos (22 pounds)</b> <i>for all passengers. </i>
            .h4 Personal Item Size Limit
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>17’’ (43 cm)</b> <i>high</i> x <b>10’’ (25 cm)</b> <i>length</i> x <b>9’’ (22 cm)</b> <i>wide</i>.

      .tarjeta.color-secundario.p-4(titulo="AVIANCA")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/t1-ic3.svg', alt='imagen decorativa')
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
                p <b>45 cm x 35 cm x 25 cm</b> <i>(height, length and width).</i>
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .card.bg-soft-blue.vb-list.mb-5
          .row
            .col-lg-3.d-flex.align-items-end
              figure
                img.nW(src='@/assets/curso/t1-i6.svg', alt='imagen decorativa')
            .col-lg-9
              .p-3
                p.text-bold Note: some personal Items you can bring into the cabin, free of cost, include: / 
                p Nota: algunos artículos personales que puede traer a la cabina, sin costo, incluyen:
                ul.lista-ul.compress
                  li 
                    i.fas.fa-check
                    p <b>Food to be eaten on board the aircraft</b> / <i>[Alimentos para consumir a bordo del avión]</i>
                  li 
                    i.fas.fa-check
                    p <b>Products purchased at the airport</b> / <i>[Productos comprados en el aeropuerto]</i>
                  li 
                    i.fas.fa-check
                    p <b>A purse or handbag</b> / <i>[Un bolso o cartera]</i>
                  li 
                    i.fas.fa-check
                    p <b>A backpack</b> / <i>[Un morral]</i>
                  li 
                    i.fas.fa-check
                    p <b>A briefcase</b> / <i>[Un maletín]</i>
                  li 
                    i.fas.fa-check
                    p <b>A laptop case or bag</b> / <i>[Un maletín o bolso para portátil]</i>
                  li 
                    i.fas.fa-check
                    p <b>A video game console (PlayStation®, Xbox®, or Nintendo®)</b> / <i> [Una consola de videojuegos]</i>
                  li 
                    i.fas.fa-check
                    p <b>A jacket or coat</b> / <i>[Una chaqueta o abrigo]</i>
                  li 
                    i.fas.fa-check
                    p <b>A pocket umbrella</b> / <i>[Una sombrilla de bolsillo]</i>
                  li 
                    i.fas.fa-check
                    p <b>A travel pillow</b> / <i>[Una almohada de viaje]</i>
                  li 
                    i.fas.fa-check
                    p <b>A small waist bag (like a fanny pack)</b> / <i>[Una riñonera (como un bolso de cintura)]</i>
                  li 
                    i.fas.fa-check
                    p <b>Headphones, or reading material</b> / <i>[Auriculares o material de lectura]</i>

    h3.titulo-tercero E. Excess Baggage. Explore this second mini-dialogue and learn the way to handle an excess baggage situation. / <i>Exceso de Equipaje. Explorar este segundo mini diálogo y aprender la forma de cómo manejar un caso de exceso de equipaje, observar con atención:</i>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    h3.titulo-tercero F. Customer Management System. At the same time the attendant at the counter asks the security questions, she also checks other aspects such as the ticket number, whether or not the passenger is fit to travel and whether they are traveling with children. This information must be included in the system. / <i>Sistema de Manejo de Clientes. Mientras la auxiliar en counter hace las preguntas de seguridad, al mismo tiempo ella revisa otros aspectos como el número de tiquete, si el pasajero está apto para viajar, si lleva niños. Dicha información debe ser incluida en el sistema.</i>
    
    h4.titulo-cuarto PART 1 – APPLICATION, DEVICE AND NAVIGATION MENU / 
      span.text-normal.text-it  PARTE 1 – LOS MENÚ DE APLICACIÓN, DISPOSITIVO Y NAVEGACIÓN
    .row.mb-5.justify-content-center
      .col-lg-4
        .bg-soft-blue      
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/info-1.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="15%" y="0%")
              p Applications / <i>Aplicaciones</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="10%")
              p Customer / <i>Cliente</i>            
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="16%")
              p Flight / <i>Vuelo</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="23%")
              p Seatmap / <i>Mapa de Asientos</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="29%")
              p Baggage / <i>Equipaje</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="35%")
              p Boarding / <i>Abordaje, embarque</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="41%")
              p Boarding Monitor / <i>Monitor de Embarque</i> 
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="47%")
              p Track or tracking / <i>Búsqueda de maleta</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="52%")
              p Reservations / <i>Reservas</i>                          
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="58%")
              p Teletype (TTY) / <i>Mensajes entre áreas internas</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="64%")
              p Teletype Template Admin / <i>Mensajes entre áreas internas</i>  
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="70%")
              p My User ID Details / <i>Detalles de mi Usuario</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="76%")
              p My Preferences / <i>Mis Preferencias</i>        
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="82%")
              p Messenger / <i>Mensajería</i>                                


      .col-lg-4
        .wrap-Image.mb-5
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/info-2.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="8%" y="0%")
              p Device / <i>Dispositivo</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="66%")
              p Print Screen / <i>Imprimir Pantalla (permitirá imprimir una versión críptica de la pantalla en la que se encuentre en Customer Management)</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="85%")
              p Connected Devices Status / <i>Estado de los dispositivos conectados.</i>
        //-- imagen slot 2
        .wrap-Image.mb-5
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/info-3.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="8%" y="0%")
              p Navigation / <i>Navegación</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="25%")
              p Jump Left One Tab / <i>Saltar una Pestaña a la Izquierda</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="42%")
              p Jump Right One Tab / <i>Saltar una Pestaña a la Derecha</i>
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="57%")
              p Toggle to Previous Tab / <i>Cambiar a la Pestaña Anterior</i>          
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="73%")
              p Close / <i>Cerrar (para cerrar la aplicación que esté desplegada actualmente)</i>   
            .tarjeta.color-secundario.p-3.text-center(x="3%" y="88%")
              p Close Files / <i>Cerrar Archivos o Aplicaciones (permite desplegar una lista con todas las aplicaciones que actualmente estén abiertas)</i>   

    
    h4.titulo-cuarto PART 2 – CLOSE FILE OPTION / 
      span.text-normal.text-it  PARTE 2 – LA OPCIÓN DE CERRAR APLICACIONES    
    .row.justify-content-center.mb-5
      .col-lg-5
        .bg-soft-blue.p-4      
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/info-4.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="12%")
              p Messenger / <i>Mensajería</i> 
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="29%")
              p Reservations / <i>Reservas</i>     
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="40%")
              p Boarding / <i>Abordaje o Embarque</i>     
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="35%")
              p Teletype (TTY) / <i>Mensajes entre áreas internas</i>     
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="18%")
              p Customer / <i>Cliente</i>      
            .tarjeta.color-secundario.p-3.text-center(x="43%" y="5%")
              p Close File / <i>Cerrar Archivos o Aplicaciones</i>
            .tarjeta.color-secundario.p-3.text-center(x="20%" y="89%")
              p Select All / <i>Seleccionar Todas</i>
            .tarjeta.color-secundario.p-3.text-center(x="43%" y="89%")
              p None / <i>Ninguna</i>
            .tarjeta.color-secundario.p-3.text-center(x="98%" y="93%")
              p Cancel / <i>Cancelar</i>              

    .row.justify-content-center.mb-5
      .col-lg-8 
        p.mb-5 Se selecciona(n) la(s) aplicación(es) que se desea(n) cerrar y se presiona la tecla <b>ENTER</b> o se hace clic en el botón <b>OK</b> para proceder.
        .cajon.color-secundario.px-5.mb-4.py-4
          p.mb-0.text-bold Note: a maximum of 10 application tabs can be opened at the same time. These are arranged from 0 to 9 by the system.
        .tarjeta.translated.p-4.mb-5
          p Nota: pueden ser abiertas un máximo de diez (10) fichas de aplicaciones al mismo tiempo. Estas son ordenadas por el sistema del 0 al 9.

    h4.titulo-cuarto PART 3 – LOGOFF AND HELP MENU / 
      span.text-normal.text-it  PARTE 3 – MENÚ PARA SALIR DEL SISTEMA Y MENÚ DE AYUDA    
    .row.justify-content-center.mb-5
      .col-lg-6
        .bg-soft-blue.p-4.mb-3      
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/info-5.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="35%")
              p Logoff / Finalizar Sesión (Cerrar el Sistema)    
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="51%")
              p Exit / Salir              

        p.mb-3.text-bold  Nota: al escoger la opción <i><b>Logoff</b></i>, se cierra el sistema temporalmente, pero la pantalla de <i><b>Sign in</b></i> seguirá disponible para digitar su usuario y clave e ingresar nuevamente al sistema. Por el contrario, al escoger la opción <i><b>Exit</b></i>, se cerrará completamente el <i><b>Customer Management.</b></i>


    //-- contenido imagen help
    .row.justify-content-center.mb-5
      .col-lg-5
        .bg-soft-blue.p-4      
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/imagen_06.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="2%" y="8%")
              p Help / <i>Ayuda</i> 
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="20%")
              p JFE Help / <i>Ayuda de JFE (Cuando se selecciona esta opción en el menú Ayuda, se muestra información de ayuda sobre el Manejo de Clientes en general)</i>     
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="32%")
              p Show Theoretical Seats / <i>Mostrar Asientos Teóricos</i>     
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="44%")
              p View Log / <i>Ver Registro</i>
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="56%")
              p Copy Compact Report / <i>Copiar Reporte Compacto</i>        
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="68%")
              p About JFE / <i>Acerca de JFE</i>     
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="80%")
              p Maximize / <i>Maximizar</i>
            .tarjeta.color-secundario.p-3.text-center(x="5%" y="92%")
              p Send Error Report / <i>Enviar Reporte de Error</i>                
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .bg-soft-blue.p-4      
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img.shadow-box(src='@/assets/curso/info-T6.png', alt='Ejemplo')
            .tarjeta.color-secundario.p-3.text-center(x="1%" y="1%")
              p About / <i>Acerca de (Seleccionar la opción About JFE desplegará una ventana emergente que contiene la siguiente información):</i> 
            .tarjeta.color-secundario.p-3.text-center(x="30%" y="32%")
              p Copyright / <i>Derechos de autor</i> 
            .tarjeta.color-secundario.p-3.text-center(x="30%" y="50%")
              p User / <i>Usuario</i> 
            .tarjeta.color-secundario.p-3.text-center(x="30%" y="57%")
              p Environment / <i>Ambiente sobre el que se está trabajando</i> 
            .tarjeta.color-secundario.p-3.text-center(x="30%" y="75%")
              p Duty Code / <i>Categoría de la firma</i> 
            .tarjeta.color-secundario.p-3.text-center(x="63%" y="25%")
              p Altea Fly CM – 27.2.8 / <i>Corresponde a la versión de Amadeus sobre la que se trabaja</i>
            .tarjeta.color-secundario.p-3.text-center(x="75%" y="45%")
              p Java Version / <i>Versión de Java que está siendo usada</i>                           
            .tarjeta.color-secundario.p-3.text-center(x="88%" y="63%")
              p Workstation Id / <i>ID de la Estación de Trabajo</i>   
            .tarjeta.color-secundario.p-3.text-center(x="55%" y="69%")
              p Full Location / <i>Locación</i>

    h4.titulo-cuarto PART 4 – SENDING ERROR REPORT / 
      span.text-normal.text-it  PARTE 4 – ENVIANDO REPORTE DE ERRORES
    .row.justify-content-center.mb-5
      .col-lg-4
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img.shadow-box(src='@/assets/curso/info-T7.png', alt='Ejemplo EMD')
          .tarjeta.color-secundario.p-3.text-center(x="50%" y="20%")
            p El Reporte de Error ha sido enviado a Amadeus<br>Gracias por su apoyo <br> OK
  

    
    Separador
    br
    br      

    #t_1_2.titulo-segundo
      h2 1.2  Airport information / <i>Información del aeropuerto</i>
    .row.mb-5
      .col-lg-4
        figure
          img.nW(src='@/assets/curso/t1-i7.svg', alt='imagen decorativa')
      .col-lg-8
        .cajon.color-secundario.p-5
          p.mb-0  In the travel process, the passenger must go through certain areas in the airport in order to complete the travel cycle without any setback and thus reach their final destination.
        .tarjeta.translated.p-5
          p.py-4  En el proceso de viaje, el pasajero debe recorrer ciertas áreas del aeropuerto para poder completar el ciclo de viaje sin ningún contratiempo y así llegar a su destino final.
    
    h3.titulo-tercero A. Different Airport Areas / <i>Diferentes Áreas en el Aeropuerto</i>
    p.mb-5.text-bold  Let´s explore together some of the main areas at an airport. / 
      span.text-normal  Se exploran a continuación algunas de las principales áreas en un aeropuerto.
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
                p <b>Immigration Area for International Flights:</b> It is where the migratory flow is controlled, that is, the entries and exits of nationals and foreigners to our country.
              td.b-left
                .lista-ol--cuadro__vineta 1
                p.text-it <b>Área de Migración para vuelos Internacionales:</b> es la entidad que controla el flujo migratorio, es decir, las entradas y salidas de nacionales y extranjeros a nuestro país.            
            tr
              td 
                .lista-ol--cuadro__vineta 2
                p <b>Airport Health Services:</b> it is where emergency medical assistance within the Air Terminal facilities is provided to passengers, airport staff and users in general.
              td.b-left
                .lista-ol--cuadro__vineta 2
                p.text-it <b>Sanidad Aeroportuaria:</b> la entidad presta asistencia médica de urgencia dentro de las instalaciones del Terminal Aéreo a pasajeros, funcionarios del aeropuerto y a usuarios en general.            
            tr
              td 
                .lista-ol--cuadro__vineta 3
                p <b>Security checkpoints to Access the Boarding Gates:</b> Airports emphasize their security processes, that is why the checkpoints have people and luggage scanners in order to avoid any situation that threatens air security.
              td.b-left
                .lista-ol--cuadro__vineta 3
                p.text-it  <b>Filtros de seguridad para acceso a las salas de Abordaje:</b> los aeropuertos se enfatizan en sus procesos de seguridad, es por eso que los filtros cuentan con escáneres de personas y de equipaje con el fin de evitar cualquier situación que atente contra la seguridad aérea.          
            tr
              td 
                .lista-ol--cuadro__vineta 4
                p <b>Departure lounge:</b> These are the appropriate areas for travelers to be comfortable while the airline staff prepares the boarding of the plane.
              td.b-left
                .lista-ol--cuadro__vineta 4
                p.text-it <b>Salas de embarque:</b> son los espacios adecuados para que los viajeros estén cómodos mientras el personal de la aerolínea prepara el abordaje del avión.       
            tr
              td 
                .lista-ol--cuadro__vineta 5
                p <b>Luggage conveyor belt:</b> These are the mechanisms available at the end of the travel process where travelers can collect their luggage after finishing their flight.
              td.b-left
                .lista-ol--cuadro__vineta 5
                p.text-it  <b>Bandas de equipajes:</b> son los mecanismos disponibles al final del proceso de viaje en donde los viajeros pueden recoger su equipaje luego de finalizar su vuelo.         

    h3.titulo-tercero B. Some other airport terminal facilities  / <i>Algunas otras instalaciones en el aeropuerto</i>
    p.mb-5  Se observan a continuación algunas de estas instalaciones que se mencionan:
    //- Slide 2  
    SlyderB.mb-5(:datos="datosSlyder2")    

    h3.titulo-tercero C. Asking for and giving directions at the airport / <i> Pidiendo y dando orientación para encontrar las diferentes áreas en el aeropuerto.</i>
    p.mb-5  Let´s explore together in the following dialogue some ways of asking for and giving directions about the main areas at an airport. / [Explorar a través del siguiente video con un diálogo sobre algunas formas de pedir y dar orientación sobre las principales áreas de un aeropuerto.]
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Validation of information in travel documents / <i>Validación de la información de los documentos del viaje</i>
    .row.mb-5
      .col-lg-4
        figure
          img.nW(src='@/assets/curso/t1-i9.svg', alt='imagen decorativa')        
      .col-lg-8
        .cajon.color-secundario.p-5.mb-3
          p.mb-0  It is important for this process to bear in mind that documentation is the first requirement to start the travel process. Knowing what the passenger requires to reach their final destination is key to be able to register him in the system. For this reason, it is necessary to know about immigration documents and travel documents such as passports, visas, transit visas, residence card, vaccination card, boarding pass, luggage tags, EMD.
        .tarjeta.translated.p-5  
          p.mb-4 Es importante para este proceso tener en cuenta que la documentación es el primer requisito para empezar el proceso de viaje. Saber lo que el pasajero requiere para llegar a su destino final es de vital importancia para poder hacer su registro en el sistema, por esta razón es necesario conocer acerca de documentos migratorios y documentos de viaje: pasaportes, visas, visas de tránsito, tarjeta de residencia, carnet de vacunas, pasabordo, etiquetas de equipaje y EMD.

    h3.titulo-tercero A. Different types of travel documents / <i>Diferentes clases de documentos de viaje</i>
    p.mb-5.p-4  Let´s explore together the names and definitions of some travel documents. / Explorar los nombres y definiciones de algunos documentos de viaje, como son:
    //- Slide 3
    SlyderB.mb-5(:datos="datosSlyder3")    

    h3.titulo-tercero B. EMD (Electronic Miscellaneous Document) / <i>Documento Electrónico Misceláneo</i>
    p.mb-5 Let´s explore some aspects related to EMDs. / Explorar algunos aspectos relacionados con los EMDs.
    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img.nW(src='@/assets/curso/t8-m1.svg', alt='imagen decorativa')        
      .col-lg-9
        .cajon.color-secundario.p-5.mb-3
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0  An EMD (Electronic Miscellaneous Document) is the standard technology established by the industry which, through the creation of a virtual document, automates and simplifies to the maximum the communication of information related to the acquisition and payment of ancillary services of the airlines, whether those related to the flight (meals on board, choice of seat, preferred boarding, etc.) or supplied by third parties (hotel, car rental, etc.).<br>
              .bloque-texto-d__autor
                p According to Amadeus Ancillary Services - Guía de Referencia Rápida (2016, p. 6).
              i.fas.fa-quote-right
        .tarjeta.translated.p-5.mb-5
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0  Un EMD (Documento Electrónico Misceláneo) es la tecnología estándar fijada por la industria que mediante la creación de un documento virtual automatiza y simplifica al máximo la comunicación de la información relativa a la adquisición y pago de servicios auxiliares de las aerolíneas, ya sean los vinculados al vuelo (comida a bordo, elección de asiento, embarque preferente, etc.) o suministrados por terceros (hotel, alquiler de coche, etc.).<br>
              .bloque-texto-d__autor
                p.text-bold Según Amadeus Ancillary Services - Guía de Referencia Rápida (2016, p. 6).
              i.fas.fa-quote-right

    h4.titulo-cuarto Standalone EMD (EMD-S) vs. Associated EMD (EMD-A)
    p.mb-5  This two types of EMD differ in their behaviour and usage. Here are the main characteristics: / Estos dos tipos de EMD difieren en su comportamiento y uso. Aquí están las principales características:
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-5.mb-3
          .bloque-texto-b.color-secundario.p-4.mb-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.text-bold  An Standalone EMD (EMD-S) is issued for non-flight related services or for other charges (SVC elements), that is, it is independent of a ticket. For example: access to the VIP lounge, parking at the airport, etc.<br>
              i.fas.fa-quote-right
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.text-bold  An Associated EMD (EMD-A) is issued for services associated with a ticket (SSR elements), so both documents are connected. For example: special meals, seat reservations, extra luggage, unaccompanied minor, etc.<br>
              .bloque-texto-d__autor
                p According to Amadeus Ancillary Services - Guía de Referencia Rápida (2016, p. 7).
              i.fas.fa-quote-right
        .tarjeta.translated.p-5.mb-5
          .bloque-texto-b.color-secundario.p-4.mb-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.text-bold  Un Standalone EMD (EMD-S) = (EMD SEPARADO) se emite para servicios no relacionados con el vuelo o para otros cargos (elementos SVC), es decir, es independiente de un tiquete. Por ejemplo: acceso a Sala VIP, parqueo en el aeropuerto, etc.<br>
              i.fas.fa-quote-right
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.text-bold  Un Associated EMD (EMD-A) = (EMD ASOCIADO) se emite para servicios asociados a un tiquete (elementos SSR), por lo que ambos documentos van conectados. Por ejemplo: comidas especiales, reservas de asientos, equipaje extra, menor no acompañado, etc.<br>
              .bloque-texto-d__autor
                p Según Amadeus Ancillary Services - Guía de Referencia Rápida (2016, p. 7).
              i.fas.fa-quote-right


    .row.mb-5.justify-content-center
      .col-lg-12
        .tabla-b.color-acento-contenido.mb-5
          table.custom-checkList
            tr.tabla-b__header.text-white
              th.bg-yellow-head  Standalone EMD (EMD-S)
              th EMD separado
            tr
              td 
                i.fas.fa-check
                p A standalone EMD is issued for a residual value or the collection of miscellaneous charges that are not lifted with an e-ticket coupon. For example, lounge access, T-shirts, vouchers, taxi transportation, car hire, hotel accommodation, train tickets, rebooking or cancellation fees, and so on. 
              td
                i.fas.fa-check
                p Se emite un EMD separado (independiente) por un valor residual o el cobro de cargos varios que no se eliminan con un cupón de tiquete electrónico. Por ejemplo, acceso al salón, camisetas, vouchers, transporte en taxi, alquiler de vehículos, alojamiento en hotel, tiquetes de tren, tarifas de cambio de reserva o cancelación, etc. 
            tr
              td 
                i.fas.fa-check
                p The standalone EMD can consist of a single or multiple value coupons. 
              td
                i.fas.fa-check
                p El EMD separado (independiente) puede consistir en cupones de valor único o múltiple.
            tr
              td 
                i.fas.fa-check
                p It can contain a reference to an e-ticket. 
              td
                i.fas.fa-check
                p Puede contener una referencia a un tiquete electrónico.
            tr
              td 
                i.fas.fa-check
                p It can be consumed at issuance or used at different stages.
              td
                i.fas.fa-check
                p Puede consumirse en la emisión o utilizarse en diferentes etapas.
            tr.b-bottom
              td 
                i.fas.fa-check
                p Once issued, it has no further interaction with the airline systems (reservation systems and Departure Control System - DCSs -). 
              td
                i.fas.fa-check
                p Una vez emitido, no tiene más interacción con los sistemas de la aerolínea (sistemas de reserva y sistemas de control de salida).


    .row.mb-5.justify-content-center
      .col-lg-12
        .tabla-b.color-acento-contenido.mb-5
          table.custom-checkList
            tr.tabla-b__header.text-white
              th.bg-yellow-head  Associated EMD (EMD-A)
              th  EMD asociado
            tr
              td 
                i.fas.fa-check
                p An associated EMD is issued for the collection of miscellaneous charges and excess baggage charges that are lifted (considered used) at the same time as the e-ticket coupon. For example, sports equipment, pets in cabin, wheelchairs, special seats and meals, unaccompanied minors, excess baggage, and so on.
              td
                i.fas.fa-check
                p Se emite un EMD asociado para el cobro de cargos varios y cargos por exceso de equipaje que se levantan (se consideran usados) al mismo tiempo que el cupón del tiquete electrónico. Por ejemplo, equipo de deportes, mascotas en cabina, sillas de ruedas, asientos y comidas especiales, menores no acompañados, exceso de equipaje, etc.
            tr
              td 
                i.fas.fa-check
                p The associated EMD can consist of a single or multiple value coupons that are directly linked to individual flight coupons.
              td
                i.fas.fa-check
                p El EMD asociado puede constar de un único cupón o cupones de valor múltiple que están directamente vinculados a cupones de vuelo individuales.
            tr
              td 
                i.fas.fa-check
                p Each EMD coupon that is associated to an e-ticket is referenced in the e-ticket record.
              td
                i.fas.fa-check
                p Cada cupón de EMD asociado a un tiquete electrónico es referenciado en el registro del tiquete electrónico.
            tr
              td 
                i.fas.fa-check
                p The carrier and the routing of the EMD-A and the e-ticket coupons must match.
              td
                i.fas.fa-check
                p El operador y la ruta del EMD-A y los cupones de tiquetes electrónicos deben coincidir.
            tr
              td 
                i.fas.fa-check
                p An EMD-A can be automatically or manually associated or disassociated.
              td
                i.fas.fa-check
                p Un EMD-A puede ser automática o manualmente asociado o disociado.
            tr
              td 
                i.fas.fa-check
                p Only airline agents can manually associate and disassociate EMD-As.
              td
                i.fas.fa-check
                p Solo los agentes de la aerolínea pueden asociar y disociar EMD-As.
            tr
              td 
                i.fas.fa-check
                p The EMD-A's final usage depends on the e-ticket coupon it is associated to, provided that it does not become disassociated.
              td
                i.fas.fa-check
                p El uso final del EMD-A depende del cupón de tiquete electrónico al que está asociado, siempre que no se disocie.
            tr.b-bottom
              td 
                i.fas.fa-check
                p The status of the associated EMD value coupons and the e-ticket coupons must remain synchronized.
              td
                i.fas.fa-check
                p El estado de los cupones de valor de los EMD asociados y los cupones de los tiquetes electrónicos debe permanecer sincronizado.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.sans-flag.p-4
          p.mb-0 Información adaptada de <b>Amadeus Altéa Reservation Desktop Web - Guía del usuario - Edición 3.3. (2016, p. 270).</b>

    h3.titulo-tercero C. EMD (Electronic Miscellaneous Document) issued for the checking of the third bag  / <i>Documento Electrónico Misceláneo emitido por el registro de una tercera maleta.</i>
    p.mb-5.p-4
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-soft-blue.p-4
          figure
            img.centered(src='@/assets/curso/t1-t1.png', alt='ejemplo de EMD')        
    .row.justify-content-center.mb-5
      .col-lg-10
        ul.lista-ul.compress
          li
            p <b>EMD-00128000010</b> = <i>Número del EMD</i>
          li
            p <b>LOC-2437PA (RECORD LOCATOR) </b> = <i>Récord o Código de Reserva</i>
          li
            p <b>POI-BOG (PLACE OF ISSUE)</b> = <i>Lugar de emisión (en este caso BOGOTÁ)</i>
          li
            p <b>DOI-17APR13 (DATE OF ISSUE)</b> = <i>Fecha de Emisión</i>
          li
            p <b>PAX – AVILA/CLAUDIA</b> = <i>(Aquí normalmente aparece el apellido y el nombre del Pasajero – AVILA/CLAUDIA)</i>
          li
            p <b>ADT (ADULT) </b> = <i>Adulto</i>
          li
            p <b>RFIC-C BAGGAGE</b> = <i>Hace referencia al concepto de emisión del EMD (en este caso por equipaje)</i>
          li
            p <b>REMARKS</b> = <i>Comentarios</i>
          li
            p <b>CPN – 1 (COUPON)</b> = <i>Cupón asociado al primer trayecto del tiquete</i>
          li
            p <b>DESCRIPTION – CHECKED BAG THIRD</b> / <i>(Descripción – se está cobrando una tercera pieza de equipaje registrada)</i>
          li
            p <b>AA</b> = <i>American Airlines (Código del nombre de la aerolínea)</i>
          li
            p <b>BOGMIA</b> = <i>Código del aeropuerto donde inicia y donde termina el cupón (BOG = Aeropuerto El Dorado en Bogotá; MIA = Aeropuerto Internacional de Miami, en Miami)</i>
          li
            p <b>S-O (Status Open For Use)</b> = <i>Estado de la EMD abierto</i>



    Separador
    br
    br  
    #t_1_4.titulo-segundo
      h2 1.4  Offer and charging of special services / <i>Oferta y cobro de servicios especiales</i>
    .row.justify-content-end.mb-5
      .col-lg-9
        .cajon.color-secundario.p-5.mb-3
          p.mb-0  When traveling, situations may arise that require special and specific handling. For this reason, it is important to recognize some of the most common special services of at the time of passenger check-in.
        .tarjeta.translated.p-5.mb-3
          p.mb-0.text-it  En el momento de un viaje pueden surgir situaciones que ameriten de manejos específicos, por esta razón es importante reconocer algunos de los servicios especiales más comunes de trabajar al momento del registro de pasajeros.
      .col-lg-3
        figure
          img.nW(src='@/assets/curso/t8-m2.svg', alt='icono decorativa')
    h3.titulo-tercero A. Some Special Services / <i>Algunos Servicios Especiales</i>
    p.mb-5  Let´s explore together some of the main special services requested by passengers. / <i>Explorar algunos de los principales servicios especiales solicitados por los pasajeros.</i>

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-secundario.p-4(titulo="1. Excess baggage")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/ic1.svg', alt='icono decorativa')
          .col-lg-10
            .h4 Excess baggage
            p.mb-4  When the baggage weighs more than what is allowed.
            .h4 Exceso de equipaje
            p.mb-4  Cuando el equipaje pesa más de lo permitido en la franquicia.
      .tarjeta.color-secundario.p-4(titulo="2. Oversized baggage")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/ic2.svg', alt='icono decorativa')
          .col-lg-10
            .h4 Oversized baggage
            p.mb-4  When the measurements or dimensions of the baggage are beyond what is allowed.
            .h4 Sobredimensión de equipaje
            p.mb-4  Cuando las medidas o dimensiones del equipaje están por fuera de lo permitido en la franquicia.
      .tarjeta.color-secundario.p-4(titulo="3. Extra pieces")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/ic3.svg', alt='icono decorativa')
          .col-lg-10
            .h4 Extra pieces
            p.mb-4  When the passenger carries more pieces of luggage than he/she is allowed.
            .h4 Piezas extra
            p.mb-4  Cuando el pasajero lleva más piezas de equipaje de las que tiene permitida en la franquicia.
      .tarjeta.color-secundario.p-4(titulo="4. Pets")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/ic4.svg', alt='icono decorativa')
          .col-lg-10
            .h4 Pets
            p.mb-4  When the traveler requires to travel with his pet, either in the cabin or in the hold; it depends on the policies of each airline.
            .h4 Mascotas
            p.mb-4  Cuando el viajero requiere viajar con su mascota, ya sea en cabina o en bodega, depende de las políticas de cada compañía aérea.
      .tarjeta.color-secundario.p-4(titulo="5. Unaccompanied minors")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/ic5.svg', alt='icono decorativa')
          .col-lg-10
            .h4 Unaccompanied minors
            p.mb-4  When minors travel unaccompanied and require an escort service throughout the travel process.
            .h4 Menores sin acompañante
            p.mb-4  Cuando menores de edad viajan sin acompañante y requiere un servicio de acompañamiento en todo el proceso de viaje.
      .tarjeta.color-secundario.p-4(titulo="6. Sports equipment")
        .row
          .col-lg-2
            figure
              img.nW(src='@/assets/curso/ic6.svg', alt='icono decorativa')
          .col-lg-10
            .h4 Sports equipment
            p.mb-4  When the traveler wishes to carry special equipment for a particular sport and this is beyond their permitted luggage.
            .h4 Equipaje deportivo
            p.mb-4  Cuando el viajero desea llevar equipos especiales para algún deporte en particular y este está por fuera de su equipaje permitido.

    h3.titulo-tercero B. EMD (Electronic Miscellaneous Document) issued for the first extra piece of luggage / <i>Documento Electrónico Misceláneo emitido para la primera pieza de equipaje adicional.</i>
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-soft-blue.p-4
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/ix1.jpg', alt='Ejemplo EMD')

            .tarjeta.color-secundario.p-3(x="1%" y="3%")
              p EMD-00128000010 = Número del EMD

            .tarjeta.color-secundario.p-3(x="1%" y="21%")
              p PAX – AVILA/CLAUDIA

            .tarjeta.color-secundario.p-3(x="1%" y="42%")
              p DESCRIPTION – FIRST EXTRA PC = (Descripción – se está cobrando una primera pieza de equipaje adicional)
            .tarjeta.color-secundario.p-3(x="1%" y="83%")
              p TOTAL VEF = Código de la moneda. Total en Bolívar Fuerte
            .tarjeta.color-secundario.p-3(x="1%" y="91%")
              p FP (Form of Payment) = Forma de Pago
            .tarjeta.color-secundario.p-3(x="14%" y="91%")
              p CASH = Efectivo
            .tarjeta.color-secundario.p-3(x="42%" y="34%")
              p CCSFCO = Código del aeropuerto donde inicia y donde termina el cupón (CCS = Aeropuerto Caracas; FCO = Aeropuerto de Roma- Fiumicino)
            .tarjeta.color-secundario.p-3(x="32%" y="38%")
              p AZ = (ALITALIA)        
            .tarjeta.color-secundario.p-3(x="55%" y="38%")
              p S-V (Status Void) = Estado de la EMD anulado

    h3.titulo-tercero C. Requesting the Wheelchair Assitance Service / Solicitud del servicio de asistencia en silla de ruedas
    p.mb-5  The following is a dialogue in which a passenger has requested a the wheelchair assistance service. / A continuación se muestra un diálogo en el que un pasajero ha solicitado el servicio de asistencia en silla de ruedas.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






  
</template>

<script>
export default {
  name: 'Tema1',
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
        imagen: require('@/assets/curso/t1-s1-2.png'),
      },
      {
        titulo: 'CHECKED BAGGAGE',
        texto:
          'Is luggage delivered to an airline during check-in to be stored in the hold of an aircraft.',
        imagen: require('@/assets/curso/t1-s1-3.png'),
      },
      {
        titulo: 'HAND LUGGAGE',
        texto:
          '(Also know as Cabine Baggage). Suitcases and bags of a size suitable for carrying on to an aircraft. Normally called Carry-on Baggage in the USA.',
        imagen: require('@/assets/curso/t1-s1-4.png'),
      },
      {
        titulo: 'OVERWEIGHT BAGGAGE',
        texto:
          'Any bag weighing more than a passenger&apos;s standard luggage allowance.',
        imagen: require('@/assets/curso/t1-s1-5.png'),
      },
      {
        titulo: 'LITHIUM ION BATTERY',
        texto:
          'A type of rechargeable battery that uses lithium ions as their primary component.',
        imagen: require('@/assets/curso/t1-s1-6.png'),
      },
      {
        titulo: 'DANGEROUS GOODS',
        texto:
          '(Also known as hazardous material or hazmat). Substances that are corrosive, flammable, combustible, explosive, oxidising or water-reactive or have other hazardous properties.',
        imagen: require('@/assets/curso/t1-s1-7.png'),
      },
      {
        titulo: 'POWER BANK',
        texto:
          'A portable device that can store electricity for charging phones, cameras, laptop computers, etc.',
        imagen: require('@/assets/curso/t1-s1-8.png'),
      },
      {
        titulo: 'ELECTRONIC CIGARETTE',
        texto:
          'An electronic device that simulates tobacco smoking. (Also know as E-Cigarette).',
        imagen: require('@/assets/curso/t1-s1-9.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Self service Check-in',
        texto:
          '<p>(Auto Registro o <i>Auto check-in</i>)<br><br>A process allowing passengers with bags to check-in at machines that can read your Passport or ID Card.</p>',
        imagen: require('@/assets/curso/t1-s2.png'),
      },
      {
        titulo: 'Passport Check/Control',
        texto:
          '<p>(Control de Pasaportes).<br><br>The place at an airport, where an official checks your passport to validate your identity.</p>',
        imagen: require('@/assets/curso/t1-s2-2.png'),
      },
      {
        titulo: 'Airport Security Checkpoint',
        texto:
          '<p>(Punto de control de seguridad del aeropuerto).<br><br>The area where the airport security staff screens and processes passengers, belongings and cabin baggage. X-Ray machines and scanners are used here.</p>',
        imagen: require('@/assets/curso/t1-s2-3.png'),
      },
      {
        titulo: 'Duty Free Shop',
        texto:
          '<p>(Tienda Libre de Impuestos).<br><br>A shop or store at the airport where goods are sold at a cheaper price because they are not taxed.</p>',
        imagen: require('@/assets/curso/t1-s2-4.png'),
      },
      {
        titulo: 'Departure Lounge',
        texto:
          '<p>(Sala de Embarque).<br><br>A seating area in an airport where passengers wait immediately prior to boarding. It is located next to the <i>Boarding Gate</i>.</p>',
        imagen: require('@/assets/curso/t1-s2-5.png'),
      },
      {
        titulo: 'Departure Gate / Boarding Gate',
        texto:
          '<p>(Puerta de Salida/Partida / Puerta de Embarque o Abordaje).<br><br>Any of the numbered gates that allow passengers to go from the terminal to the airplane.</p>',
        imagen: require('@/assets/curso/t1-s2-6.png'),
      },
      {
        titulo: 'Baggage Claim / Reclaim Area',
        texto:
          '<p>(Zona de Recolección de Equipaje).<br><br>The area in an airport where arriving passengers pick up their checked baggage.</p>',
        imagen: require('@/assets/curso/t1-s2-7.png'),
      },
      {
        titulo: 'Baggage carousel / Luggage Conveyor Belt',
        texto:
          '<p>(Banda / cinta de equipaje).<br><br>A continuously revolving belt, track or other device on which items are placed for later retrieval.</p>',
        imagen: require('@/assets/curso/t1-s2-8.png'),
      },
      {
        titulo: 'Control Tower',
        texto:
          '<p>(Torre de Control).<br><br>A tower at an airport from which air traffic is controlled.</p>',
        imagen: require('@/assets/curso/t1-s2-9.png'),
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
        imagen: require('@/assets/curso/s3-i1.png'),
      },
      {
        titulo: 'TRANSIT VISA',
        texto:
          '<p>An airport transit visa allows a traveler to pass through the international zone of an airport, without entering the country’s territory.</p>',
        imagen: require('@/assets/curso/s3-i2.png'),
      },
      {
        titulo: 'RESIDENCE CARD/PERMIT',
        texto:
          '<p>A document or card required in some regions, allowing a foreign national to reside in a country for a fixed or indefinite length of time.</p>',
        imagen: require('@/assets/curso/s3-i3.png'),
      },
      {
        titulo: 'BOARDING PASS',
        texto:
          '<p>A pass for boarding an aircraft, given to passengers when checking in.</p>',
        imagen: require('@/assets/curso/s3-i4.png'),
      },
      {
        titulo: 'LUGGAGE LABEL/TAG',
        texto:
          '<p>A small piece of card or plastic with your name and address written on it that you fasten to a bag or case to show that it belongs to you.</p>',
        imagen: require('@/assets/curso/s3-i5.png'),
      },
      {
        titulo: 'BIRTH CERTIFICATE',
        texto:
          '<p>An official document giving details of the time and place of a person&apos;s birth, and his or her name, sex, and the name of the parents.</p>',
        imagen: require('@/assets/curso/s3-i6.png'),
      },
      {
        titulo: 'IDENTIFICATION CARD',
        texto:
          '<p>A card giving identifying data about a person, as full name, address, age, and color of hair and eyes, and often containing a photograph.</p>',
        imagen: require('@/assets/curso/s3-i7.png'),
      },
      {
        titulo: 'MIGRATION REQUIREMENTS',
        texto:
          '<p>Conditions for changing one’s place of residence from one country, or region within a country, to another.</p>',
        imagen: require('@/assets/curso/s3-i8.png'),
      },
      {
        titulo: 'MIGRATION REQUIREMENTS',
        texto:
          '<p>A paper document that gives details of the diseases you have been vaccinated against. It is also known as an <i>International Certificate of Vaccination or Prophylaxis</i> or ICVP.</p>',
        imagen: require('@/assets/curso/s3-i9.png'),
      },
      {
        titulo: 'HEALTH CERTIFICATE',
        texto:
          '<p>A certificate attesting a person’s good health, sometimes required when travelling between states or countries.</p>',
        imagen: require('@/assets/curso/s3-i10.png'),
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
