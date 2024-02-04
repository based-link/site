import Image from "next/image"
import GafarovImage from "@/public/Gafarov.jpg"
import GithubIcon from "@/public/github.svg"
import TwitterIcon from "@/public/twitter.svg"
import css from "./index.module.css"
import { SubscriptionForm } from "@/components/Subscription"

export const Main = () => {
  return (
    <main className={css.main}>
      <h1 className={css.main__title}>
        Your alternate aerodrome in the world of social media
      </h1>
      <p className={css.main__text}>
        Based is a platform that aggregates all your social activity from
        various platforms and creates a shared feed. We aim to give you freedom,
        privacy, and the ability to keep and control your content in a
        decentralized network that is not subject to censorship or arbitrary
        deletions.
      </p>

      <div className={css.main__intro}>
        <h2>Decentralized network &#128075;</h2>
        <div className={css.main__intro_wrapper}>
          <p>
            Social media can remove your content or even block your account at
            any time without warning or explanation. This can be extremely
            frustrating and potentially devastating for you as a content creator
            or publisher.
          </p>

          <p>
            Based gives you a convenient way to manage your activity by
            collecting it from different social networks and storing it in a
            secure and decentralized network. We don’t require users to move to
            a new platform or leave their existing social networks. Instead, we
            aggregate and merge their content. This means you can stay active on
            your favorite social platforms such as Facebook, Twitter, Instagram,
            and YouTube.
          </p>

          <p>
            With Based, your content is stored in a distributed network of
            nodes, and no centralized organization can remove it without your
            permission. Your content and account remain under your control, and
            no one can interfere with or censor it.
          </p>

          <p>
            In addition, Based offers the option to connect your own
            decentralized domain, which becomes the access point to your
            profile. This ensures reliability, resistance to censorship, and
            data protection.
          </p>

          <p>
            Based is your reserve airfield, your plan B in the world of social
            networking. We understand that existing social networks can be
            unpredictable, and situations can arise where your content or
            account can be compromised. That’s why we offer you a backup
            solution, so you can maintain your social activity and retain
            control over your content.
          </p>
        </div>
      </div>

      <div className={css.main__team}>
        <h3 className={css.main__team_title}>Team</h3>

        <div className={css.main__team_wrapper}>
          <div>
            <Image src={GafarovImage} alt="Nazim Gafarov" />
            <p>Nazim Gafarov</p>
            <div className={css.main__team_socialnet}>
              <a href="https://twitter.com/zapolnoch2" target="_blank">
                <Image src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="https://github.com/zapolnoch" target="_blank">
                <Image src={GithubIcon} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <SubscriptionForm />
    </main>
  )
}
