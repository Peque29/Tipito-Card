import './Footer.css'

const Footer = () => {
    return (
        <>
          <footer
            class="bg-zinc-50 text-center bottom-0 mt-8 text-surface/75 dark:bg-black dark:text-white/75 lg:text-left">
              <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
              <div class="me-12 hidden lg:block">
                <span>Redes</span>
              </div>
              <div class="flex justify-center">
                <a href="https://twitter.com/tipitoenojado" class="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512">
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/tipitoenojado/" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div class="mx-6 py-5 md:text-left">
              <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h6
                    class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                    <img src="https://tipitoenojado.com/wp-content/uploads/2020/12/logo-w-01.png" class="w-5 mr-3"></img>
                    Tipito Enojado
                  </h6>
                  <p>
                    Creador de contenido, enemigo de los fanatismos y fanático del sentido común.
                  </p>
                </div>
                <br></br>
                <div class="grid justify-self-end mr-5">
                  <h6
                    class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Contact
                  </h6>
                  <p class="mb-4 flex items-center justify-center md:justify-start">
                    <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path
                          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </span>
                    tipitoenojado@gmail.com
                  </p>
                  <p class="mb-4 flex items-center justify-center md:justify-start">
                    <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    + 54 9 3404 416227 
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}

export default Footer