import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; href?: string };

export default function SocialButton({ icon: Icon, href = "#" }: Props) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#005900] hover:text-white transition-all duration-300 group"
    >
      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
    </a>
  );
}
