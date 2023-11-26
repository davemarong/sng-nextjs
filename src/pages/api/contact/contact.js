// pages/api/contact.js
import sendEmail from "../../utils/sendEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req);
    const { name, email, message } = req.body;

    const result = await sendEmail({ name, email, message });

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
