import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import ServiceImage from '../../images/service.svg';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function ContactForm({ text, icon }) {

   const [name, setName] = useState("Pinki Paul");
   const [email, setEmail] = useState("pinki371@gmail.com");
   const [texts, setTexts] = useState("Hello from server side");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setTexts(event.target[2].value);

        console.log("Name : " + name);
        console.log("Email : " + email);
        console.log("Text : " + texts);
    }




    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />

                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={24} />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMessage fontSize={24} />} />


                <form onSubmit={onSubmit}>

                    <div className={styles.form_controller}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>

                    <div className={styles.form_controller}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>

                    <div className={styles.form_controller}>
                        <label htmlFor="text">TEXT</label>
                        <textarea cols={4} rows={8} name='text' />
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginRight: 11.5 + "px" }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                    <div>
                      <h1>  {name + " | " + email + " | " + texts + " | "}  </h1>
                    </div>


                </form>

            </div>
            <div className={styles.contact_image}>
                <img src={ServiceImage} alt="service image" />
            </div>

           
        </section>
    )
}