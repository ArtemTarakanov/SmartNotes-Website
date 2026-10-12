import { motion } from "framer-motion";

export default function Discover() {
    return (
        <section id="features"
            className = "bg-[#080808] py-16 px-36 max-md:px-5 flex flex-col items-center justify-center gap-3">
            <motion.h1
                initial={{opacity: 0, y:50}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true, amount: 0.8}}
                transition={{duration:0.6, ease:"easeInOut"}}
                className="font-['DM_Sans'] font-bold text-5xl max-md:text-3xl leading-[120%] max-md:leading-[130%] max-md:tracking-[-1%] max-md:text-center text-[#EFECE6]">Discover the Power of <span className="bg-linear-to-tr from-[#AAD9D1] to-[#017373] bg-clip-text text-transparent">SmartNotes</span></motion.h1>
            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true, amount: 1}}
                transition={{duration:1, ease:"easeInOut"}}
                className = "max-w-102 font-['DM_Sans'] font-normal text-base max-md:text-sm leading-[150%] text-center text-[#BABABA]">SmartNotes is packed with innovative features designed to revolutionize the way you take notes, collaborate with others, and stay organized.</motion.p>
        </section>
    )
}