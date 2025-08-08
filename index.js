import fetch from "node-fetch";

async function sendRequest() {
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
  console.log(data);
}

sendRequest();
