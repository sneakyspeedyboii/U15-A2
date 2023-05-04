"use client"

import styles from './page.module.css'
import React from '../../public/home/slider/react.png';
import Vue from '../../public/home/slider/vue.png';
import Angular from '../../public/home/slider/angular.png';
import Svelte from '../../public/home/slider/svelte.png';
import Solid from '../../public/home/slider/solid.png';

import Stripe from '../../public/home/cards/stripe.png';
import NextJS from '../../public/home/cards/nextjs.png';
import Turbo from '../../public/home/cards/turbo.png';

import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Variants, motion } from "framer-motion"

const animation = { duration: 15000, easing: (t: number) => t }

const card1: Variants = {
  offscreen: {
    y: "100%",
    x: "50%",
    opacity: "0"
  },
  onscreen: {
    y: "50%",
    x: "5%",
    rotate: -20,
    opacity: "100%",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
};

const card2: Variants = {
  offscreen: {
    y: "100%",
    x: "70%",
    opacity: "0"
  },
  onscreen: {
    y: "20%",
    x: "70%",
    rotate: 0,
    opacity: "100%",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
};

const card3: Variants = {
  offscreen: {
    y: "100%",
    x: "100%",
    opacity: "0"
  },
  onscreen: {
    y: "40%",
    x: "135%",
    rotate: 40,
    opacity: "100%",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
};

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    }, slides: {
      perView: "auto",
      spacing: 15,
    },
    renderMode: "precision",
  });

  return (
    <main className={styles.main}>
      <div className={styles.header_container}>
        <span className={styles.gradient}></span>
        <div className={styles.container}>
          <div className={styles.first_container}>
            <div className={styles.name}>Hot Beans</div>
            <div className={styles.header}>Next Generation Web Services</div>
          </div>
          <div>
            <div className={styles.sub_header}>Websites which keep up with you.</div>
            <div className={styles.sub_header}>A better way to showcase your company.</div>
          </div>
          <div className={styles.link_container}>
            <Link className={styles.link} href={"/"}>Meet the team</Link>
            <Link className={styles.link} href={"/"}>Opportunities here</Link>
          </div>
        </div>
      </div>

      <div className={styles.info_container}>
        <div className={styles.divider_container}>
          <div className={styles.divider}></div>
          <div className={styles.left_glow}></div>
        </div>

        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.header}>Focusing on your needs</div>
            <div className={styles.sub_header}>You, the client, dictate all the needs. All of them.</div>

            <div className={styles.body}>Not only do you get hands on control on the style, you also get to choose how we develop the site.</div>
            <div className={styles.body}>On request, you choose the framework we use to make your website.</div>


          </div>
          <div className={styles.right}>
            <div ref={sliderRef} className="keen-slider">
              <div className={`${styles.slide} keen-slider__slide`}><div className={styles.react}><Image src={React} alt={"react"} fill={true}></Image></div></div>
              <div className={`${styles.slide} keen-slider__slide`}><div className={styles.vue}><Image src={Vue} alt={"vue"} fill={true}></Image></div></div>
              <div className={`${styles.slide} keen-slider__slide`}><div className={styles.angular}><Image src={Angular} alt={"angular"} fill={true}></Image></div></div>
              <div className={`${styles.slide} keen-slider__slide`}><div className={styles.svelte}><Image src={Svelte} alt={"svelte"} fill={true}></Image></div></div>
              <div className={`${styles.slide} keen-slider__slide`}><div className={styles.solid}><Image src={Solid} alt={"solid"} fill={true}></Image></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info2_container}>
        <div className={styles.divider_container}>
          <div className={styles.divider}></div>
          <div className={styles.left_glow}></div>
        </div>

        <div className={styles.info2}>
          <div className={styles.left}>
            <motion.div
              className={styles.effect_container}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
            >
              <motion.div className={styles.card} variants={card1}>
                <div className={styles.next}>
                  <Image src={NextJS} alt='NextJS' fill={true} />
                </div>
              </motion.div>
              <motion.div className={styles.card} variants={card2}>
                <div className={styles.stripe}>
                  <Image src={Stripe} alt='Stripe' fill={true} />
                </div>
              </motion.div>
              <motion.div className={styles.card} variants={card3}>
                <div className={styles.turbo}>
                  <Image src={Turbo} alt='Turbo' fill={true} />
                </div>
              </motion.div>

            </motion.div>
          </div>

          <div className={styles.right}>
            <div className={styles.header}>The #1 Trusted Company</div>
            <div className={styles.sub_header}>Rest easy knowing the outcome will be perfect!</div>

            <div className={styles.body}>Here, at Hot Beans Web Development, we have built, tested, and deployed websites for some of the biggest industries out there.</div>

          </div>
        </div>
      </div>

    </main>
  )
}
