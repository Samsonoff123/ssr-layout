import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

export default function Header({}: Props) {
    const [whiteHeader, setWhiteHeader] = useState(false)
    const [burgerIsActive, setBurgerIsActive] = useState(false)
    const router = useRouter()
    const query = router.route
    const elementLink = styles.header__main__elements__link;
    const elementLinkActive = styles.header__main__elements__link + ' ' + styles._active;
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setWhiteHeader(true)
            } else {
                setWhiteHeader(false)
            }
        }
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

  return (
    <div className={whiteHeader ? styles.header__white :styles.header}>
        <div className="container">
            <div className={styles.header__main}>
                <div className={styles.header__main__logo}>travelaja</div>
                <div className={burgerIsActive ? styles.header__main__elements + ' ' + styles._active  : styles.header__main__elements}>
                    <Link className={query === '/home' ? elementLinkActive :  elementLink} href="/home">Home</Link>
                    <Link className={query === '/discover' ? elementLinkActive :  elementLink} href="/discover">Discover</Link>
                    <Link className={query === '/services' ? elementLinkActive :  elementLink} href="/services">Services</Link>
                    <Link className={query === '/news' ? elementLinkActive :  elementLink} href="/news">News</Link>
                    <Link className={query === '/about' ? elementLinkActive :  elementLink} href="/about">About Us</Link>
                    <Link className={query === '/contact' ? elementLinkActive :  elementLink} href="/contact">Contact</Link>
                </div>
                <div className={styles.header__main__language}>
                    <select>
                        <option value="kz">KZ</option>
                        <option value="ru">RU</option>
                        <option value="eng">ENG</option>
                    </select>
                    <div className={burgerIsActive ? styles.burger + ' ' + styles._active : styles.burger} onClick={e => burgerIsActive ? setBurgerIsActive(false) : setBurgerIsActive(true)}>
                        <div className={styles.burger__line}></div>
                        <div className={styles.burger__line}></div>
                        <div className={styles.burger__line}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}