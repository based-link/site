export function Footer() {
  return (
    <footer className="block w-full pb-24 xl:flex xl:justify-between">
      <p className="mb-8 text-base font-normal leading-6 xl:mb-0">
        Your reserve airfield, your plan B in the world of social networking
      </p>
      <div>
        <h5 className="mb-2 text-base font-semibold leading-6 text-gray-900">
          Links
        </h5>
        <ul className="flex flex-col gap-2">
          <li className="text-base font-normal leading-6 text-gray-900 opacity-70">
            <a
              className="border-1 border-gray-900/60"
              href="https://twitter.com/based_link_labs"
            >
              Twitter
            </a>
          </li>
          <li className="text-base font-normal leading-6 text-gray-900 opacity-70">
            <a
              className="border-1 border-gray-900/60"
              href="https://github.com/based-link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
