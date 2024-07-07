"use server";

import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfig from "./_component/design-config";

interface DesignProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Design = async ({ searchParams }: DesignProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuratuon.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;
  return (
    <DesignConfig
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
      configId={configuration.id}
    />
  );
};

export default Design;
