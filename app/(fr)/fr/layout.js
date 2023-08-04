import NavFr from "@/components/fr/NavFR";
import HeaderFr from "@/components/fr/HeaderFR";

export default function FrLayout({ children }) {
  return (
    <>
      <HeaderFr />
      {children}
    </>
  );
}
