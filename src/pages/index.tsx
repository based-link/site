import Head from "next/head"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { Footer } from "@/components/Footer"
import styles from "@/styles/Home.module.css"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Optics.vision</title>
        <meta
          name="description"
          content="Your plan B in the world of social networking"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.homepage}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
