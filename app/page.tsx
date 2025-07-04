import Category from "@/components/category-section";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-product";
import NewsletterSection from "@/components/newsletter-section";
import TestimonialsSection from "@/components/testimonial-section";
import BrandsSection from "@/components/brands-section";

export default function Home(){
    return (
        <>
          <Hero/>
            <Category/>
            <FeaturedProducts />
            <TestimonialsSection />
            <BrandsSection />
            <NewsletterSection />
    </>
    )
}