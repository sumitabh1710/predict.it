import dynamic from "next/dynamic";

const DynamicMain = dynamic(() => import("./Main"), { ssr: false });

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden w-full flex-col bg-slate-50">
      <DynamicMain />
    </main>
  );
}
