const BASE = "/"; // nombre del repo en GitHub Pages

async function loadPartial(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    console.error(`No se pudo cargar ${url} (${res.status})`);
    return;
  }
  el.innerHTML = await res.text();
}

loadPartial("site-header", `${BASE}/partials/header.html`);
loadPartial("site-footer", `${BASE}/partials/footer.html`);
