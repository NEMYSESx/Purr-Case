import MaxWidthWrapper from "@/components/maxwidth-wrapper";
import Steps from "@/components/steps";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
