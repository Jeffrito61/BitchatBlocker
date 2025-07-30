<button onclick="toggleStatus()">Toggle MeshShield</button>
<p id="status">Status: OFF</p>
function toggleStatus() {
  const status = document.getElementById("status");
  if (status.innerText.includes("OFF")) {
    status.innerText = "Status: ON";
  } else {
    status.innerText = "Status: OFF";
  }
}
