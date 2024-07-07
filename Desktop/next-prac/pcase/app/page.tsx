import MaxWidthWrapper from "@/components/maxwidth-wrapper";
import Image from "next/image";
import cat from "@/public/catt.jpg";
import { ArrowRight, Check, CircleCheck, Star } from "lucide-react";
import user1 from "@/public/users/user-1.png";
import user2 from "@/public/users/user-2.png";
import user3 from "@/public/users/user-3.png";
import user4 from "@/public/users/user-4.jpg";
import user5 from "@/public/users/user-5.jpg";
import user6 from "@/public/users/user-6.jpg";
import line from "@/public/line.png";
import yourimage from "@/public/your-image.png";
import Phone from "@/components/phone";
import test from "@/public/test.jpg";
import { Reviews } from "@/components/Review/reviews";
import arrow from "@/public/arrow.png";
import horse from "@/public/horse.jpg";
import horse_c from "@/public/horse_phone.jpg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 l:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src={cat} alt="logo" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your image on a
                <span className="bg-green-600 px-1 text-white mt-2">
                  Custom
                </span>
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCat allows you to protect your memories, not just your phone
                case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <CircleCheck className="h-5 w-5 shrink-0 text-green-600" />
                  High-quality, durable material
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <CircleCheck className="h-5 w-5 shrink-0 text-green-600" />5
                  years print guarantee
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <CircleCheck className="h-5 w-5 shrink-0 text-green-600" />
                  Modern iPhone models supported
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <CircleCheck className="h-5 w-5 shrink-0 text-green-600" />
                  Affordable
                </li>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={user1}
                    alt="user"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={user2}
                    alt="user"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={user3}
                    alt="user"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={user4}
                    alt="user"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={user5}
                    alt="user"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={user6}
                    alt="user"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    +<span className="font-semibold">1,250</span> Happy
                    Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src={yourimage}
                alt="your-image"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                src={line}
                alt="line"
                className="absolute w-20 -left-6 -bottom-6"
              />
              <Phone className="w-64" imgSrc={test} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex:row itmes-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl ms:text-6xl text-gray-900">
              What out{" "}
              <span className="relative px-2">
                customers
                {/* <Icons.Underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom--6 text-green-500" /> */}
              </span>{" "}
              say?
            </h2>
            {/* <Image src={cat} alt="logo" className="w-24 order-0 lg:order-2" /> */}
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-6">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two months and{" "}
                  <span className="p-0.5 bg-slate-700 text-white">
                    the image is super clear
                  </span>
                  ,on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={user1}
                  alt="user"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I fuck with this cover but im only giving this 4 stars
                  to annoy him hehe,
                  <span className="p-0.5 bg-slate-700 text-white">
                    looks brand new after about half a year&quot;
                  </span>
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={user6}
                  alt="user"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Ana</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl ms:text-6xl text-gray-900">
                Upload your photo and get
                <span className="relative px-2 bg-green-600 text-white">
                  your own case
                </span>{" "}
                now
              </h2>{" "}
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                src={arrow}
                alt="arrow"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  src={horse}
                  alt="horse"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone imgSrc={horse_c} className="w-60" />
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8 bg-green-600",
              })}
              href="/configure/upload"
            >
              Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
