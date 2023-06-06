"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Item = ({ children }: any) => {
  return (
    <button
      className="
      h-full
      p-3
      hover:bg-gray-200
  "
    >
      {children}
    </button>
  );
};
const Right = () => {
  const router = useRouter();
  return (
    <div className="flex items-center">
      <Item>About</Item>
      <Item>Contact</Item>
    </div>
  );
};
export default Right;
