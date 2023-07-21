import NavFr from "@/components/fr/NavFR";

export default function FrLayout({ children }) {
  return (
    <>
      <NavFr />
      {children}
    </>
  );
}
