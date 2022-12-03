import Link from 'next/link'
import React from 'react'
import styles from '../styles/Discover.module.css'
import img from '../images/Discover.png'

type Props = {
    photos: {
        photos: iRepo[]
    }
}

interface iRepo {
    src: {
        original: string
    },
    photographer: string
}

export default function discover({photos}: Props) {
  return (
    <>
        <div className='banner' style={{background: 'url("'+ img.src +'")50% 50% no-repeat'}}>
            <div className="container">
                <h1>Discover</h1>
            </div>
        </div>
        <div className={styles.main__text}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content__left}>
                        <h1>D</h1>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi.
                            <br />enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla fau.
                        </span>
                    </div>
                    <div className={styles.content__rigth}>
                        <iframe className={styles.content__rigth__map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d80104.19523855193!2d71.50255409109151!3d51.140628269486484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1670003272562!5m2!1sru!2skz" width="600" height="450"  loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content__left}>
                        <img src={photos?.photos[0].src.original} />
                        <h3>memorable festivals on bali beach</h3>
                        <div className={styles.content__lefl__adress}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="#295943"/>
                            </svg>
                            Bali, Indonesia
                        </div>
                        <span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie.  
                            </p>
                        </span>
                        <div className={styles.content__left__images}>
                            <img src={photos?.photos[1].src.original} />
                            <img src={photos?.photos[2].src.original} />
                        </div>
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.
                        </span>
                    </div>
                    <div className={styles.content__rigth}>
                        <div className={styles.content__rigth__other}>
                            <h4>Other Destinations</h4>
                            <Link href="/">See all</Link>
                        </div>
                        {
                            photos?.photos.slice(5, 9).map((e, index) => 
                                <div key={index} className={styles.content__rigth__element} style={{background: `url("${e.src.original}") 50% 50% no-repeat`}}>
                                    <h6>Wakatobi beach is a paradise for coral reets in indonesia</h6>
                                    <span>Yogyakarta, Indonesia</span>
                                    <div>
                                        <Link href="/">View More</Link>
                                    </div>
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
  
    const res = await fetch("https://api.pexels.com/v1/curated?page=2",{
        headers: {
            Authorization: '563492ad6f91700001000001276a127c75554a839acb4d1c3133506b'
        }
    });

    const photos = await res.json()

    return {
      props: { photos },
    };
  
  };