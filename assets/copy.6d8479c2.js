function o(e){const a=e.currentTarget,c=a.dataset.clipboard;navigator.clipboard.writeText(c);const t=a.querySelector(".card-body");console.log(t),t.classList.add("swap-active"),setTimeout(()=>{t.classList.remove("swap-active")},1200)}document.querySelectorAll(".swatch").forEach(e=>e.addEventListener("click",o,!1));
