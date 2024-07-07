"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./actions/actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

//purpose of this page is to check if there is something in the local storage
//if there it is then rediect the user after login to summary page once again
//if not then use is normally trying to login

const AuthCallback = () => {
  const [configId, setConfigId] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");
    if (configurationId) setConfigId(configurationId);
  }, []);

  console.log(configId);

  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });

  useEffect(() => {
    if (data?.success) {
      if (configId) {
        router.push(`/configure/preview?id=${configId}`);
        localStorage.removeItem("configurationId");
      } else {
        router.push("/");
        console.log("home page");
      }
    } else if (data) {
      toast({
        title: "Something went wrong",
        description: "There was an error on our end, Please try again.",
        variant: "destructive",
      });
      console.log("else part");
    }
  }, [data, configId, router, toast]);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in....</h3>
        <p>You will be redirected automatically</p>
      </div>
    </div>
  );
};

export default AuthCallback;
