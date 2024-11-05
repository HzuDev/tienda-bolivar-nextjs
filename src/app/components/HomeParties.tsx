import Image from "next/image";
import bolivar from "../../../public/equipos/logo-750x750-1-160x160.png";
import flamengo from "../../../public/equipos/Flamengo.png";
import orientePetrolero from "../../../public/equipos/oriente-petrolero-160x160.png";

export default function HomeParties() {
  return (
    <>
      <section className="py-10">
        <div className=" px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <h2 className="text-center font-bold text-5xl mb-10">
            Próximos Partidos
          </h2>
          <div className="grid sm:grid-cols-2 text-sm font-medium text-gray-500 gap-x-2 gap-y-12 lg:gap-y-16 text-balance">
            <div className="border-4 rounded-lg border-picton-blue-900 bg-gradient-to-t from-picton-blue-800 via-picton-blue-600 to-picton-blue-500 p-5">
              <div className="flex flex-col justify-between px-4">
                <div className="text-gray-100 font-bold">
                  <p className="text-2xl ">Copa Libertadores</p>
                  <p className="mt-2">
                    Copa a Disputarse en la Ciudad de La paz
                  </p>
                  <div className="font-semibold">
                    <p>
                      Hora: <span className="font-light"> 15:00</span>
                    </p>
                    <p>
                      Estadio:
                      <span className="font-light">
                        {" "}
                        Estadium Hernando Siles{" "}
                      </span>
                    </p>
                    <p>
                      Fecha: <span className="font-light"> 08/06/2024</span>
                    </p>

                    <div className=" pt-4 flex justify-around		text-xl font-bold text-picton-blue-100">
                      <p>Bolivar</p>
                      <p>Flamengo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 mt-4 overflow-hidden flex flex-row  items-center">
                <Image
                  src={bolivar}
                  alt="equipo local "
                  className="w-14 h-14 mx-auto rounded-2xl"
                />
                <span className="font-bold text-picton-blue-100">VS</span>
                <Image
                  src={flamengo}
                  alt="equipo visitante"
                  className="w-14 h-14 mx-auto rounded-2xl"
                />
              </div>
            </div>
            <div className="border-4 rounded-lg border-picton-blue-900 bg-gradient-to-t from-picton-blue-800 via-picton-blue-600 to-picton-blue-500 p-5">
              <div className="flex flex-col justify-between px-4">
                <div className="text-gray-100 font-bold">
                  <p className="text-2xl ">Liba Boliviana</p>
                  <p className="mt-2">
                    Partido Liga Boliviana A disputarse en la ciudad de Santa
                    Cruz
                  </p>
                  <div className="font-semibold">
                    <p>
                      Hora: <span className="font-light"> 20:00 Hrs</span>
                    </p>
                    <p>
                      Estadio:
                      <span className="font-light">Santa Cruz Tahuichi</span>
                    </p>
                    <p>
                      Fecha: <span className="font-light"> 10/06/2024</span>
                    </p>
                    <div className="flex justify-around	text-xl font-bold text-picton-blue-100 pt-4">
                      <p>Oriente Petrolero</p>
                      <p>Bolivar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 mt-4 overflow-hidden  flex flex-row  items-center">
                <Image
                  src={ orientePetrolero }
                  alt="equipo local "
                  className="w-14 h-14 mx-auto rounded-2xl"
                />
                <span className="font-bold text-picton-blue-100">VS</span>
                <Image
                  src={ bolivar }
                  alt="equipo visitante"
                  className="w-14 h-14 mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a
            className="inline-block rounded bg-blue-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            href="/tickets"
          >
            Comprar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
