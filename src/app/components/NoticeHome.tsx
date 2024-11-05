export default function NoticeHome() {
  return (
    <section className="pt-10">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h3 className="text-2xl font-bold text-gray-800 lg:text-5xl">
                Ultimas Noticias
              </h3>

              <p className="hidden max-w-screen-sm text-gray-500 md:block">
                Obten las ultimas noticias de nuestro club
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="https://clubbolivar.com/comunicado-oficial-8/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              target="_blank"
            >
              <img
                src="https://clubbolivar.com/wp-content/uploads/2024/01/Comunicados-e1706636193556-1280x605.jpg"
                alt="Bolivar"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative ml-4 mb-3 inline-block bg-black bg-opacity-50 rounded px-2">
                <span className="text-sm text-white md:text-lg">
                  Comunicado Oficial
                </span>
              </div>
            </a>

            <a
              href="https://clubbolivar.com/sajama-x-bolivar-una-joya-en-tus-manos/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              target="_blank"
            >
              <img
                src="https://clubbolivar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-28-at-15.32.38-e1711658255853-640x418.jpeg"
                loading="lazy"
                alt="Reloj Sahara Bolivar"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative ml-4 mb-3 inline-block bg-black bg-opacity-50 rounded px-2">
                <span className="text-sm text-white md:text-lg">
                  SAJAMA X BOLÍVAR: UNA JOYA EN TUS MANOS
                </span>
              </div>
            </a>

            <a
              href="https://clubbolivar.com/campeonas-invictas/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              target="_blank"
            >
              <img
                src="https://clubbolivar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-11.28.21-2-e1711380810520-1280x702.jpeg"
                loading="lazy"
                alt="Campeonas Bolivar"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative ml-4 mb-3 inline-block bg-black bg-opacity-50 rounded px-2">
                <span className="text-sm text-white md:text-lg">
                  ¡CAMPEONAS INVICTAS!
                </span>
              </div>
            </a>

            <a
              href="https://clubbolivar.com/el-club-bolivar-renueva-con-el-banco-ganadero/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              target="_blank"
            >
              <img
                src="https://clubbolivar.com/wp-content/uploads/2024/05/JORG0701-2-min-640x427.jpg"
                loading="lazy"
                alt="Viacha Selecciones"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div className="relative ml-4 mb-3 inline-block bg-black bg-opacity-50 rounded px-2">
                <span className="text-sm text-white md:text-lg">
                  EL CLUB BOLÍVAR RENUEVA CON EL BANCO GANADERO
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
