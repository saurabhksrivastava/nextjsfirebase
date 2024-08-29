
'use client';
import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-12 text-center"
        src="https://i.postimg.cc/4xHYf2zh/Logo.png"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
