import Image from "next/image"
import logo from "@/public/logo.svg"
import css from "./index.module.css"

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div>
        <Image src={logo} alt="logo" />
        <p>Ваш запасной аэродром, ваш план Б в мире социальных сетей.</p>
      </div>

      <div className={css.footer__social}>
        <h5>Ссылки</h5>
        <ul>
          <li>
            <a href="https://twitter.com/opticsprotocol">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/optics-vision">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
