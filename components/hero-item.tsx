import { Button } from "./ui/button";

interface HeroItems{
    image: string;
    title: string;
    text: string;
    cta: string;
    position?: string;
}

export default function HeroItem({image, title, text, cta, position}:HeroItems){
    return(
        <div className={`w-full h-[520px] ${position ? position : 'items-center'} rounded-3xl flex flex-col justify-end p-10 bg-cover bg-center`} style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${image})` }}>
            <h2 className="text-background text-5xl font-bold mb-2 typography">{title}</h2>
            <p className="text-background italic mb-5 drop-shadow typography">{text}</p>
            <Button variant={"ghost"} className="bg-white px-6 py-3 rounded-full text-ascent font-semibold w-fit typography">{cta}</Button>
        </div>
    )
}