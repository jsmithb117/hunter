import React from "react";
import styles from "./InjectionSVG.module.css";

const InjectionSVG = (props) => {
  const { text } = props;
  return (
    <div className={styles.outer}>
      <div className={styles.svg}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15000 15000"
        width="24px"
        >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          x="100"
          y="100"
          width="10%"
          length="10%"
          fill="green"
          stroke="none"
          >
          <path d="M8952 12530 c-98 -21 -186 -91 -234 -189 -18 -37 -22 -63 -23 -131 0 -154 -25 -123 519 -668 l481 -482 -853 -853 -852 -852 -667 666 c-761 758 -706 714 -873 714 -85 0 -101 -3 -154 -29 -76 -37 -140 -101 -174 -174 -24 -50 -27 -70 -27 -157 0 -171 -24 -140 561 -726 l505 -505 -738 -730 c-406 -401 -1453 -1435 -2328 -2298 -875 -863 -1736 -1715 -1914 -1892 l-325 -322 118 -884 c64 -485 119 -892 121 -903 4 -16 -218 -242 -1040 -1064 -574 -575 -1044 -1046 -1042 -1046 1 -1 138 23 305 54 l303 57 877 876 877 877 840 -130 c462 -71 850 -129 862 -129 21 0 226 202 4233 4159 1125 1111 1115 1101 1125 1101 6 0 230 -220 500 -490 562 -563 540 -545 700 -545 77 0 98 4 147 27 79 37 142 98 181 177 29 60 32 73 32 161 -1 164 36 119 -717 869 -362 360 -658 659 -658 665 0 6 381 392 847 858 l848 848 480 -478 c543 -542 524 -526 670 -527 102 0 171 31 244 110 82 91 107 214 67 335 -18 53 -83 120 -1785 1823 -1565 1567 -1773 1771 -1826 1797 -67 33 -146 44 -213 30z m1211 -3632 c-467 -467 -852 -848 -858 -848 -5 0 -234 224 -507 497 l-498 498 852 852 853 853 502 -502 503 -503 -847 -847z m-1425 -1324 c204 -204 372 -376 372 -381 0 -12 -392 -401 -2740 -2718 -1108 -1094 -2108 -2081 -2222 -2194 l-208 -205 -707 108 c-390 59 -710 110 -712 112 -8 7 -191 1399 -189 1429 3 25 92 118 547 568 l545 537 311 -309 c204 -204 323 -315 347 -326 111 -46 235 23 254 141 13 85 5 95 -334 437 l-317 317 90 91 c50 50 139 136 198 191 l108 101 307 -306 c204 -203 319 -311 344 -322 111 -46 235 23 254 141 13 85 5 96 -332 434 l-314 315 195 195 195 195 308 -307 c169 -168 321 -313 339 -322 49 -24 119 -21 169 9 73 43 106 123 84 206 -10 39 -48 80 -323 357 l-312 312 195 195 195 195 310 -309 c170 -171 323 -315 338 -320 143 -54 286 74 247 220 -10 39 -48 80 -321 354 l-309 310 195 195 195 195 308 -307 c169 -169 320 -312 335 -318 143 -53 286 75 247 221 -10 39 -48 81 -320 354 l-308 310 197 192 197 192 300 -300 c164 -165 312 -307 328 -316 46 -24 145 -14 188 19 67 51 91 154 54 228 -10 19 -152 169 -315 333 l-296 298 260 254 260 253 445 -441 c245 -243 613 -609 818 -813z" />
        </g>
      </svg>
          </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

export default InjectionSVG;