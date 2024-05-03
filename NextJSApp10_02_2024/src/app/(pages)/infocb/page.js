'use client'
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import appConfig from "@/app/app.config";
import Link from "next/link";
import { useRef } from "react";

export default function main(){
    const l = typeof window !== 'undefined' ? localStorage.getItem('login') : null
    const p = typeof window !== 'undefined' ? localStorage.getItem('password') : null
    
    const name = typeof window !== 'undefined' ? localStorage.getItem('apName') : null
    const time = typeof window !== 'undefined' ? localStorage.getItem('apTime') : null
    const date = typeof window !== 'undefined' ? localStorage.getItem('apDate') : null
    const mail = typeof window !== 'undefined' ? localStorage.getItem('apMail') : null

    const ap = typeof window !== 'undefined' ? localStorage.getItem('appointment') : null

    return(
        <div className={styles.main}>
            <Header></Header>
            <head>
                <title>Кабинет</title>
                <link rel="icon" href="icon.svg"></link>
            </head>
            <div className={styles.infblock}>
                <div>
                    <h1>Информация об аккаунте:</h1>
                    <h3  style={{marginTop:"2%"}}>Логин: {l}</h3>
                    <h3 style={{marginTop:"1%"}}>Пароль: {p}</h3>
                </div>
                <div style={{opacity: ap}}>
                    <h1>Ваши записи:</h1>
                    <h3>Дата: {date}</h3>
                    <h3>Время: {time}</h3>
                    <h3>Имя: {name}</h3>
                    <h3>Почта: {mail}</h3>
                </div>
                <Link className={styles.link} href={'/'}>Выйти</Link>
            </div>    
        </div>
    )
}