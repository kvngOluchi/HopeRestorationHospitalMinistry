import Image from "next/image";

export interface LogoProps {
  size: number;
}

export function Logo({size}:LogoProps) {
  return (
    <div>
      <Image 
        src ={"/Image/hope rest. logo22.png"}
        width={size}
        height={size}
        alt={"This is the Logo"}
      />
    </div>
  );
}
