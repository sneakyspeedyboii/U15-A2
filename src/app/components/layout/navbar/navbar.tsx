"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.css';
import drawer from './drawer.module.css';

import Invader from '../../../../../public/footer/invader.png'

export default function Layout() {

    const drawer_ref = useRef<HTMLDivElement>(null);
    const line1 = useRef<SVGLineElement>(null);
    const line2 = useRef<SVGLineElement>(null);
    const line3 = useRef<SVGLineElement>(null);

    function toggleDrawer() {
        if (drawer_ref.current != null && line1.current != null && line2.current != null && line3.current != null) {
            if (drawer_ref.current.style.display == "flex") {
                drawer_ref.current.style.display = "none";

                line1.current.style.opacity = "1";
                line2.current.style.transform = "";
                line3.current.style.transform = "";
                
                document.body.style.overflow = "auto";
            } else {
                drawer_ref.current.style.display = "flex";

                line1.current.style.opacity = "0";
                line2.current.style.transform = "translate(6px, 0px) rotate(45deg)";
                line3.current.style.transform = "translate(-11px, 8px) rotate(-45deg)";

                document.body.style.overflow = "hidden";
            }
        }
    }

    return (
        <>
            <nav className={styles.container}>
                <div className={styles.nav_container}>
                    <div className={styles.left}>

                        <svg className={styles.logo} viewBox="0 0 438 457" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M331.324 92.9326C171.324 112.933 268.324 328.933 105.324 369.933" stroke="black" strokeWidth="25" />
                            <g filter="url(#filter0_d_1_9)">
                                <path d="M307.419 300.175C275.461 339.639 236.304 366.353 199.352 378.041C162.288 389.764 129.022 386.043 106.175 367.542C83.3287 349.041 72.7722 317.275 76.5334 278.584C80.2832 240.01 98.2719 196.154 130.229 156.69C162.186 117.226 201.344 90.5122 238.295 78.8244C275.359 67.101 308.625 70.8224 331.472 89.3234C354.319 107.824 364.876 139.59 361.114 178.281C357.365 216.855 339.376 260.711 307.419 300.175Z" stroke="black" strokeWidth="25" shapeRendering="crispEdges" />
                            </g>
                            <defs>
                                <filter id="filter0_d_1_9" x="59.2925" y="59.6213" width="319.063" height="345.622" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_9" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_9" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <div className={styles.title}>Hot Beans</div>
                    </div>
                    <div className={styles.right} onClick={() => toggleDrawer()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line ref={line1} x1="3" y1="12" x2="21" y2="12"></line>
                            <line ref={line2} x1="3" y1="6" x2="21" y2="6"></line>
                            <line ref={line3} x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </nav>

            <div className={drawer.drawer_container} ref={drawer_ref}>
                <div className={drawer.pages}>
                    <div>Pages</div>
                    <div className={drawer.links}>
                        <Link onClick={() => toggleDrawer()} href={"/"}>Home</Link>
                        <Link onClick={() => toggleDrawer()} href={"/employees"}>Employees</Link>
                        <Link onClick={() => toggleDrawer()} href={"/opportunities"}>Opportunities</Link>
                    </div>
                </div>
                <div className={drawer.pages}>
                    <div>Courses</div>
                    <div className={drawer.link}>
                        <Link href={"https://nextjs.org/docs"}>NextJS</Link>
                        <Link href={"https://nextjs.org/docs"}>NextJS</Link>
                        <Link href={"https://nextjs.org/docs"}>NextJS</Link>
                    </div>
                </div>
                <div className={drawer.mark}>
                    <div className={drawer.image_container}><Image src={Invader} alt={"Invader"} fill={true}></Image></div>
                    <Link href={"https://github.com/sneakyspeedyboii/"}>SneakySpeedyBoii</Link>
                </div>
            </div>
        </>
    )
}
