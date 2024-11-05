import Image from "next/image";
import logoPuma from "../../../../public/sponsors/puma-2.0.png";
import logoBanco from "../../../../public/sponsors/bg-3.0.png";
import logoKetal from "../../../../public/sponsors/KETAL-2023-2.0.png";
import logoSuzuki from "../../../../public/sponsors/susuki-2.0.png";
import logoBago from "../../../../public/sponsors/bago.png";
import logoPace from "../../../../public/sponsors/Paciera-PNG.png";
import logoBreick from "../../../../public/sponsors/2Breick-logo.png";
import logoMagLab from "../../../../public/sponsors/Maglab.png";
import logoLibelula from "../../../../public/sponsors/libelula.png";
import logoVillaSanta from "../../../../public/sponsors/villa-santa.png";

const Sponsors = () => {
  return (
    <section className="p-6 bg-picton-blue-900">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-50 uppercase ">Sponsors</h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-600">
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <Image src={logoPuma} alt="logo puma" className="fill-current w-28 h-28"/>
         
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoBanco} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoKetal} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoSuzuki} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoBago} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoPace} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoBreick} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoMagLab} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoLibelula} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image src={logoVillaSanta} alt="logo puma" className="fill-current w-28 h-28"/>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;
