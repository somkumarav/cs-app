import { Footer } from "./Footer";
import { Nav } from "./Nav";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="container min-h-[90vh]">{children}</main>
      <Nav />
      <Footer />
    </>
  );
};
