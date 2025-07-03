import CategoryItem from "./category-item";

export default function Category(){
    return(
        <>
        <div className="relative w-full max-w-7xl mx-auto p-8">
            <span className="font-light text-2xl">see</span>
        <h1 className={"typography text-3xl capitalize"}>Category</h1>
        <ul className={"flex flex-wrap gap-3"}></ul>
        <div className="grid grid-cols-4 gap-4 mt-8">
                 <CategoryItem image="/images/hero2.jpg" title="Men"/>
                 <CategoryItem image="/images/hero2.jpg" title="Women"/>
                 <CategoryItem image="/images/hero2.jpg" title="Kids"/>
                 <CategoryItem image="/images/hero2.jpg" title="Men"/>
                 <CategoryItem image="/images/hero2.jpg" title="Men"/>
              
            </div>
        </div>
        </>
    )
}