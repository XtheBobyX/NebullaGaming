import { PiSunDimThin } from "react-icons/pi";
import PromotionsCard from "@/features/welcome/components/PromotionsCard";

import computadorIcon from "@/shared/assets/img/computadoras.png";
import pcIcon from "@/shared/assets/img/pc-para-juegos.png";
import monitorIcon from "@/shared/assets/img/monitor.png";
import SpecsCard from "@/features/welcome/components/SpecsCard";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import NavbarWithoutLogin from "@/shared/layout/NavBarWithoutLogin";

import logo from "@/shared/assets/img/logo.png";
import img from "@/shared/assets/img/esports-center-05.jpg";
import Footer from "@/shared/layout/Footer";
import ContactCard from "@/features/welcome/components/ContactCard";
import { Link } from "react-router";

function Welcome() {
  return (
    <>
      <NavbarWithoutLogin />
      <main>
        <div className="absolute inset-0 z-10 h-screen w-full bg-black/50" />
        <div
          className="absolute inset-0 h-screen w-full"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="relative inset-0 z-20 flex h-screen flex-col items-center gap-10 overflow-hidden py-16 md:gap-6">
          <img src={logo} alt="" className="w-45" />
          <h1 className="text-center text-6xl font-bold uppercase md:text-7xl">
            Nebulla Gaming
          </h1>
          <h2 className="text-center text-3xl font-bold uppercase">
            Mejor Gaming Center
          </h2>
          <p className="text-xl"> Donde el café impulsa tu ranking</p>
          <p className="text-xl">Abierto 07:00 - 23:00</p>
          <Link
            to="/home"
            className="rounded-md bg-red-600 px-8 py-4 text-lg uppercase transition-colors duration-300 hover:bg-red-700"
          >
            Reserva Ya
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-20">
          {/* Promociones */}
          <article className="lg:w-full">
            <h2 className="text-center text-2xl font-bold uppercase md:text-4xl">
              Promociones
            </h2>

            <div className="mx-auto mt-12 flex w-full flex-col gap-4 md:w-2xl lg:w-5xl">
              <PromotionsCard
                Icon={PiSunDimThin}
                title="Día de juego"
                schedule="De 9:00 a 21:00"
                price="20"
              />
              <PromotionsCard
                Icon={PiSunDimThin}
                title="Tarde de juego "
                schedule="De 15:00 a 21:00"
                price="15"
                yellow={true}
              />
              <PromotionsCard
                Icon={PiSunDimThin}
                title="Noche de juego"
                schedule="De 23:00 a 7:00"
                price="17"
              />
            </div>
          </article>
          {/* Especificaciones */}
          <article className="min-h-100 w-sm text-center md:w-2xl lg:w-6xl">
            <h2 className="text-2xl font-bold uppercase md:text-4xl">
              Especificaciones
            </h2>

            <div className="mx-auto mt-18 flex w-90 flex-col gap-4 md:w-full lg:grid lg:grid-cols-3">
              <SpecsCard
                icon={pcIcon}
                title="Componentes"
                lists={[
                  "32 GB Ram DDRR5",
                  "AMD Ryzen 9 9950X3D",
                  "RTX 5090 TM 32GB",
                ]}
              />
              <SpecsCard
                icon={computadorIcon}
                title="Periféricos"
                lists={[
                  "Teclados Wooting 60 HE",
                  "Ratón Logitech G PRO X2",
                  "Alfombrilla BenQ ZOWIE",
                  "Auriculares HyperX Cloud",
                ]}
              />
              <SpecsCard
                icon={monitorIcon}
                title="Monitor"
                lists={["Zowie XL2546 240hz", "MAG 321CUPDF 160hz"]}
              />
            </div>
          </article>
          {/* Contacto */}
          <article className="min-h-110 min-w-80 pb-8 md:w-3xl lg:w-full">
            <h2 className="text-center text-4xl font-bold uppercase">
              Contacto
            </h2>

            <div className="mx-auto mt-8 flex flex-col gap-8 text-xl md:grid md:grid-cols-3 lg:w-6xl">
              <ContactCard
                Icon={FiMapPin}
                title="Ubicacion"
                subtitle={"Galia, s/n, 30171 Ródanos, Narros"}
              />
              <ContactCard
                Icon={LuPhone}
                title="Número de telefono"
                subtitle={"+34 948 673 761"}
              />
              <ContactCard
                Icon={CiClock2}
                title="Horario"
                subtitle={"De lunes a Domingo"}
                third={"9:00 AM - 07:00 AM"}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Welcome;
