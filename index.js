export default async function handler(req, res) {
  const response = await fetch("https://usetreq.in/api/generate-thought", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: "A mind-bending truth about the internet or AI"
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
