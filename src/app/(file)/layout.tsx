import "../globals.css";
import SideBar from "@/components/side-bar/SideBar";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex">
            <SideBar />
            <div className={`bg-[color:#EDF0F8] w-[calc(100%-250px)]`}>
                {children}
            </div>
        </div>

    );
}
