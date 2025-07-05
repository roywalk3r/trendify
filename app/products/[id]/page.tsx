import ProductDetail from "@/components/product-detail"
// import RelatedProducts from "@/components/related-products"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

// Mock product data - in real app, this would come from API/database
const getProduct = async (id: string) => {
  const products = [
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      images: ["/images/hero2.jpg", "/images/hero3.jpg", "/images/heroImg1.png"],
      rating: 4.5,
      reviews: 128,
      description:
          "Made from 100% organic cotton, this premium t-shirt offers unmatched comfort and style. Perfect for casual wear or layering.",
      features: ["100% Organic Cotton", "Pre-shrunk", "Machine Washable", "Sustainable Production"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy", "Gray"],
      category: "T-Shirts",
      brand: "Trendify",
      sku: "TRF-001",
      inStock: true,
      stockCount: 25,
      isNew: true,
      isSale: true,
    },
    // Add more products as needed
  ]

  return products.find((p) => p.id === id)
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <ProductDetail product={product} />
          {/*<div className="mt-16">*/}
          {/*  <RelatedProducts currentProductId={product.id} />*/}
          {/*</div>*/}
        </div>
      </div>
  )
}
