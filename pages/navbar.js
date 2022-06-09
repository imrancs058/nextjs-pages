import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function NaveBar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg block2 text-white bg-dark">

          <button className="navbar-toggler border border-2 border-dark w-10" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 pl-7">


              <div className="nav-item nav-link text-white ml-2 ml-lg-auto">
                <div className="m-l-3 ">
                  <Link href="/home" className="anchorStyles"> Home</Link>

                </div>

              </div>
              <div className="nav-item nav-link text-white ml-2 ml-lg-auto">
                <div className="m-l-3 ">
                  <Link href="/about" className="anchorStyles"> About</Link>

                </div>

              </div>
            
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
