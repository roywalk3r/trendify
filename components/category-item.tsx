interface CategoryItemProps{
    image:string;
    title:string;
    slug?:string;
}
export default function CategoryItem({image, title, slug}:CategoryItemProps){
    return (
        <div className="flex flex-col items-center justify-center w-20 md:w-36 pb-6 cursor-pointer hover:scale-105 transition">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-500 flex items-center justify-center">
            
            </div>
            <p className="text-sm md:text-base mt-2 text-center truncate w-full">{title}</p>
        </div>
    );
}