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
        <div class="flex justify-center">  
            <img class="rounded-md w-80" src="https://tipitoenojado.com/wp-content/uploads/2023/08/Portada-04.jpg"></img>
        </div>
        <div>
          <p class="font-thin text pt-5 pb-2">Enemigo de los fanatismos y fanático del sentido común</p>
        </div>

        <div class="flex justify-center">
          <div class="pb-2 scale-75">
            <button>
              <a href="https://www.twitch.tv/tipitoenojado" target='_blank'>Twitch</a>
            </button>
          </div>
        </div>

              
        <div class="flex justify-center">
          <div class="pb-2 scale-75">
            <button>
              <a href="https://www.youtube.com/@TipitoEnojado" target='_blank'>Youtube</a>
            </button>
          </div>
        </div>
    </>
  );
}

export default TipitoCard