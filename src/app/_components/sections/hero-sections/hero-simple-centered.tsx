import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Image from "next/image";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

export default function HeroSimpleCentered({
  theme
}: AiComponentProps) {
  return (
    <>
      
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 border-2 border-gray-900 hover:opacity-80 shadow-neo-brutal">
                    Announcing our next round of funding.{" "}
                    <a
                      href="#"
                      className="whitespace-nowrap font-semibold text-primary-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white border-2 border-gray-900 shadow-neo-brutal hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex items-center justify-center">
              <Image
                src="/img/sections/hero-sections/Group 39504.png"
                alt=""
                width={566}
                height={599}
                unoptimized
            />
            </div>
          </div>
        </div>
        
    </>
  );
}
