/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function (moverX, moverY){
    if(moverX !== 0){
      Jugador.alto = 15;
      Jugador.ancho = 30;
      switch (moverX < 0){
        case true: 
          Jugador.sprite = 'imagenes/auto_rojo_izquierda.png';
        break;

        case false:
          Jugador.sprite = 'imagenes/auto_rojo_derecha.png';
        break;
    }} else {
      Jugador.alto = 30;
      Jugador.ancho = 15;
      switch (moverY < 0){
        case true: 
          Jugador.sprite = 'imagenes/auto_rojo_arriba.png';
        break;

        case false:
          Jugador.sprite = 'imagenes/auto_rojo_abajo.png';
        break;
      }}

    Jugador.x = Jugador.x + moverX;
    Jugador.y = Jugador.y + moverY;    
  },
  perderVidas: function (n){
    Jugador.vidas -= n;
  }
}
