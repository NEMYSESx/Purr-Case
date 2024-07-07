import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignPreview from "./_components/design-preview";

interface PreviewProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const Preview = async ({ searchParams }: PreviewProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuratuon.findUnique({
    where: { id },
  });
  // console.log(configuration); //getting all the data on the console

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default Preview;
