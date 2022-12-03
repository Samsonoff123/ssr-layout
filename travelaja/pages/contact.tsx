import React from 'react'
import styles from '../styles/Contact.module.css'
import img from '../images/Contact.png'

type Props = {}

export default function contact({}: Props) {
  return (
    <>
        <div className='banner' style={{background: 'url("'+ img.src +'")50% 50% no-repeat'}}>
            <div className="container">
                <h1>Contact Us</h1>
            </div>
        </div>

        <div className={styles.address}>
            <div className="container">
                <div className={styles.address__main}>
                    <div className={styles.address__main__left}>
                        <h3>Get in touch</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</span>
                        <form>
                            <label>Name :</label>
                            <input type="text" />
                            <label>Email :</label>
                            <input type="email" />
                            <label>Message :</label>
                            <textarea rows={5}></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                    <div className={styles.address__main__right}>
                        <iframe className={styles.address__main__right__map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d80104.19523855193!2d71.50255409109151!3d51.140628269486484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1670003272562!5m2!1sru!2skz" width="600" height="450"  loading="lazy"></iframe>
                        <div className={styles.address__main__right__info}>
                            <div className={styles.address__main__right__info__element}>
                                <b>Address :</b>
                                <span>JL.Cindelaras No.205A</span>
                            </div>
                            <div className={styles.address__main__right__info__element}>
                                <b>Phone :</b>
                                <span>+62 1234 432 567</span>
                            </div>
                            <div className={styles.address__main__right__info__element}>
                                <b>City :</b>
                                <span>Yogyakarta, Indonesia</span>
                            </div>
                            <div className={styles.address__main__right__info__element}>
                                <b>Email :</b>
                                <span>info@travelaja.com</span>
                            </div>
                            <div className={styles.address__main__right__info__element}>
                                <b>Open :</b>
                                <span>At 8AM</span>
                            </div>
                            <div className={styles.address__main__right__info__element}>
                                <b>Close :</b>
                                <span>At 8PM</span>
                            </div>
                        </div>
                        <div className={styles.address__main__right__available}>
                            <span>AVAILABLE AT 9AM - 10PM</span>
                            <h2>+124 4537 9756</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}