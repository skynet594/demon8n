document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("statusMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    const webhookUrl = "https://your-n8n-instance/webhook/test"; // Replace with your actual URL

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "Failed to send message.";
        status.style.color = "red";
      }
    } catch (err) {
      status.textContent = "Error sending message.";
      status.style.color = "red";
    }
  });
});
