import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/News.module.css'
import { iRepo } from "../app/types/interfaces"

type Props = {
    photos: {
        photos: iRepo[]
    }
}


export default function News({photos}: Props) {
    const [tab, setTab] = useState(3)
    const [data, setData] = useState(photos)

    const handleClick = async(num: number) => {
        setTab(num)
        const req = await fetch(`https://api.pexels.com/v1/curated?page=${num}`,{
            headers: {
                Authorization: '563492ad6f91700001000001276a127c75554a839acb4d1c3133506b'
            }
        });
        const newData = await req.json();
        setData(newData)
    }

  return (
    <>
        <div className='banner' style={{background: 'url("/images/News.png")50% 50% no-repeat'}}>
            <div className="container">
                <h1>Our News</h1>
            </div>
        </div>
        <div className={styles.articles}>
            <div className="container">
                <div className={styles.articles__main}>
                    <h3>Travelaja Articles</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</span>
                    <div className={styles.articles__main__tabs}>
                        <div className={ (tab === 3) ? styles.articles__main__tabs__element + ' ' + styles._active : styles.articles__main__tabs__element } onClick={() => handleClick(3)}>
                            <span>Adventure Travel</span>
                        </div>
                        <div className={(tab === 2) ? styles.articles__main__tabs__element + ' ' + styles._active : styles.articles__main__tabs__element} onClick={() => handleClick(2)}>
                            <span>Beach</span>
                        </div>
                        <div className={(tab === 1) ? styles.articles__main__tabs__element + ' ' + styles._active : styles.articles__main__tabs__element} onClick={() => handleClick(1)}>
                            <span>Explore World</span>
                        </div>
                    </div>
                    <div className={styles.articles__main__content}>
                        {
                            data?.photos.slice(0, 9).map((e, index) => 
                                <Link href="/" key={index} className={styles.articles__main__content__element}>
                                    <img src={e.src.original} />
                                    <h6>{e.photographer}</h6>
                                    <span>September 19, 2022</span>
                                </Link>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export const getStaticProps = async () => {
  
    const res = await fetch("https://api.pexels.com/v1/curated?page=3",{
        headers: {
            Authorization: '563492ad6f91700001000001276a127c75554a839acb4d1c3133506b'
        }
    });

    const photos = await res.json()

    return {
      props: { photos },
    };
  
  };