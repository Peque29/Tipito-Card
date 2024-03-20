import './Redes.css'

const Redes = () => {
    return (
      <>
        <div class="grid justify-items-center pt-3">
            
            <div class="flex justify-center">
                <div class="scale-75">
                    <button class="w-28">
                        <a href="https://www.twitch.tv/tipitoenojado">Twitch</a>
                    </button>
                </div>
                <div class="scale-75">
                    <button class="w-28">
                        <a href="https://www.patreon.com/tipitoenojado">Patreon</a>
                    </button>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="scale-75">
                    <button class="w-28">
                        <a href="https://www.youtube.com/@TipitoEnojado">Youtube</a>
                    </button>
                </div>
                <div class="scale-75">
                    <button class="w-28">
                        <a href="https://www.youtube.com/@TipitoLIVE">TipitoLive</a>
                    </button>
                </div>
            </div>
        </div>
      </>
  );
}

export default Redes