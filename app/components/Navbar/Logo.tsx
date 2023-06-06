"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex items-center">
      <span className="pl-2">宋斯凯</span>
    </div>
  );
};
export default Logo;
