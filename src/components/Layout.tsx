import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="content h-full flex flex-col">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
