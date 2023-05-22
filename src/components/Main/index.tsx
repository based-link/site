import Image from "next/image"
import mainIamge from "@/public/main.jpg"
import GafarovImage from "@/public/Gafarov.jpg"
import BlinovaImage from "@/public/Blinova.jpg"
import GithubIcon from "@/public/github.svg"
import TwitterIcon from "@/public/twitter.svg"
import css from "./index.module.css"

export const Main = () => {
  return (
    <main className={css.main}>
      <h1 className={css.main__title}>
        Запасной аэродром в мире социальных сетей
      </h1>
      <p className={css.main__text}>
        Optics – это платформа, которая агрегирует все ваши социальные
        активности с различных платформ и создает общую ленту. Мы стремимся
        предоставить вам свободу, приватность и возможность сохранить и
        контролировать свой контент в децентрализованной сети, которая не
        подвержена цензуре или произвольным удалениям.
      </p>

      <Image src={mainIamge} alt="main" priority />
      <div className={css.main__intro}>
        <h2>Всем привет &#128075;</h2>
        <div className={css.main__intro_wrapper}>
          <p>
            Социальные сети в любой момент могут удалить ваш контент или даже
            заблокировать ваш аккаунт без предупреждения или объяснения причин.
            Это может быть крайне разочаровывающим и потенциально разрушительным
            для вас в качестве контент-мейкера или паблишера.
          </p>
          <p>
            Optics предоставляет вам удобный способ управления вашей
            активностью, собирая ее из разных социальных сетей и сохраняя в
            безопасной и децентрализованной сети. Мы не требуем от пользователей
            переходить на новую платформу или оставлять существующие социальные
            сети. Вместо этого мы агрегируем и объединяем их контент. Это
            означает, что вы можете оставаться активным на своих любимых
            социальных платформах, таких как Facebook, Twitter, Instagram и
            YouTube.
          </p>
          <p>
            С Optics ваш контент сохраняется в распределенной сети узлов, и
            никакая централизованная организация не может удалить его без вашего
            разрешения. Ваш контент и аккаунт остаются под вашим контролем, и
            никто не может вмешиваться или цензурировать его.
          </p>
          <p>
            Кроме того, Optics предлагает возможность подключить ваш собственный
            децентрализованный домен, который станет точкой доступа к вашему
            профилю. Это обеспечивает надежность, устойчивость к цензуре и
            защиту данных.
          </p>
          <p>
            Optics – ваш запасной аэродром, ваш план Б в мире социальных сетей.
            Мы понимаем, что существующие социальные сети могут быть
            непредсказуемыми и что могут возникнуть ситуации, в которых ваш
            контент или аккаунт могут быть уничтожены. Поэтому мы предлагаем вам
            резервное решение, чтобы вы могли сохранить свою социальную
            активность и контроль над вашим контентом.
          </p>
        </div>
      </div>

      <div className={css.main__team}>
        <h3 className={css.main__team_title}>Команда</h3>

        <div className={css.main__team_wrapper}>
          <div>
            <Image src={GafarovImage} alt="Nazim Gafarov" />
            <p>Nazim Gafarov</p>
            <div className={css.main__team_socialnet}>
              <a href="https://twitter.com/zapolnoch" target="_blank">
                <Image src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="https://github.com/zapolnoch" target="_blank">
                <Image src={GithubIcon} alt="Github" />
              </a>
            </div>
          </div>
          <div>
            <Image src={BlinovaImage} alt="Anastasia Blinova" />
            <p>Anastasia Blinova</p>
            <div className={css.main__team_socialnet}>
              <a href="https://github.com/Blinina">
                <Image src={GithubIcon} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <form className={css.main__form}>
        <h3>Subscribe to our newsletter</h3>
        <p>
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div className={css.main__form_input}>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
      </form> */}
    </main>
  )
}
