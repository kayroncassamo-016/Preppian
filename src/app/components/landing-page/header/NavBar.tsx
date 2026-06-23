"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "../../../assets/Logo";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { DropdownMenu, DropdownMenuContent 
, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }
 from "@/components/ui/dropdown-menu";

 import { Avatar,AvatarFallback,AvatarImage} 
 from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LoginDialog } from "../login/Login";
import { MyLoginDialog } from "../login/MyLogin";

export default function NavBar()
{
const [open,setOpen] = useState(false);
const [openLoginDialog, setOpenLoginDialog] = useState(false);

    return (
        <header className="flex justify-between
        items-center lg:justify-start
        bg-[#1f1f1e] p-4 border-b border-white/5">

    {/* <LoginDialog
        open={openLoginDialog}
        setOpen={setOpenLoginDialog}
    /> */}

    <MyLoginDialog open={openLoginDialog} onClose={()=>setOpenLoginDialog(false)}/>

        <div className="flex items-center justify-center">
          <div className="lg:hidden">
                <Sheet open= {open} onOpenChange={setOpen}
                >
                    <SheetTrigger asChild>
                       <Button variant={"ghost"}
                       size={"icon"}>
                            <Icon icon = "picon:menu" 
                            className="w-20 h-5"/>
                       </Button>
                    </SheetTrigger>

                    <SheetContent side="left"
                    
                    className="border-r-2 border-gray-400 w-500">

                        <SheetTitle className="p-5">
                            <Logo />
                        </SheetTitle>
                        <nav className="flex flex-col
                        ml-2 flex-1 text-md font-semibold
                        ">
                            <Link href="#how-it-works"
                            className="p-2 hover:bg-accent
                             text-main-color
                            ">How It Works
                            </Link>
                            <Link href="#features" className="p-2
                            hover:bg-accent transition-colors">
                                Features
                            </Link>

                            <Link href="#pricing" className="p-2
                            hover:bg-accent transition-colors">
                                Pricing
                            </Link>

                            <Link href="#testimonials" className="p-2
                            hover:bg-accent transition-colors">
                                Results
                            </Link>
                    </nav>

                    <SheetFooter className="border-t-2 border-gray-400">
                        <Link href="#login">

                        <Button className="w-full rounded-full p-5
                        bg-foreground hover:bg-[#212121]
                        transition-colors duration-200
                        ">
                            Log in
                        </Button>
                        
                        </Link>
                    </SheetFooter>
                    </SheetContent>

                    
                </Sheet>
            </div>
{/**Continuacao */}
            <Link href ="/"
            className="flex items-center ml-2
          lg:ml-9">
                   <Logo />
                <span className="font-bold
                text-white/70 ml-2 
                tracking-wider text-sm md:text-lg">
                    Preppian
                </span>
            </Link>
        </div>

            <nav className="hidden lg:flex ml-2 flex-1 items-center
            justify-center font-semibold text-white/70 text-sm
            ">
                <Link href="#how-it-works"
                className="px-2 hover:text-white transition-colors
                ">How It Works
                </Link>
                <Link href="#features" className="px-2
                hover:text-white transition-colors">
                    Features
                </Link>

                 <Link href="#pricing" className="px-2
                hover:text-white transition-colors">
                    Pricing
                </Link>

                <Link href="#testimonials" className="px-2
                hover:text-white transition-colors">
                    Results
                </Link>


            </nav>

            <div className="flex ">
                <Link href="" className="
                flex justify-center">
                    <Button className="rounded-full px-5
                    text-background hover:bg-foreground/80"
                    onClick={()=>setOpenLoginDialog(true)}>

                        Log in
                    </Button>
                </Link>

                <Link href="" className="mx-2
                flex justify-center">
                    <Button className="rounded-full px-5
                    bg-background
                    text-foreground
                    hover:bg-accent"
                    variant="outline"
                    onClick={()=>setOpenLoginDialog(true)}>
                        Sign up
                    </Button>
                </Link>
            </div>

            
            

{/*             
            <div className="mr-6">
           <DropdownMenu>

                <DropdownMenuTrigger asChild>
                    <Button  
                    className="rounded-full"
                    size="icon">
                        <Avatar >
                            <AvatarImage src=""/>
                            <AvatarFallback>
                                KC
                            </AvatarFallback>
                        </Avatar>
                        </Button>
                  
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56"
                align="end">
                    <DropdownMenuLabel>
                        kayronloureloure916@gmail.com
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>

                    <DropdownMenuItem>
                        <Icon icon="material-symbols:settings-rounded" 
                        className="mr-2" />
                        Settings
                    </DropdownMenuItem> 
                    
                    <DropdownMenuItem>
                        <Icon icon="stash:billing-info-solid"
                        className="mr-2"/>
                        Billing
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <Icon icon="oui:app-dashboard"
                        className="mr-2"/>
                        App Dashboard
                    </DropdownMenuItem>


                    <DropdownMenuItem>
                        <Icon icon="mage:logout"
                        className="mr-2"/>
                        Log out
                    </DropdownMenuItem>

                    

                </DropdownMenuContent>
           </DropdownMenu> 
            </div>*/}
        </header>
    )
}