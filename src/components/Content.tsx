type Props = {
  children: JSX.Element;
};

const Content = ({ children }: Props) => {
  return <main className="Content flex-grow">{children}</main>;
};

export default Content;
