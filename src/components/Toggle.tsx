import {motion} from 'framer-motion'


type ToggleProps = {
    isActived: boolean,
    setActived: (value: boolean) => void,
}
export default function Toggle({isActived, setActived, }:ToggleProps) {
    return(

            <div onClick={()=>setActived(!isActived)}
                 className="w-16 h-8 rounded-full bg-[#BABABA] border border-[#017373] p-1 flex items-center cursor-pointer">
                <motion.div
                    animate={{x:isActived? 32 : 0}}
                    transition={{duration:0.2, ease: "easeInOut"}}

                    className={`w-5 h-5 rounded-full bg-[#FFFFFF]` }></motion.div>
            </div>
    )
}