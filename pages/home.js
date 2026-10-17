import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NaveBar from './navbar'
// import djangoImage from '/django.png'
export default function Home() {
  return (
    <div>
<NaveBar />
<div><h1>It is Home Page</h1></div>
<Image src='/django.png' alt="Picture of the Django" width="64" height="64"></Image>
    </div>
  )
}
