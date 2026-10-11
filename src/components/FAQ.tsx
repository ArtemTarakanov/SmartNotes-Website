import {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";
const Items = [
    {
        title: "What is SmartNotes?",
        description: "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante."
    },
    {
        title: "How do I get started with SmartNotes?",
        description: "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process."
    },
    {
        title: "What are the key features of SmartNotes?",
        description: "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante."
    },
    {
        title: "How much does SmartNotes cost?",
        description: "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante."
    },
    {
        title: "Who is SmartNotes for?",
        description: "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante."
    },
    {
        title: "What is SmartNotes?",
        description: "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante."
    },

]

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return(
        <section id="faq"
            className = "overflow-hidden bg-[#080808] py-16 md:px-80 max-md:px-5 overflow-hidden flex flex-col items-center justify-center gap-18">

            <div className = "flex flex-col items-center justify-center gap-3">
                <h1 className = "font-['DM_Sans'] font-bold text-5xl max-md:text-3xl leading-[120%] max-md:leading-[130%] max-md:tracking-[-1%] text-center text-[#EFECE6]">Frequently Asked <span className = "bg-linear-to-tr from-[#AAD9D1] to-[#017373] bg-clip-text text-transparent">Questions</span></h1>
                <p className = " w-full font-['DM_Sans'] font-normal text-base max-md:text-sm leading-[150%] text-[#BABABA] text-center">We've compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out to our support team.</p>
            </div>

            <div className = "flex flex-col md:w-7/10 max-md:w-full gap-5">
                {Items.map((item, index)=>(
                    <div key={index} className = {`items-center justify-between border border-[#048C80] rounded-lg transition-transform duration-200 ${openIndex === index ? "bg-[#EFECE6]" : "bg-[#080808]"}`}>

                        <button className = "w-full flex items-center justify-between px-6 py-4.5"
                            onClick={()=>setOpenIndex(openIndex === index ? null : index)}>
                            <p className = {`text-left font-['DM_Sans'] font-bold text-xl max-md:text-lg leading-[140%] max-md:leading-[150%] ${openIndex === index ? "text-[#080808]" : "text-[#EFECE6]"}`}>{item.title}</p>

                            <svg className={`transition-transform duration-200 ${openIndex === index ? "rotate-90" : "rotate-0"}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#048C80"/><path d="M8.80786 8.58298V12.5076H16.2796V8.58298H8.80786Z" fill="url(#paint0_linear_4111_575)"/><path d="M20.2048 8.58279L16.28 12.5076L16.2786 12.509L15.7703 12.509L15.7703 13.0173L7.29419 21.4934L10.0686 24.2678L19.0544 15.282L19.0565 22.7288L22.9806 22.728L22.9806 12.5083L22.9785 11.3579L22.9792 11.3572V8.58491L22.9771 8.58279L20.2048 8.58279Z" fill="url(#paint1_linear_4111_575)"/><defs><linearGradient id="paint0_linear_4111_575" x1="8.80786" y1="8.58298" x2="11.6366" y2="16.0134" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint1_linear_4111_575" x1="21.3368" y1="6.9425" x2="23.7637" y2="35.0479" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient></defs></svg>
                        </button>

                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="font-['DM_Sans'] font-normal text-base max-md:text-sm leading-[150%] text-[#333333] px-6 pb-5">
                                        {item.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))}

            </div>



        </section>
    )
}