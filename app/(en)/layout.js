import Nav from "@/components/Nav";
import Header from "@/components/Header";

export default function FrLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
