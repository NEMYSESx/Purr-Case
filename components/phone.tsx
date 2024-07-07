import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import darkphone from "@/public/phone-template-dark-edges.png";
import phone from "@/public/phone-template-white-edges.png";
import Image from "next/image";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: any;
  dark?: boolean;
}
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={dark ? darkphone : phone}
        alt="phone"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          alt="overlayin gphone image"
          className="object-cover min-w-full min-h-full"
          width={256}
          height={100}
        />
      </div>
    </div>
  );
};

export default Phone;
