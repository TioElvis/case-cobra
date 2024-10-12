import Image from "next/image";
import { CheckIcon, StarIcon } from "lucide-react";
// @components
import { Each } from "@/components/each";
import { Phone } from "@/components/phone";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

const USERS_IMAGES = [
  "/users/user-1.png",
  "/users/user-2.png",
  "/users/user-3.png",
  "/users/user-4.jpg",
  "/users/user-5.jpg",
];

export default function Page() {
  return (
    <div className="bg-slate-50">
      {/*  */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6">
            <div className="flex flex-col items-center relative mx-auto text-center lg:text-left lg:items-start">
              <div className="w-28 absolute left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="snake" className="w-full" />
              </div>
              <h1 className="w-fit relative tracking-tight text-balance font-bold !leading-tight text-black text-5xl md:mt-16 md:text-6xl lg:text-6xl">
                La Tua Immagine su una{" "}
                <span className="bg-primary px-2 text-white">Cover</span>{" "}
                Personalizzata
              </h1>
              <p className="max-w-prose mt-8 text-lg text-center text-balance lg:pr-10 lg:text-left md:text-wrap">
                {" "}
                Cattura i tuoi ricordi preferiti con la tua cover per telefono,{" "}
                <b>unica nel suo genere</b>. CaseCobra ti permette di proteggere
                i tuoi ricordi, non solo la tua cover per telefono.{" "}
              </p>
              <ul className="flex flex-col items-center mt-8 space-y-2 text-left font-medium sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <CheckIcon className="w-5 h-5 shrink-0 text-primary" />
                  Materiale di alta qualità e resistente
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <CheckIcon className="w-5 h-5 shrink-0 text-primary" />
                  Garanzia di stampa per 5 anni
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <CheckIcon className="w-5 h-5 shrink-0 text-primary" />
                  Supporto per i modelli moderni di iPhone
                </li>
              </ul>
              <div className="flex flex-col gap-5 mt-12 items-center sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Each
                    of={USERS_IMAGES}
                    render={(src) => {
                      return (
                        <Image
                          src={src}
                          alt="user"
                          width={40}
                          height={40}
                          className="inline-block rounded-full object-cover ring-2 ring-slate-100"
                        />
                      );
                    }}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Each
                      of={USERS_IMAGES}
                      render={() => {
                        return (
                          <StarIcon className="w-4 h-4 text-primary fill-primary" />
                        );
                      }}
                    />
                  </div>
                  <p>
                    <b>1.250</b> clienti soddisfatti
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex justify-center px-8 col-span-full mt-16 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="image"
                className="w-40 absolute left-56 -top-20 select-none hidden sm:block lg:w-52 lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="line"
                className="w-20 -left-6 -bottom-6 select-none absolute"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
