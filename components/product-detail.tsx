"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
import { Star, Heart, Minus, Plus } from "lucide-react"
import { all_products } from "@/lib/data"
import ProductCard from "./product-card"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  rating: number
  reviews: number
  description: string
  features: string[]
  sizes: string[]
  colors: string[]
  category: string
  brand: string
  sku: string
  inStock: boolean
  stockCount: number
  isNew?: boolean
  isSale?: boolean
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Get related products (excluding current product)
  const relatedProducts = all_products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: `Reviews (${product.reviews})` },
  ]

  return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
                className="aspect-square rounded-2xl overflow-hidden bg-gray-50 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
              <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
              />
              {/* Wishlist Button */}
              <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </button>
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                  <motion.button
                      key={index}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                          selectedImage === index ? "border-ascent shadow-md" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedImage(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                  </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground">
              <span>Clothing</span> <span className="mx-2">/</span> <span>{product.category}</span>
            </div>

            {/* Product Title */}
            <h1 className="typography text-3xl md:text-4xl font-bold">{product.name}</h1>

            {/* Price */}
            <div className="text-3xl font-bold text-ascent">${product.price.toFixed(2)}</div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Size:</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                            selectedSize === size
                                ? "bg-ascent text-white border-ascent"
                                : "border-gray-300 hover:border-ascent text-foreground"
                        }`}
                    >
                      {size}
                    </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Quantity:</h3>
              <div className="flex items-center gap-3">
                <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-ascent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-ascent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 bg-ascent hover:bg-ascent/90 text-white py-3 text-lg font-semibold">
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 py-3 text-lg font-semibold border-2 bg-transparent">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-b mb-8">
          <div className="flex gap-8">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 font-medium transition-colors relative ${
                        activeTab === tab.id
                            ? "text-ascent border-b-2 border-ascent"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab.label}
                </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === "description" && (
              <div className="space-y-6">
                <h3 className="typography text-2xl font-bold">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Experience unparalleled comfort and timeless style with our {product.name}. Crafted from 100% premium,
                  breathable cotton, this t-shirt is designed to be a staple in your wardrobe for years to come. Its
                  versatile design makes it perfect for layering or wearing on its own, suitable for any occasion, from
                  casual outings to relaxed evenings.
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-ascent rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  Available in a range of sizes to ensure the perfect fit. Elevate your everyday look with this essential
                  piece.
                </p>
              </div>
          )}

          {activeTab === "specifications" && (
              <div className="space-y-6">
                <h3 className="typography text-2xl font-bold">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Brand</span>
                      <span className="text-muted-foreground">{product.brand}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">SKU</span>
                      <span className="text-muted-foreground">{product.sku}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Category</span>
                      <span className="text-muted-foreground">{product.category}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Available Sizes</span>
                      <span className="text-muted-foreground">{product.sizes.join(", ")}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Available Colors</span>
                      <span className="text-muted-foreground">{product.colors.join(", ")}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Stock Status</span>
                      <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                    </div>
                  </div>
                </div>
              </div>
          )}

          {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="typography text-2xl font-bold">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                          <Star
                              key={i}
                              className={`w-5 h-5 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                          />
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                  {product.rating} out of 5 ({product.reviews} reviews)
                </span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Customer reviews help you make informed decisions. Share your experience to help others!
                </p>
              </div>
          )}
        </div>

        {/* You Might Also Like */}
        <div>
          <h2 className="typography text-3xl font-bold text-center mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} index={index} />
            ))}
          </div>
        </div>
      </div>
  )
}
