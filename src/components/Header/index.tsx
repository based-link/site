import Image from "next/image"
import logo from "@/public/logo.svg"

import css from "./index.module.css"

export const Header = () => {
  return (
    <header className={css.header}>
      <Image src={logo} alt="" />
    </header>
  )
}
