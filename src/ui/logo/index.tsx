import Image from "next/image";

export interface LogoProps {
  size: number;
}

export function Logo({ size }: LogoProps) {
  return (
    <div>
      <Image
        src={"/Image/newlogo.jpg"}
        width={size}
        height={size}
        alt={"This is the Logo"}
      />
    </div>
  );
}
