// Ejercisios : 

// 1 - Añadir CSS a este componente, fijarse como se aplica en app.jsx con el css, y hacer lo mismo aca,
// Tendria que ser un archivo en la carpeta de componentes 
// 2 - Convertir app.jsx en una pagina donde se pueda ver a tipito con una imagen y el titulo de lo que hace 
// 3 - Convertir la pagina en una "card", fijarse en tailwind css como hacerlo, con bordes, redondeados y todo
// 4 - Crear un repositorio en github, y aprender como guardar esto ahi
// 5 - Ver que es cuna funcion "arrow" en javascript, ver lo basico en codecademy 
// 6 - Crear mas componentes, al menos 5 con CSS incluido, para desarrollar la pagina principal
// 7 - Es todo, lo hiciste!! :D

import './TipiCard.css'

const TipitoCard = () => {
  return (
    <>
      <div>  
          <img class="rounded-md w-80" src="https://tipitoenojado.com/wp-content/uploads/2023/08/Portada-04.jpg"></img>
      </div>
      <div>
        <p class="flex font-thin text-center justify-center pt-5 pb-2">Creador de contenido,  enemigo de los fanatismos y fanático del sentido común. 
        <br></br>Si te gusta ser la persona que esta informada y riendo en el medio de un incendio 
        <br></br>en lugar de ser el que corre con pánico, este es tu canal.</p>
      </div>
    </>
  );
}

export default TipitoCard