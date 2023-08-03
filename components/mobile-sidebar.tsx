"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
const MobileSidebar = () => {
      const [isClient,setisClient]=useState(false);
      useEffect(()=>{
            setisClient(true);
      },[]);
      if(!isClient){
            return null;
      }
  return (
      <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu  color="white"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
