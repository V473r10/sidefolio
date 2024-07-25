"use client";
import {Paragraph} from "@/components/Paragraph";
import Image from "next/image";

import {motion} from "framer-motion";
import Link from "next/link";

export default function About() {
    const images = [
        "/images/about-me/tapes.jpg",
        "/images/about-me/father.jpg",
        "/images/about-me/cinema.jpg",
        "/images/about-me/ps.jpg  ",
    ];
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
                {images.map((image, index) => (
                    <motion.div
                        key={image}
                        initial={{
                            opacity: 0,
                            y: -50,
                            rotate: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: index % 2 === 0 ? 3 : -3,
                        }}
                        transition={{duration: 0.2, delay: index * 0.1}}
                    >
                        <Image
                            unoptimized
                            src={image}
                            width={200}
                            height={400}
                            alt="about"
                            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-4xl">
                <Paragraph className=" mt-4">
                    Hey there, I&apos;m Facundo Valerio - founder of Codedicated.
                    Through the last years I&apos;ve been improving my software development skills to bring you curated
                    content, products and services.
                </Paragraph>
                <Paragraph className=" mt-4">
                    2023–2024 was one of the most changing periods of my life thus far. <br/>
                    Y began to consolidate the idea of what would end up being called Codedicated.
                </Paragraph>

                <Paragraph className=" mt-4">
                    I understood that as one-person team, I had to optimize my development experience to the maximum by
                    focusing on the user experience of my products. <br/>
                    That&apos;s when I met Supabase, and I could forget about writing and maintaining backend
                    code. <br/>
                    It was at that moment that I started to see the idea of Codedicated beyond my wildest dreams
                </Paragraph>
                <Paragraph className=" mt-4">
                    In parallel, I was realizing that we had waited long enough for the biggest dream with my
                    wife. <br/>
                    I decided to bring it up to her, and as of this writing, on July 24, we are about to welcome
                    Vittorio. Our first child.
                </Paragraph>
                <Paragraph className=" mt-4">
                    If you came this far, I want to thank you for being here. I <br/>
                    hope you enjoy the content that I create and that it brings you value. <br/>
                    If you ever want to reach out to me, feel free to do so at {' '}
                    <Link href={`mailto:contact@codedicated.com`}>contact@codedicated.com</Link>
                </Paragraph>
            </div>
        </div>
    );
}
