export default function Citate1(){
    return(
        <section className = "bg-[#080808] w-full flex items-center justify-center py-16 max-md:px-5">

            <div className = "flex flex-col justify-center">

                <svg className="max-md:h-auto"
                    width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 24L9.95122 0H18.439L13.1707 24H0ZM18.8293 24L28.7805 0H37.2683L31.9024 24H18.8293Z" fill="url(#paint0_linear_4111_232)"/>
                    <defs>
                        <linearGradient id="paint0_linear_4111_232" x1="37.2683" y1="0" x2="1.62745" y2="40.1127" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#AAD9D1"/>
                            <stop offset="1" stop-color="#017373"/>
                        </linearGradient>
                    </defs>
                </svg>

                <p className = "font-['DM_Sans'] font-bold text-2xl max-md:text-lg leading-[140%] tracking-[-1%] text-[#EFECE6] max-w-117 text-center">
                    The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.
                </p>
                <span className = "flex items-center gap-4 justify-center mt-5 max-md:mt-3">
                    <p className = "font-[DM_Sans] font-normal text-base max-md:text-sm leading-[150%] text-[#EFECE6]">
                        Sarah Johnson
                    </p>
                    <p className="font-[DM_Sans] font-normal text-base max-md:text-sm leading-[150%] text-[#737373]">
                        TechSavvy Solutions
                    </p>
                </span>
            </div>

        </section>
    )
}