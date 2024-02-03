import css from "@/components/Main/index.module.css"
import { useRef, FormEvent } from "react"

export const SubscriptionForm = () => {
  const inputRef = useRef(null)

  const subscribeUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    })
  }

  return (
    <form className={css.main__form} onSubmit={subscribeUser}>
      <h3>Subscribe to our newsletter</h3>
      <p>
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <div className={css.main__form_input}>
        <input
          type="email"
          placeholder="Enter your email"
          ref={inputRef}
          required
        />
        <button>Subscribe</button>
      </div>
    </form>
  )
}
