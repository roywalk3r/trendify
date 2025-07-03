import Image from "next/image";
import {Input} from "@/components/ui/input";
import {HeartIcon, SearchIcon, ShoppingBag} from "lucide-react";

export default function NavBar() {
    
    return (
        <>
            <header className={"flex items-center p-2 sticky justify-between w-full border-b"}>
                <div className={"flex gap-1 items-center"}>
                    <Image src={"/images/logo.svg"} className={"dark:invert"} width={20} height={100}  alt={"Logo"} />
                    <h1 className={"typography text-2xl capitalize"}>Trendify</h1>
                </div>
            <nav className={"flex gap-3 items-center"}>
                <ul className={"flex gap-3"}>
                    <li><a href="#" className={"typography"}>New Arrivals</a></li>
                    <li><a href="#" className={"typography"}>Men</a></li>
                    <li><a href="#" className={"typography"}>Women</a></li>
                    <li><a href="#" className={"typography"}>Accessories</a></li>
                    <li><a href="#" className={"typography"}>Sale</a></li>
                </ul>
            </nav>
                <div className={"flex gap-3 items-center"}>
                <div className={"bg-[#F5F0F0] flex  items-center rounded-3xl justify-around "}>
                    <SearchIcon className={"text-[#8A6163] ml-1 shrink-0"}/>
                    <Input type={"search"} placeholder={"Search"}  className={"placeholder:text-ascent border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"}/>
                </div>
                <div className={"flex gap-3 items-center"}>
                  <HeartIcon className={" bg-[#F5F0F0]]"}/>
                    <ShoppingBag className={"text-[#8A6163] shrink-0 bg-[#F5F0F0] rounded-full p-4"}/>
                    <div >
                        <Image src={"/images/avatar.png"} className={"dark:invert"} width={37} height={37}  alt={"Logo"} />
                    </div>
                </div>
                </div>
            </header>
        </>
    );
}