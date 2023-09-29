import Image from "next/image";

const arr = [1, 2, 3, 4, 5, 6];
const SideBar = () => {
  return (
    <div className="bg-[color:white] text-black w-[287px] h-[100vh]">
      <div className="px-3 py-5 flex flex-col gap-16">
        <div className="text-[color:var(--goldColor)] flex items-center justify-center">
          <Image
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="Marina"></Image>
        </div>
        <div className="flex flex-col gap-3">
          {arr.map((ea) => {
            return (
              <div
                key={ea}
                className={`flex gap-3 text-white py-2 pl-6 rounded-2xl ${
                  ea == 1 && "bg-[color:var(--goldColor)]"
                }`}>
                <Image
                  src={"/dashboard.svg"}
                  width={20}
                  height={20}
                  alt="dashboard"
                />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
