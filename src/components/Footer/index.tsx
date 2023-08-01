import css from "./index.module.css"

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div>
        <p>
          Your reserve airfield, your plan B in the world of social networking
        </p>
      </div>

      <div className={css.footer__social}>
        <h5>Links</h5>
        <ul>
          <li>
            <a href="https://twitter.com/based_link_labs">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/based-link">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
