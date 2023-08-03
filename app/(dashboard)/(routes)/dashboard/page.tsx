"use client"

import React from 'react'
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "@/public/logo.png"
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
const tools=[
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-sky-700",
    bgColor: "bg-sky-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-pink-400",
    bgColor: "bg-pink-700/10",
    href: '/code',
  },
]
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className='mb-8 space-y-4'>
        
        <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
        
        
        Ask enIgmA 
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center text-orange-100">
          Chat with the enIgmA the smartest AI 
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool) => (
          <Card  key={tool.href} onClick={() => router.push(tool.href)} className="p-4 border-white flex items-center justify-between hover:shadow-2xl transition cursor-pointer bg-transparent">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold text-gray-200">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-8 hover:translate-x-2" />
          </Card>
        ))}
      </div>
    </div>
  )
}


export default DashboardPage
