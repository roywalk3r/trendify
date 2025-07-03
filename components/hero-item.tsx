"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

interface HeroItems {
    image: string
    title: string
    text: string
    cta: string
    position?: string
}

export default function HeroItem({ image, title, text, cta, position }: HeroItems) {
    return (
        <div
            className={`w-full h-[520px] ${position ? position : "items-center"} rounded-3xl flex flex-col justify-end p-10 bg-cover bg-center`}
            style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${image})` }}
        >
            <motion.h2
                className="text-background text-5xl font-bold mb-2 typography"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-background italic mb-5 drop-shadow typography"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {text}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    variant={"ghost"}
                    className="bg-white px-6 py-3 rounded-full text-ascent font-semibold w-fit typography"
                >
                    {cta}
                </Button>
            </motion.div>
        </div>
    )
}
