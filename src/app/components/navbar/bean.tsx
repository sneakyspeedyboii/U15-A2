import styles from './bean.module.css';

export default function Home() {
    return (
        <svg viewBox="0 0 438 457" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.bean}>
            <path d="M331.324 92.9326C171.324 112.933 268.324 328.933 105.324 369.933" stroke="black" stroke-width="25" />
            <g filter="url(#filter0_d_1_9)">
                <path d="M307.419 300.175C275.461 339.639 236.304 366.353 199.352 378.041C162.288 389.764 129.022 386.043 106.175 367.542C83.3287 349.041 72.7722 317.275 76.5334 278.584C80.2832 240.01 98.2719 196.154 130.229 156.69C162.186 117.226 201.344 90.5122 238.295 78.8244C275.359 67.101 308.625 70.8224 331.472 89.3234C354.319 107.824 364.876 139.59 361.114 178.281C357.365 216.855 339.376 260.711 307.419 300.175Z" stroke="black" stroke-width="25" shape-rendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_1_9" x="59.2925" y="59.6213" width="319.063" height="345.622" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

    )
}
