import fetch from "isomorphic-unfetch"
import type { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER

    const data = {
      email_address: email,
      status: "subscribed",
    }

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          "Authorization": `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    )

    if (response.status >= 400) {
      return res.status(response.status).json(await response.json())
    }

    return res.status(201).json({ error: "" })
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ error: error.message || error.toString() })
  }
}
