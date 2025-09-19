export default function Logo({ size = 24 }: { size: number }) {
  return (
   <img
      src="/logo.svg"
      alt="Logo"
      width={size}
      height={size}
      className="shrink-0"
   />
  );
}
