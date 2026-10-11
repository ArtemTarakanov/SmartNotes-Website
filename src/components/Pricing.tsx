import Toggle from "./Toggle.tsx";
import {useState} from 'react';
const Cards = [
    {
        icon : (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4111_350)"><path d="M21.3663 0.0447388H3.63368C1.65156 0.0447388 0.0447388 1.65156 0.0447388 3.63368V21.3663C0.0447388 23.3484 1.65156 24.9553 3.63368 24.9553H21.3663C23.3484 24.9553 24.9553 23.3484 24.9553 21.3663V3.63368C24.9553 1.65156 23.3484 0.0447388 21.3663 0.0447388Z" stroke="#048C80" stroke-miterlimit="10"/><path d="M13.2364 19.4417C13.7428 18.0342 14.5598 16.7099 15.6863 15.5772L15.7069 15.5566C16.8352 14.4283 18.1532 13.6095 19.5553 13.0986C20.4286 12.781 21.3341 12.5823 22.2459 12.5045C21.3368 12.4544 20.434 12.2835 19.5633 11.9936C18.1022 11.5086 16.7332 10.6863 15.5735 9.52669C14.4148 8.36796 13.5916 6.99716 13.1066 5.53689C12.7953 4.60096 12.6226 3.62744 12.5877 2.64856L12.5501 2.68614C12.483 3.65787 12.2799 4.62243 11.9417 5.55031C11.4325 6.94616 10.6156 8.25969 9.49355 9.38532L9.48549 9.39337C8.36434 10.5145 7.05439 11.3315 5.66123 11.8424C4.72708 12.1851 3.75625 12.39 2.77826 12.458L2.76663 12.4696C3.74373 12.5045 4.71456 12.6772 5.6487 12.9868C7.11076 13.4726 8.48335 14.2949 9.64387 15.4564C10.8053 16.6178 11.6267 17.9886 12.1126 19.4515C12.423 20.3857 12.5957 21.3565 12.6306 22.3336L12.6369 22.3273C12.6986 21.3493 12.8982 20.3767 13.2346 19.4408L13.2364 19.4417Z" fill="url(#paint0_linear_4111_350)"/></g><defs><linearGradient id="paint0_linear_4111_350" x1="22.2459" y1="2.64856" x2="-5.63695" y2="22.6462" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><clipPath id="clip0_4111_350"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>),
        plan : "Individual Plan",
        price : "$9.99",
        tariff : "/ month",
        button : "Start Free Trial",
        features: [
            "Real-time collaboration",
            "AI-powered organization",
            "Customizable templates",
            "5GB cloud storage",
            "Basic integrations",
        ],
    },
    {
        icon : (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4111_383)"><path d="M21.3663 0.0447388H3.63368C1.65156 0.0447388 0.0447388 1.65156 0.0447388 3.63368V21.3663C0.0447388 23.3484 1.65156 24.9553 3.63368 24.9553H21.3663C23.3484 24.9553 24.9553 23.3484 24.9553 21.3663V3.63368C24.9553 1.65156 23.3484 0.0447388 21.3663 0.0447388Z" stroke="#048C80" stroke-miterlimit="10"/><path d="M21.5372 7.60826V12.6467C16.8584 12.6011 13.0458 8.93521 12.7684 4.31459V3.46277H17.5519C17.551 3.48603 17.551 3.5093 17.551 3.53256C17.551 5.75429 19.3271 7.56084 21.5372 7.60826Z" fill="url(#paint0_linear_4111_383)"/><path d="M12.0526 3.81978C12.0526 8.62651 8.23281 12.5394 3.46277 12.6906V7.64673C5.5807 7.49999 7.25303 5.7355 7.25303 3.57998C7.25303 3.54061 7.25214 3.50214 7.25124 3.46277H12.0446C12.0499 3.58088 12.0526 3.69988 12.0526 3.81978Z" fill="url(#paint1_linear_4111_383)"/><path d="M11.9918 21.5372H7.19219C6.95418 19.6286 5.39727 18.1299 3.46277 17.9823V13.4171C7.96885 13.5728 11.6204 17.0884 11.9918 21.5372Z" fill="url(#paint2_linear_4111_383)"/><path d="M21.5372 13.4422V18.002C19.5168 18.0539 17.8633 19.575 17.6038 21.5372H12.8024C13.1943 17.0356 16.947 13.4959 21.5372 13.4422Z" fill="url(#paint3_linear_4111_383)"/></g><defs><linearGradient id="paint0_linear_4111_383" x1="21.5372" y1="3.46277" x2="8.68422" y2="12.3572" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint1_linear_4111_383" x1="12.0526" y1="3.46277" x2="-0.743185" y2="12.0957" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint2_linear_4111_383" x1="11.9918" y1="13.4171" x2="0.286928" y2="22.3277" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint3_linear_4111_383" x1="21.5372" y1="13.4422" x2="9.78852" y2="22.6304" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><clipPath id="clip0_4111_383"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>),
        plan : "Team Plan",
        price : "$19.99",
        tariff : "/ month",
        button : "Start Free Trial",
        features: [
            "Everything in the Individual Plan",
            "Unlimited cloud storage",
            "Advanced integrations",
            "Team management and permissions",
            "Shared templates and note libraries",
        ],
    },
    {
        icon : (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4111_420)"><path d="M21.3663 0.0447388H3.63362C1.6515 0.0447388 0.0446777 1.65156 0.0446777 3.63368V21.3663C0.0446777 23.3484 1.6515 24.9553 3.63362 24.9553H21.3663C23.3484 24.9553 24.9552 23.3484 24.9552 21.3663V3.63368C24.9552 1.65156 23.3484 0.0447388 21.3663 0.0447388Z" stroke="#048C80" stroke-miterlimit="10"/><path d="M21.4478 12.4669V12.4714H18.648V12.3998C18.648 9.07211 15.9503 6.37436 12.6235 6.37436C12.5877 6.37436 12.5519 6.37436 12.5161 6.37526V3.55225C17.4392 3.56119 21.4299 7.54563 21.4478 12.4669Z" fill="url(#paint0_linear_4111_420)"/><path d="M21.446 12.356C21.446 12.3005 21.4433 12.2459 21.4424 12.1904C21.4442 12.2459 21.4451 12.3005 21.446 12.356Z" fill="url(#paint1_linear_4111_420)"/><path d="M21.4405 12.1457C21.4388 12.0786 21.4334 12.0124 21.4298 11.9453C21.4298 11.9551 21.4316 11.964 21.4316 11.9739C21.4361 12.0312 21.4388 12.0884 21.4405 12.1457Z" fill="url(#paint2_linear_4111_420)"/><path d="M21.4039 11.6177C21.4039 11.6177 21.4039 11.6159 21.4039 11.6151C21.4057 11.6383 21.4093 11.6625 21.4111 11.6857C21.4102 11.6714 21.4084 11.658 21.4066 11.6446C21.4057 11.6356 21.4048 11.6267 21.4039 11.6177Z" fill="url(#paint3_linear_4111_420)"/><path d="M21.4039 11.615C21.4003 11.5739 21.3949 11.5336 21.3914 11.4933C21.394 11.5112 21.3958 11.5282 21.3985 11.5461C21.4012 11.5694 21.403 11.5918 21.4048 11.615H21.4039Z" fill="url(#paint4_linear_4111_420)"/><path d="M21.4119 11.7C21.4119 11.6947 21.411 11.6902 21.411 11.6857C21.4137 11.7045 21.4155 11.7233 21.4164 11.7421C21.4173 11.7537 21.4182 11.7645 21.4182 11.7761C21.4164 11.751 21.4146 11.7251 21.4119 11.7Z" fill="url(#paint5_linear_4111_420)"/><path d="M21.3413 11.1167C21.3404 11.1104 21.3395 11.1042 21.3386 11.0979C21.3386 11.1024 21.3404 11.1068 21.3404 11.1104C21.3404 11.1122 21.3404 11.114 21.3404 11.1167H21.3413Z" fill="url(#paint6_linear_4111_420)"/><path d="M21.3413 11.1194C21.3413 11.1194 21.3413 11.1176 21.3413 11.1167C21.3503 11.1775 21.361 11.2384 21.3682 11.3001V11.3037C21.3592 11.242 21.3512 11.1811 21.3413 11.1194Z" fill="url(#paint7_linear_4111_420)"/><path d="M21.4477 12.4669C21.4477 12.4293 21.4468 12.3926 21.4459 12.356C21.4459 12.3819 21.4477 12.407 21.4477 12.4329V12.4669Z" fill="url(#paint8_linear_4111_420)"/><path d="M21.4478 21.4191V21.4478H18.6471C18.648 21.4272 18.648 21.4066 18.648 21.386C18.648 20.6621 18.5201 19.9678 18.2856 19.3245C18.2803 19.3075 18.274 19.2905 18.2668 19.2734C17.9286 18.3679 17.3774 17.5653 16.675 16.9265C16.6625 16.9148 16.65 16.9041 16.6374 16.8934C15.5718 15.9404 14.1652 15.3606 12.6235 15.3606C12.5877 15.3606 12.5519 15.3606 12.5161 15.3615V12.4714C14.6985 12.475 16.6974 13.2606 18.248 14.5625C18.2543 14.5669 18.2606 14.5723 18.2668 14.5786C19.0515 15.2398 19.7208 16.0344 20.2389 16.9265C20.2461 16.9372 20.2523 16.9479 20.2586 16.9596C21.0156 18.2722 21.4478 19.7951 21.4478 21.4191Z" fill="url(#paint9_linear_4111_420)"/><path d="M12.5 12.4669V12.4714H9.70024V12.4329C9.70024 10.8885 9.11864 9.48102 8.16391 8.41445C8.15407 8.40282 8.14423 8.39208 8.13439 8.38134C7.4642 7.64405 6.61327 7.07408 5.65228 6.74122C5.63797 6.73496 5.62365 6.73049 5.60844 6.72512C5.00178 6.52021 4.35217 6.40837 3.67573 6.40837C3.63457 6.40837 3.59341 6.40837 3.55225 6.41016V3.55225H4.31907C5.6496 3.66409 6.89691 4.06853 7.99749 4.70024C8.01717 4.71098 8.03596 4.72172 8.05475 4.73335C8.97189 5.26842 9.78524 5.96187 10.4581 6.77612C10.4715 6.79312 10.485 6.81012 10.4993 6.82712C11.7502 8.36524 12.5 10.3284 12.5 12.4669Z" fill="url(#paint10_linear_4111_420)"/><path d="M12.5161 18.4905V21.3806H12.5C10.8822 21.3806 9.36377 20.9512 8.05471 20.1995C7.65743 19.9723 7.27894 19.7146 6.92282 19.43C6.44143 19.0462 6.0012 18.614 5.60929 18.1407C5.29433 17.7613 5.00979 17.3551 4.76105 16.9265C3.9978 15.6165 3.55936 14.0954 3.5531 12.4714H6.59802C6.59802 13.1541 6.71255 13.8109 6.92282 14.422C7.18678 15.1924 7.60196 15.8921 8.13435 16.4853C8.27214 16.6392 8.41799 16.7869 8.571 16.9265C9.12844 17.432 9.78073 17.8355 10.4992 18.1058C11.1283 18.3438 11.8074 18.478 12.5161 18.4905Z" fill="url(#paint11_linear_4111_420)"/></g><defs><linearGradient id="paint0_linear_4111_420" x1="21.4478" y1="3.55225" x2="8.76675" y2="12.7561" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint1_linear_4111_420" x1="21.446" y1="12.1904" x2="21.4382" y2="12.1906" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint2_linear_4111_420" x1="21.4405" y1="11.9453" x2="21.4173" y2="11.9462" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint3_linear_4111_420" x1="21.4111" y1="11.6151" x2="21.3957" y2="11.6162" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint4_linear_4111_420" x1="21.4048" y1="11.4933" x2="21.3759" y2="11.4957" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint5_linear_4111_420" x1="21.4182" y1="11.6857" x2="21.4027" y2="11.6866" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint6_linear_4111_420" x1="21.3413" y1="11.0979" x2="21.3356" y2="11.0985" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint7_linear_4111_420" x1="21.3682" y1="11.1167" x2="21.3106" y2="11.1227" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint8_linear_4111_420" x1="21.4477" y1="12.356" x2="21.4438" y2="12.356" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint9_linear_4111_420" x1="21.4478" y1="12.4714" x2="8.71086" y2="21.6568" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint10_linear_4111_420" x1="12.5" y1="3.55225" x2="-0.188073" y2="12.7778" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint11_linear_4111_420" x1="12.5161" y1="12.4714" x2="-0.168915" y2="21.7206" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><clipPath id="clip0_4111_420"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>),
        plan : "Enterprise Plan",
        price : "Custom",
        tariff : "",
        button : "Contact support",
        features: [
            "Everything in the Team Plan",
            "Dedicated account manager",
            "Enterprise-grade security",
            "Customized onboarding",
            "Advanced analytics",
        ],
    },

]

const YearlyCards = [
    {
        icon : (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4111_350)"><path d="M21.3663 0.0447388H3.63368C1.65156 0.0447388 0.0447388 1.65156 0.0447388 3.63368V21.3663C0.0447388 23.3484 1.65156 24.9553 3.63368 24.9553H21.3663C23.3484 24.9553 24.9553 23.3484 24.9553 21.3663V3.63368C24.9553 1.65156 23.3484 0.0447388 21.3663 0.0447388Z" stroke="#048C80" stroke-miterlimit="10"/><path d="M13.2364 19.4417C13.7428 18.0342 14.5598 16.7099 15.6863 15.5772L15.7069 15.5566C16.8352 14.4283 18.1532 13.6095 19.5553 13.0986C20.4286 12.781 21.3341 12.5823 22.2459 12.5045C21.3368 12.4544 20.434 12.2835 19.5633 11.9936C18.1022 11.5086 16.7332 10.6863 15.5735 9.52669C14.4148 8.36796 13.5916 6.99716 13.1066 5.53689C12.7953 4.60096 12.6226 3.62744 12.5877 2.64856L12.5501 2.68614C12.483 3.65787 12.2799 4.62243 11.9417 5.55031C11.4325 6.94616 10.6156 8.25969 9.49355 9.38532L9.48549 9.39337C8.36434 10.5145 7.05439 11.3315 5.66123 11.8424C4.72708 12.1851 3.75625 12.39 2.77826 12.458L2.76663 12.4696C3.74373 12.5045 4.71456 12.6772 5.6487 12.9868C7.11076 13.4726 8.48335 14.2949 9.64387 15.4564C10.8053 16.6178 11.6267 17.9886 12.1126 19.4515C12.423 20.3857 12.5957 21.3565 12.6306 22.3336L12.6369 22.3273C12.6986 21.3493 12.8982 20.3767 13.2346 19.4408L13.2364 19.4417Z" fill="url(#paint0_linear_4111_350)"/></g><defs><linearGradient id="paint0_linear_4111_350" x1="22.2459" y1="2.64856" x2="-5.63695" y2="22.6462" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><clipPath id="clip0_4111_350"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>),
        plan: "Individual Plan",
        price: "$99.99",
        tariff: "/ year",
        button: "Start Free Trial",
        features: [
            "Unlimited notes and documents",
            "AI-powered note summaries",
            "Access across all devices",
            "Advanced search and filters",
            "Personal cloud storage",
        ],
    },
    {
        icon : (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4111_383)"><path d="M21.3663 0.0447388H3.63368C1.65156 0.0447388 0.0447388 1.65156 0.0447388 3.63368V21.3663C0.0447388 23.3484 1.65156 24.9553 3.63368 24.9553H21.3663C23.3484 24.9553 24.9553 23.3484 24.9553 21.3663V3.63368C24.9553 1.65156 23.3484 0.0447388 21.3663 0.0447388Z" stroke="#048C80" stroke-miterlimit="10"/><path d="M21.5372 7.60826V12.6467C16.8584 12.6011 13.0458 8.93521 12.7684 4.31459V3.46277H17.5519C17.551 3.48603 17.551 3.5093 17.551 3.53256C17.551 5.75429 19.3271 7.56084 21.5372 7.60826Z" fill="url(#paint0_linear_4111_383)"/><path d="M12.0526 3.81978C12.0526 8.62651 8.23281 12.5394 3.46277 12.6906V7.64673C5.5807 7.49999 7.25303 5.7355 7.25303 3.57998C7.25303 3.54061 7.25214 3.50214 7.25124 3.46277H12.0446C12.0499 3.58088 12.0526 3.69988 12.0526 3.81978Z" fill="url(#paint1_linear_4111_383)"/><path d="M11.9918 21.5372H7.19219C6.95418 19.6286 5.39727 18.1299 3.46277 17.9823V13.4171C7.96885 13.5728 11.6204 17.0884 11.9918 21.5372Z" fill="url(#paint2_linear_4111_383)"/><path d="M21.5372 13.4422V18.002C19.5168 18.0539 17.8633 19.575 17.6038 21.5372H12.8024C13.1943 17.0356 16.947 13.4959 21.5372 13.4422Z" fill="url(#paint3_linear_4111_383)"/></g><defs><linearGradient id="paint0_linear_4111_383" x1="21.5372" y1="3.46277" x2="8.68422" y2="12.3572" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint1_linear_4111_383" x1="12.0526" y1="3.46277" x2="-0.743185" y2="12.0957" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint2_linear_4111_383" x1="11.9918" y1="13.4171" x2="0.286928" y2="22.3277" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><linearGradient id="paint3_linear_4111_383" x1="21.5372" y1="13.4422" x2="9.78852" y2="22.6304" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient><clipPath id="clip0_4111_383"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>),
        plan: "Team Plan",
        price: "$119.99",
        tariff: "/ year",
        button: "Start Free Trial",
        features: [
            "Everything in Individual",
            "Real-time team collaboration",
            "Shared workspaces and folders",
            "Team activity and permissions",
            "Priority support",
        ],
    },

];



export default function Pricing() {
    const [isYearly, setYearly] = useState<boolean>(false);
    const displayedCards = isYearly ? YearlyCards : Cards;
    return(
        <section id="pricing"
            className = "bg-[#080808] w-full py-24 max-md:py-16 px-36 max-md:px-5 flex flex-col items-center justify-center gap-10">

            <div className = "flex flex-col items-center justify-center gap-3">
                <h1 className="font-['DM_Sans'] font-bold text-5xl max-md:text-3xl leading-[120%] max-md:leading-[130%] max-md:tracking-[-1%] text-[#EFECE6]"><span className="bg-linear-to-tr from-[#AAD9D1] to-[#017373] bg-clip-text text-transparent">Pricing</span> & Plans</h1>
                <p className = "max-w-106.5 font-['DM_Sans'] font-normal text-base max-md:text-sm leading-[150%] text-[#BABABA] text-center">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>

            <div className = "flex items-center justify-center gap-3.5">
                <p className = {`font-['DM_Sans'] font-normal text-lg max-md:text-sm leading-[150%] ${isYearly ? "text-[#BABABA]" : "text-[#EFECE6]" }`}>Monthly</p>
                <Toggle
                    isActived = {isYearly}
                    setActived = {setYearly}
                />
                <p className={`font-['DM_Sans'] font-normal text-lg max-md:text-sm leading-[150%] text-[#BABABA] ${isYearly ? "text-[#EFECE6]" : "text-[#BABABA]"}`}>Yearly</p>
                <span className = "px-4 py-2 rounded-[40px] bg-linear-to-tr from-[#AAD9D1] to-[#017373]"><p className = "font-['DM_Sans'] font-normal text-sm leading-[150%] text-[#080808]">Save 25%</p></span>
            </div>

            <div className = {`grid gap-10 justify-center max-md:grid-cols-1 ${isYearly ? "grid-cols-2" : "grid-cols-3"}`}>
                {displayedCards.map((card, index)=>(
                    <div key={index} className = {`group px-8 py-10 flex flex-col  justify-center gap-8 rounded-[10px] border-2 border-[#048C80] bg-[#F7F7F7] hover:bg-[#080808] transition-transform duration-200 hover:scale-105 `}>
                        <div className = "flex items-center gap-2">
                            <span>{card.icon}</span>
                            <p className = "font-['DM_Sans'] font-normal text-sm leading-[150%] text-[#048C80]">{card.plan}</p>
                        </div>

                        <div className = "flex items-center gap-1">
                            <p className = "font-['DM_Sans'] font-bold text-5xl max-md:text-[40px] leading-[120%] text-[#080808] group-hover:text-[#F7F7F7]">{card.price}</p>
                            <p className = "font-['DM_Sans'] font-normal text-base leading-[150%] text-[#333333] group-hover:text-[#048C80]">{card.tariff}</p>
                        </div>

                        <div className = "flex flex-col gap-4">
                            {card.features.map((feature, index)=>(
                                <div key={index} className = "flex items-center gap-2">
                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.20704 11.7692C5.91354 11.7692 5.62062 11.659 5.39648 11.4381L0 6.11882L1.62112 4.52032L6.20704 9.04065L15.3789 0L17 1.5985L7.0176 11.4381C6.79347 11.659 6.50054 11.7692 6.20704 11.7692Z" fill="url(#paint0_linear_4111_359)"/><defs><linearGradient id="paint0_linear_4111_359" x1="17" y1="0" x2="-0.581486" y2="18.4061" gradientUnits="userSpaceOnUse"><stop stop-color="#AAD9D1"/><stop offset="1" stop-color="#017373"/></linearGradient></defs></svg>
                                    <p className = "font-['DM_Sans'] font-normal text-base max-md:text-sm leading-[150%] text-[#333333] group-hover:text-[#BABABA]">{feature}</p>
                                </div>
                            ))}
                        </div>

                        <div className = "flex flex-col gap-2">
                            <button className = "flex items-center gap-2 py-4 px-25 max-md:px-15 rounded-lg bg-[#EFECE6] border border-[#048C80] group-hover:bg-linear-to-tr from-[#AAD9D1] to-[#017373]">
                                <p className = "font-['DM_Sans'] font-normal text-lg max-md:text-base leading-[150%] text-[#080808]">{card.button}</p>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="26" height="26" rx="5.5" stroke="#333333"/>
                                    <path d="M7.43158 7.24185V10.5532H13.7359V7.24185H7.43158Z" fill="#333333"/>
                                    <path d="M17.0478 7.24164L13.7362 10.5532L13.735 10.5544L13.3062 10.5544L13.3062 10.9833L6.15444 18.135L8.49534 20.4759L16.0771 12.8941L16.0789 19.1773L19.3899 19.1767V10.5538L19.3881 9.58313L19.3887 9.58254V7.24343L19.3869 7.24164L17.0478 7.24164Z" fill="#333333"/>
                                </svg>
                            </button>

                            {index < 2 && (
                                <p className = "text-center font-['DM_Sans'] font-normal text-xs leading-[150%] text-[#737373]">No credit card required</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}