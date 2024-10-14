import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon, StarIcon } from "lucide-react";
// @components
import { Each } from "@/components/each";
import { Phone } from "@/components/phone";
import { Comment } from "@/components/comment";
import { Reviews } from "@/components/reviews";
import { buttonVariants } from "@/components/ui/button";
import { UnderlineIcon } from "@/components/underline-icon";
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
              <div className="w-28 absolute left-0 -top-20 hidden xl:block">
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
          <div className="w-full h-fit flex justify-center px-8 mt-16 col-span-full sm:px-16 md:px-0 lg:col-span-1 lg:mx-0">
            <div className="relative md:max-w-xl">
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
      {/*  */}
      <section className="py-24 bg-slate-100">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 tracking-tighter text-center text-balance !leading-tight font-bold text-black text-5xl md:text-6xl">
              Cosa dicono i nostri{" "}
              <span className="relative px-2">
                clienti{" "}
                <UnderlineIcon className="sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-primary" />
              </span>
            </h2>
            <img
              src="/snake-2.png"
              alt="snake"
              className="w-24 h-24 order-0 lg:order-2"
            />
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-1 px-4 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Comment
              user={{ name: "Jonathan", isVerified: true }}
              description="La custodia sembra resistente e ho persino ricevuto un complimento per il design. La uso da due mesi e mezzo e l'immagine è ancora super nitida. Sulla custodia che avevo prima, l'immagine ha iniziato a sbiadire in un colore giallastro dopo un paio di settimane. La adoro!"
              image="/users/user-1.png"
            />
            <Comment
              user={{ name: "Josh", isVerified: true }}
              description="Di solito tengo il telefono insieme alle chiavi in tasca, e questo ha causato dei graffi piuttosto evidenti su tutte le mie custodie precedenti. Questa, a parte un graffio appena visibile su un angolo, sembra nuova anche dopo circa sei mesi. Mi piace un sacco."
              image="/users/user-4.jpg"
            />
          </div>
        </MaxWidthWrapper>
        <div className="pt-24">
          <h2 className="order-1 mt-2 tracking-tighter text-center text-balance !leading-tight font-bold text-black text-5xl md:text-6xl">
            Alcuni Esempi
          </h2>
          <Reviews />
        </div>
      </section>
      {/*  */}
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tighter text-center text-balance !leading-tight font-bold text-black text-5xl md:text-6xl">
                Crea subito la tua{" "}
                <span className="relative px-2 bg-primary text-white">
                  cover
                </span>
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col items-center relative grid-cols-2 gap-40 md:grid">
              <img
                src="/arrow.png"
                alt=""
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2
                 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="w-full h-80 max-w-sm relative md:h-full md:justify-self-end">
                <img
                  src="/horse.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          <ul className="w-fit max-w-prose mx-auto mt-12 space-y-2 sm:text-lg">
            <li className="w-fit">
              <CheckIcon className="w-5 h-5 text-primary inline mr-1.5" />
              Materiale di alta qualità e resistente
            </li>
            <li className="w-fit">
              <CheckIcon className="w-5 h-5 text-primary inline mr-1.5" />
              Garanzia di stampa per 5 anni
            </li>
            <li className="w-fit">
              <CheckIcon className="w-5 h-5 text-primary inline mr-1.5" />
              Supporto per i modelli moderni di iPhone
            </li>
            <li className="w-fit">
              <CheckIcon className="w-5 h-5 text-primary inline mr-1.5" />
              Supporto per i modelli moderni di iPhone
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-6",
              })}
            >
              Create your case now <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
