import { ConnectButton } from '@/components/ConnectButton'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <ConnectButton />
      </header>
      <main className="mb-20">
        <h1 className="mx-auto mb-7 text-balance text-center text-4xl font-semibold md:text-5xl/snug lg:text-6xl/snug xl:text-7xl/snug">
          Your alternate aerodrome in the world of social media
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-balance text-center">
          Based is a platform that aggregates all your social activity from
          various platforms and creates a shared feed. We aim to give you
          freedom, privacy, and the ability to keep and control your content in
          a decentralized network that is not subject to censorship or arbitrary
          deletions.
        </p>
        <div className="mb-6 lg:flex lg:gap-12">
          <h2 className="mb-4 text-3xl font-semibold lg:mb-0">
            Decentralized network &#128075;
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              Social media can remove your content or even block your account at
              any time without warning or explanation. This can be extremely
              frustrating and potentially devastating for you as a content
              creator or publisher.
            </p>

            <p>
              Based gives you a convenient way to manage your activity by
              collecting it from different social networks and storing it in a
              secure and decentralized network. We don’t require users to move
              to a new platform or leave their existing social networks.
              Instead, we aggregate and merge their content. This means you can
              stay active on your favorite social platforms such as Facebook,
              Twitter, Instagram, and YouTube.
            </p>

            <p>
              With Based, your content is stored in a distributed network of
              nodes, and no centralized organization can remove it without your
              permission. Your content and account remain under your control,
              and no one can interfere with or censor it.
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

        <div>
          <h3 className="mb-6 text-center text-3xl font-semibold">Team</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col gap-2">
              <Image
                alt="Nazim Gafarov"
                className="rounded-md"
                height={200}
                priority={false}
                src="/Gafarov.jpg"
                width={200}
              />
              <p>Nazim Gafarov</p>
              <div className="flex gap-4">
                <a href="https://twitter.com/zapolnoch" target="_blank">
                  <Image
                    alt="Twitter"
                    height={40}
                    src="/twitter.svg"
                    width={40}
                  />
                </a>
                <a href="https://github.com/zapolnoch" target="_blank">
                  <Image
                    alt="Github"
                    height={40}
                    src="/github.svg"
                    width={40}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                alt="Anastasia Blinova"
                className="rounded-md"
                height={200}
                priority={false}
                src="/Blinova.jpg"
                width={200}
              />
              <p>Anastasia Blinova</p>
              <div className="flex gap-4">
                <a href="https://github.com/Blinina">
                  <Image
                    alt="Github"
                    height={40}
                    src="/github.svg"
                    width={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
