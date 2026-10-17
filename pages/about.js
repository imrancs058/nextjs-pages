import NaveBar from "./navbar"
import Image from 'next/image'
import djangoImage from '../public/django.png'
function HomePage() {
  return (
    <div>
      <div><NaveBar /></div>
      <div><h1>It is About Page</h1></div>
      <Image src='/django.png' alt="Picture of the Django" width="64" height="64"></Image>
    </div>

  )
}

export default HomePage