import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Icon from '../app/icons/Icon'
import { iRepo } from "../app/types/interfaces"

type Props = {
    photos: {
        photos: iRepo[]
    }
}


export default function Home({ photos }: Props) {

    useEffect(() => {
        console.log(photos);
        
    }, [photos])
  return (
    <>
        <div className={styles.main}>
            <div className="container">
                <div className={styles.main__text}>
                    <h1>Explore the world with a smile</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,</span>
                </div>
                <div className={styles.main__search}>
                    <input type="text" placeholder='City or Destination' />
                    <input type="date" placeholder='Date of stay' />
                    <input type="text" placeholder='Person' />
                    <button>
                        Find Trip Now 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2635 20.526C12.5407 20.5255 14.7523 19.7632 16.5461 18.3605L22.1859 24L24 22.186L18.3602 16.5465C19.7637 14.7526 20.5265 12.5407 20.5271 10.263C20.5271 4.60423 15.9226 0 10.2635 0C4.60448 0 0 4.60423 0 10.263C0 15.9217 4.60448 20.526 10.2635 20.526ZM10.2635 2.56575C14.5088 2.56575 17.9612 6.01796 17.9612 10.263C17.9612 14.508 14.5088 17.9602 10.2635 17.9602C6.01828 17.9602 2.56588 14.508 2.56588 10.263C2.56588 6.01796 6.01828 2.56575 10.2635 2.56575Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.travel}>
            <div className="container">
                <div className={styles.travelers}>
                    <div className={styles.travelers__image}>
                        {
                            photos?.photos.slice(9, 12).map((photo, index) => 
                                <img key={index} src={photo.src.original} />
                            )
                        }
                    </div>
                    <div className={styles.travelers__description}>
                        <h6>Travelers Point</h6>
                        <h3>We help to find your dream place</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi</span>
                        <div className={styles.travelers__description__grade}>
                            <div className={styles.travelers__description__grade__element}>
                                <h3>100+</h3>
                                <span>Holiday Package</span>
                            </div>
                            <div className={styles.travelers__description__grade__element}>
                                <h3>172</h3>
                                <span>Hotels</span>
                            </div>
                            <div className={styles.travelers__description__grade__element}>
                                <h3>68</h3>
                                <span>Elite Transportation</span>
                            </div>
                            <div className={styles.travelers__description__grade__element}>
                                <h3>32M+</h3>
                                <span>we help to find your dream place</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className={styles.destination}>
            <div className="container">
                <div className={styles.destinations}>
                    <h6>Top Destination</h6>
                    <h3>Discover your love</h3>
                    <div className={styles.destinations__posts}>
                        {
                            [...Array(6)].map((e, index) => 
                                <div key={index} className={styles.destinations__posts__element}>
                                    <img src={photos?.photos[index].src.original} />
                                    <div className={styles.destinations__posts__element__description}>
                                        <h4>{photos?.photos[index].photographer}</h4>
                                        <div className={styles.destinations__posts__element__description__bottom}>
                                            <h4>Rp. 7,5jt</h4>
                                            <div className={styles.destinations__posts__element__description__bottom__date}>
                                                <Icon />
                                                7 days for trips
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
        <div className={styles.testimonial}>
            <div className="container">
                <div className={styles.aboutus}>
                    <h6>Testimonial</h6>
                    <h3>What they say about us</h3>
                    <div className={styles.aboutus__comments}>
                        {
                            [...Array(6)].map((e, index) => 
                                <div className={styles.aboutus__comments__element} key={index}>
                                    <div className={styles.aboutus__comments__element__profile}>
                                        <img src="https://webusupload.apowersoft.info/picwishcom/wp-content/uploads/2021/11/unblur-image.jpg" />
                                        <h4>Angelina Simple</h4>
                                    </div>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                                    </span>
                                </div>
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
  
    const res = await fetch("https://api.pexels.com/v1/curated",{
        headers: {
            Authorization: '563492ad6f91700001000001276a127c75554a839acb4d1c3133506b'
        }
    });

    const photos = await res.json()

    return {
      props: { photos },
    };
  
};