document.getElementById("testForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Replace with your actual n8n webhook URL
  const webhookUrl = "https://your-n8n-instance/webhook/test";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      document.getElementById("statusMessage").innerText = "Data sent successfully!";
      form.reset();
    } else {
      document.getElementById("statusMessage").innerText = "Failed to send data.";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("statusMessage").innerText = "Error sending data.";
  }
});
