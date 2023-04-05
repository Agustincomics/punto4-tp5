/* Crear una web con un reloj que muestre la siguiente información:*/

function mostrarHora() {
    let ahora = new Date();
    let diaNombre = ahora.getDay();
    switch (diaNombre) {
      case 0:diaNombre = "Domingo"
        break;
      
      case 1:diaNombre = "Lunes"
        break;

      case 2:diaNombre = "Martes"
        break;

      case 3:diaNombre = "Miercoles"
        break;

      case 4:diaNombre = "Jueves"
        break;

      case 5:diaNombre = "Viernes"
        break;

      case 6:diaNombre = "Sabado"
        break;
    }

    let fecha = ahora.getDate();
    let mes = ahora.getMonth();

    switch (mes) {
      case 0:mes = "Enero"
        break;
      
      case 1:mes = "Febrero"
        break;

      case 2:mes = "Marzo"
        break;

      case 3:mes = "Abril"
        break;

      case 4:mes = "Mayo"
        break;

      case 5:mes = "Junio"
        break;

      case 6:mes = "Julio"
        break;
        
      case 7:mes = "Agosto"
        break;

      case 8:mes = "Septiembre"
        break;

      case 9:mes = "Octubre"
        break;

      case 10:mes = "Noviembre"
        break;

      case 11:mes = "Diciembre"
        break;
    }
    let anio = ahora.getFullYear();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let amPm;
    if (hora >= 12) {
      amPm = "PM";
    } else {
      amPm = "AM";
    }
    hora = hora % 12;
    if (hora) {
      hora = hora;
    } else {
      hora = 12;
    }

    if (minutos < 10) {
      minutos = '0' + minutos;
    } 

    if (segundos < 10) {
      segundos = '0' + segundos;
    }
    
    let hora2 = `${hora}:${minutos}:${segundos}${amPm}`;
    document.getElementById('hora').innerHTML = hora2;
    let fecha2 = `${diaNombre} ${fecha} de ${mes} del ${anio}`;
    document.getElementById("fecha").innerHTML = fecha2;
  }

  setInterval(mostrarHora, 1000);
