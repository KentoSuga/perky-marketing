import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, plan, notes } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Perky <noreply@perky-app.com>",
        to: "support@perky-app.com",
        subject: `New Sign-Up: ${plan}`,
        html: `
          <h2>New Perky Sign-Up</h2>
          <p><strong>Business Email:</strong> ${email}</p>
          <p><strong>Selected Plan:</strong> ${plan}</p>
          <p><strong>Notes:</strong> ${notes || "(none)"}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
