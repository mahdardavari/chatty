import dynamic from "next/dynamic";
const ModalSection = dynamic(() => import("./ModalSection"));

export default function test() {
  return (
    <>
      <ModalSection />
    </>
  );
}
