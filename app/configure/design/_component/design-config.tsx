"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import NextImage from "next/image";
import phone from "@/public/phone-template.png";
import { cn, formatPrice } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/handle-component";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef, RefObject } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup as RadioGrp } from "@headlessui/react";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { saveConfig as _saveConfig, SaveConfigArgs } from "../actions/actions";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  COLORS,
  MODELS,
  PRODUCT_PRICES,
  MATERIALS,
  FINISHES,
  BASE_PRICE,
} from "@/validators/option-validator";

interface DesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfig = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfigProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate: saveConfig, isPending } = useMutation({
    mutationKey: ["save-config"],
    mutationFn: async (args: SaveConfigArgs) => {
      await Promise.all([saveConfiguration(), _saveConfig(args)]);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "There was an error on our end, Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      router.push(`/configure/preview?id=${configId}`);
    },
  });

  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [model, setModel] = useState(MODELS.options[0]);
  const [material, setMaterial] = useState(MATERIALS.options[0]);
  const [finish, setFinish] = useState(FINISHES.options[0]);
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onUploadProgress: () => {
      console.log("Its uploading...");
    },
  });

  const [renderedDimension, setRenderedDimension] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  });

  const [renderedPosition, setRenderedPosition] = useState({
    x: 150,
    y: 205,
  });

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleModelChange = (modelLabel: (typeof MODELS.options)[0]) => {
    setModel(modelLabel);
  };

  const handleMaterialChange = (material: (typeof MATERIALS.options)[0]) => {
    setMaterial(material);
  };

  const handleFinishChange = (finish: (typeof FINISHES.options)[0]) => {
    setFinish(finish);
  };

  useEffect(() => {
    const newTotalPrice = BASE_PRICE + material.price + finish.price;
    setTotalPrice(newTotalPrice);
  }, [material, finish]);

  const phoneCaseRef = useRef<HTMLDivElement | undefined>(null);
  const containerRef = useRef<HTMLDivElement | undefined>(null);

  async function saveConfiguration() {
    try {
      const {
        left: caseLeft,
        top: caseTop,
        width,
        height,
      } = phoneCaseRef.current!.getBoundingClientRect();
      const { left: containerLeft, top: containerTop } =
        containerRef!.current!.getBoundingClientRect();

      const leftOffset = caseLeft - containerLeft;
      const topOffset = caseTop - containerTop;

      const actualX = renderedPosition.x - leftOffset;
      const actualY = renderedPosition.y - topOffset;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      const userImage = new Image();
      userImage.crossOrigin = "anonymous";
      userImage.src = imageUrl;
      await new Promise((resolve) => (userImage.onload = resolve)); //we are waiting until the image loads on the csnvas
      ctx?.drawImage(
        userImage,
        actualX,
        actualY,
        renderedDimension.width,
        renderedDimension.height
      );

      const base64 = canvas.toDataURL();
      const base64Data = base64.split(",")[1];

      const blob = base64toBlob(base64Data, "image/png");
      const file = new File([blob], "filename.png", { type: "image/png" });

      await startUpload([file], { configId });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description:
          "There was a problem saving your confing, please try again",
        variant: "destructive",
      });
    }
  }

  function base64toBlob(base64: string, mimeTypes: string) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeTypes });
  }

  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
      <div
        className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        ref={containerRef}
      >
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ref={phoneCaseRef}
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <NextImage
              src={phone}
              alt="phone image"
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>
          <div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-${selectedColor}-950`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          onResizeStop={(_, __, ref, ___, { x, y }) => {
            setRenderedDimension({
              height: parseInt(ref.style.height.slice(0, -2)),
              width: parseInt(ref.style.width.slice(0, -2)),
            });

            setRenderedPosition({
              x,
              y,
            });
          }}
          onDragStop={(_, data) => {
            const { x, y } = data;
            setRenderedPosition({ x, y });
          }}
          className="absolute z-20 border-[3px] border-primary"
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <NextImage
              src={imageUrl}
              alt="uploaded image"
              className="pointer-events-none"
              fill
            />
          </div>
        </Rnd>
      </div>
      <div className="h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />
          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">
              Customize your case
            </h2>
            <div className="w-full h-px bg-zinc-200 my-6" />
            <div className="mt-4 h-full flex flex-col justify-between">
              <RadioGroup
                defaultValue={selectedColor}
                onValueChange={handleColorChange}
              >
                <div className="flex space-x-3">
                  {COLORS.map((color, index) => (
                    <div
                      className="mt-1 flex items-center space-x-3"
                      key={index}
                    >
                      <RadioGroupItem
                        value={color}
                        id={`color-${index}`}
                        className={`border-${color}-950 fill-${color}-950 ring-offset-${color}-950`}
                      />
                      <Label htmlFor={`color-${index}`}>{color}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className="relative flex flex-col gap-3 w-full mt-5">
                <Label className="font-bold">Model</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {model.label}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {MODELS.options.map((modelOption, key) => (
                      <DropdownMenuItem
                        key={key}
                        className={cn(
                          "flex text-sm gap-1 itmes-center p-1.5 cursor-default hover:bg-zinc-100",
                          {
                            "bg-zinc-100": model.label === modelOption.label,
                          }
                        )}
                        onClick={() => handleModelChange(modelOption)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            model.label === modelOption.label
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {modelOption.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {[MATERIALS, FINISHES].map(({ name, options }, key) => (
                <RadioGrp
                  key={key}
                  value={name === "materials" ? material : finish}
                  onChange={
                    name === "materials"
                      ? handleMaterialChange
                      : handleFinishChange
                  }
                  className="mt-2"
                >
                  <Label className="font-bold">
                    {name.slice(0, 1).toUpperCase() + name.slice(1)}
                  </Label>
                  <div className="mt-3 space-y-4">
                    {options.map((option) => (
                      <RadioGrp.Option
                        key={option.value}
                        value={option}
                        className={({ active, checked }) =>
                          cn(
                            "relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
                            {
                              "border-primary": active || checked,
                            }
                          )
                        }
                      >
                        <span className="flex items-center">
                          <span className="flex flex-col text-sm">
                            <RadioGrp.Label
                              as="span"
                              className="font-medium text-gray-900"
                            >
                              {option.label}
                            </RadioGrp.Label>
                            {option.description ? (
                              <RadioGrp.Description
                                as="span"
                                className="text-gray-500"
                              >
                                <span className="block sm:inline">
                                  {option.description}
                                </span>
                              </RadioGrp.Description>
                            ) : null}
                          </span>
                        </span>
                        <RadioGrp.Description
                          as="span"
                          className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                        >
                          <span className="font-medium text-gray-900">
                            {formatPrice(option.price)}
                          </span>
                        </RadioGrp.Description>
                      </RadioGrp.Option>
                    ))}
                  </div>
                </RadioGrp>
              ))}
            </div>
          </div>
        </ScrollArea>
        <div className="w-full px-8 h-16 bg-white">
          <div className="h-px w-full bg-zinc-200" />
          <div className="w-full flex gap-6 items-center">
            <p className="font-medium whitespace-nowrap">
              {formatPrice(totalPrice)}
            </p>
            <Button
              isLoading={isPending}
              disabled={isPending}
              loadingText="Saving"
              size="sm"
              className="w-full"
              onClick={() =>
                saveConfig({
                  configId,
                  color: selectedColor as SaveConfigArgs["color"],
                  finish: finish.label as SaveConfigArgs["finish"],
                  material: material.value as SaveConfigArgs["material"],
                  model: model.value as SaveConfigArgs["model"],
                })
              }
            >
              Continue
              <ArrowRight className="h-4 w-4 ml-1.5 inline" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        {isUploading ? (
          <DotLottieReact
            src="../../../../public/loading/animation.json"
            loop
            autoplay
          />
        ) : null}
      </div>
    </div>
  );
};

export default DesignConfig;
