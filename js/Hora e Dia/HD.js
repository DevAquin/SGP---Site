now = new Date
  dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
  monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

document.write ("<h1>  "+ dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear () + ". </h1>");

now = new Date
  document.write ( "Horas: "   + now.getHours() + ":" + now.getMinutes() );
