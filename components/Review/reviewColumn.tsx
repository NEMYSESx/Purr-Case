import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Review } from "./review";

interface ReviewColumnProps {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string; //to show no of columns we need according to the screen
  msPerPixel?: number;
}

const ReviewColumn = ({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: ReviewColumnProps) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;
  //logic to find the reviws height in differnt screens to slow or fast the speed of the duration i.e duration
  useEffect(() => {
    if (!columnRef.current) return;
    //If the value of columnRef.current?.offsetHeight is null or undefined, the nullish coalescing operator (??) will return the right-hand side value, which is 0 in this case.
    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
      return () => {
        resizeObserver.disconnect();
        //just an cleanup function
      };
    });
    resizeObserver.observe(columnRef.current);
  }, []);
  return (
    //this marquee animation is not pre defined we defined in the tailwind.config.ts file in the animtae object
    <div
      ref={columnRef}
      className={cn("animate-marque space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

export default ReviewColumn;
