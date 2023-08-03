"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
const montserrat = Montserrat({
  weight: "600",
  subsets: ["cyrillic"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-red-600",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-green-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-sky-500",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-blue-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-violet-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-pink-300",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-blue-200",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#080421] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image  alt="Logo" src="/logo.png" height={100} width={100}/>
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            enIgmA
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/20 rounded-lg transition ",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
