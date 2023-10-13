import "../globals.css";
import SideBar from "@/components/side-bar/SideBar";

// Layout for authenticate user
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className={`w-[calc(100%-250px)] bg-[color:#EDF0F8] p-8`}>
        {children}
      </div>
    </div>
  );
}
