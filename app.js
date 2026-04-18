(function () {

  // ===== CSS (hidden) =====
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      margin: 0;
      font-family: Arial;
      background: #0f172a;
      color: white;
      text-align: center;
    }

    .header {
      padding: 20px;
      background: #1e293b;
      font-size: 24px;
      font-weight: bold;
    }

    .content {
      margin-top: 40px;
      font-size: 18px;
    }
  `;
  document.head.appendChild(style);

  // ===== HTML (hidden in JS) =====
  const container = document.createElement("div");

  container.innerHTML = `
    <div class="header">👑 Sith Website</div>
    <div class="content">
      <p>ស្វាគមន៍មកកាន់គេហទំព័រខ្ញុំ</p>
      <p>នេះគឺជា HTML + CSS ដែលលាក់ក្នុង JS</p>
    </div>
  `;

  document.body.appendChild(container);

  // ===== Update title =====
  document.getElementById("title").innerText = "Welcome";

})();