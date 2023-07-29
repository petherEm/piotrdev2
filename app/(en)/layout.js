import Nav from "@/components/Nav";

export default function FrLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
