// site.js

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}

function renderPills(activeId) {
  const bar = document.getElementById("pillbar");
  if (!bar || !window.PROJECTS) return;

  bar.innerHTML = "";

  window.PROJECTS.forEach(p => {
    const a = el("a", "pill" + (p.id === activeId ? " active" : ""), p.title);

    if (p.externalUrl) {
      a.href = p.externalUrl;
      a.target = "_blank";
      a.rel = "noreferrer";
    } else {
      a.href = `project.html?id=${encodeURIComponent(p.id)}`;
    }

    bar.appendChild(a);
  });
}

function renderHome() {
  const grid = document.getElementById("grid");
  if (!grid || !window.PROJECTS) return;

  grid.innerHTML = "";

  window.PROJECTS.forEach(p => {
    const card = el("a", "card");

    if (p.externalUrl) {
      card.href = p.externalUrl;
      card.target = "_blank";
      card.rel = "noreferrer";
    } else {
      card.href = `project.html?id=${encodeURIComponent(p.id)}`;
    }

    const media = el("div", "card-media");

    if (p.thumb) {
      const img = document.createElement("img");
      img.src = p.thumb;
      img.alt = `${p.title} thumbnail`;
      img.loading = "lazy";
      img.onerror = () => {
        media.innerHTML = "";
        const ph = el("div", "ph");
        ph.setAttribute("data-ph", "THUMB — 16:9");
        media.appendChild(ph);
      };
      media.appendChild(img);
    } else {
      const ph = el("div", "ph");
      ph.setAttribute("data-ph", "THUMB — 16:9");
      media.appendChild(ph);
    }

    const body = el("div", "card-body");
    body.appendChild(el("div", "card-title", p.title));
    body.appendChild(el("div", "card-sub", p.subtitle || ""));

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });

  renderPills(null);
}

function blockImage(image, wide, placeholderText) {
  const fig = el("figure", "media" + (wide ? " wide" : ""));

  if (image?.src) {
    const img = document.createElement("img");
    img.className = "img";
    img.src = image.src;
    img.alt = image.caption || "Project image";
    img.loading = "lazy";
    img.onerror = () => {
      fig.innerHTML = "";
      const ph = el("div", "ph");
      ph.setAttribute("data-ph", placeholderText || "IMAGE");
      fig.appendChild(ph);
      if (image?.caption) fig.appendChild(el("figcaption", "", image.caption));
    };
    fig.appendChild(img);
  } else {
    const ph = el("div", "ph");
    ph.setAttribute("data-ph", placeholderText || "IMAGE");
    fig.appendChild(ph);
  }

  if (image?.caption) fig.appendChild(el("figcaption", "", image.caption));
  return fig;
}

function blockText(text) {
  const b = el("div", "block");
  b.appendChild(el("h3", "", text?.heading || "Section"));
  if (text?.body) b.appendChild(el("p", "", text.body));
  if (text?.extra) b.appendChild(el("p", "", text.extra));

  if (text?.bullets?.length) {
    const ul = document.createElement("ul");
    text.bullets.forEach(x => ul.appendChild(el("li", "", x)));
    b.appendChild(ul);
  }
  return b;
}

/* ---------- Arrow carousel (one frame) ---------- */
function blockArrowCarousel(block) {
  const wrap = el("div", "carousel2-wrap");

  // Header
  if (block.heading || block.note) {
    const head = el("div", "carousel2-head");
    if (block.heading) head.appendChild(el("h3", "", block.heading));
    if (block.note) head.appendChild(el("p", "carousel2-note", block.note));
    wrap.appendChild(head);
  }

  const images = block.images || [];
  let idx = 0;

  const frame = el("div", "carousel2-frame");

  const viewport = el("div", "carousel2-viewport");
  const img = document.createElement("img");
  img.className = "carousel2-img";
  img.alt = images[0]?.caption || "carousel image";
  img.loading = "lazy";

viewport.appendChild(img);
frame.appendChild(viewport);

  const caption = el("div", "carousel2-caption", "");

  const btnL = el("button", "carousel2-btn left", "‹");
  const btnR = el("button", "carousel2-btn right", "›");
  btnL.type = "button";
  btnR.type = "button";

  const dots = el("div", "carousel2-dots");

  function render() {
    const cur = images[idx];
    if (!cur) return;

    img.src = cur.src;
    img.alt = cur.caption || "carousel image";
    caption.textContent = cur.caption || "";

    // dots
    dots.innerHTML = "";
    images.forEach((_, i) => {
      const d = el("button", "carousel2-dot" + (i === idx ? " active" : ""), "");
      d.type = "button";
      d.setAttribute("aria-label", `Image ${i + 1}`);
      d.addEventListener("click", () => {
        idx = i;
        render();
      });
      dots.appendChild(d);
    });

    btnL.disabled = images.length <= 1;
    btnR.disabled = images.length <= 1;
  }

  function prev() {
    if (!images.length) return;
    idx = (idx - 1 + images.length) % images.length;
    render();
  }
  function next() {
    if (!images.length) return;
    idx = (idx + 1) % images.length;
    render();
  }

  btnL.addEventListener("click", prev);
  btnR.addEventListener("click", next);

  // Keyboard support when hovered/focused
  wrap.tabIndex = 0;
  wrap.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  });

  frame.appendChild(btnL);
  frame.appendChild(btnR);

  wrap.appendChild(frame);
  wrap.appendChild(caption);
  wrap.appendChild(dots);

  // initial render
  render();

  return wrap;
}

function blockWideVideo(block) {
  const wrap = el("div", "video-wrap wide");

  if (block.heading) wrap.appendChild(el("h3", "video-head", block.heading));

  const video = document.createElement("video");
  video.className = "video";
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";

  // start at 1 second
  video.addEventListener("loadedmetadata", () => {
    if (video.duration > 1) {
      video.currentTime = 1;
    }
  });

  const src = document.createElement("source");
  src.src = block.src;
  src.type = "video/mp4";
  video.appendChild(src);

  wrap.appendChild(video);

  if (block.caption) wrap.appendChild(el("div", "video-caption", block.caption));

  return wrap;
}

function blockCarousel(block) {
  const wrap = el("div", "carousel-wrap wide");

  const head = el("div", "carousel-head");
  if (block.heading) head.appendChild(el("h3", "", block.heading));
  if (block.note) head.appendChild(el("p", "carousel-note", block.note));
  wrap.appendChild(head);

  const track = el("div", "carousel");

  (block.images || []).forEach(imgData => {
    const fig = el("figure", "carousel-item");

    if (imgData?.src) {
      const img = document.createElement("img");
      img.className = "img";
      img.src = imgData.src;
      img.alt = imgData.caption || "Carousel image";
      img.loading = "lazy";
      fig.appendChild(img);
    } else {
      const ph = el("div", "ph");
      ph.setAttribute("data-ph", "IMAGE");
      fig.appendChild(ph);
    }

    if (imgData?.caption) fig.appendChild(el("figcaption", "", imgData.caption));
    track.appendChild(fig);
  });

  wrap.appendChild(track);
  return wrap;
}

function blockPlainText(block) {
  return blockText(block.text);
}

function renderProject() {
  const mount = document.getElementById("projectMount");
  if (!mount || !window.PROJECTS) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = window.PROJECTS.find(x => x.id === id);

  if (!p) {
    mount.appendChild(el("p", "", "Project not found."));
    return;
  }

  if (p.externalUrl) {
    location.href = p.externalUrl;
    return;
  }

  renderPills(p.id);

  mount.innerHTML = "";

  const head = el("div", "project-head");
  head.appendChild(el("h2", "", p.title));
  head.appendChild(el("p", "one-liner", p.subtitle || ""));

  if (p.tags?.length) {
    const tags = el("div", "tags");
    p.tags.forEach(t => tags.appendChild(el("span", "", t)));
    head.appendChild(tags);
  }

  mount.appendChild(head);

  const grid = el("div", "grid");

  (p.blocks || []).forEach(b => {
    if (b.type === "wide-image") {
      grid.appendChild(blockImage(b.image, true, b.placeholder));
    } else if (b.type === "image-text") {
      grid.appendChild(blockImage(b.image, false, b.placeholder));
      grid.appendChild(blockText(b.text));
    } else if (b.type === "text-image") {
      grid.appendChild(blockText(b.text));
      grid.appendChild(blockImage(b.image, false, b.placeholder));
    } else if (b.type === "wide-carousel") {
      grid.appendChild(blockCarousel(b));
    } else if (b.type === "wide-carousel-arrows") {
      grid.appendChild(blockArrowCarousel(b));
    } else if (b.type === "wide-video") {
      grid.appendChild(blockWideVideo(b));
    } else if (b.type === "carousel-arrows") {
      grid.appendChild(blockArrowCarousel(b));
    } else if (b.type === "text") {
      grid.appendChild(blockPlainText(b));
    }

    
  });

  mount.appendChild(grid);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("grid")) renderHome();
  if (document.getElementById("projectMount")) renderProject();
});
