import { fetchGalleryImages } from "./api.js";

(function () {
  "use strict";

  /** Toggle scrolled class on body */
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    )
      return;

    window.scrollY > 100
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /** Preloader */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /** Scroll top button */
  let scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }

  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /** AOS animation */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /** glightbox init */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /** Fetch và render ảnh từ Supabase */
  document.addEventListener("DOMContentLoaded", async () => {
    const imageList = await fetchGalleryImages();
    const galleryContainer = document.querySelector("#gallery .row");
    galleryContainer.innerHTML = "";

    imageList.forEach((img) => {
      const item = document.createElement("div");
      item.className = "col-xl-3 col-lg-4 col-md-6";
      item.innerHTML = `
        <div class="gallery-item h-100">
          <img src="${img.image}" class="img-fluid" alt="${img.title}">
          <div class="p-3">
            <p class="mt-3"><i class="cus-bi bi bi-camera"></i> ${img.title}</p>
            <p class="mb-1"><i class="cus-bi bi bi-geo-alt-fill"></i><span class="ms-2"> ${img.address}</span></p>
            <p class="mt-2"><i class="cus-bi bi bi-calendar4-week"></i>
              <span class="ms-2"> 
                ${(() => {
                  const d = new Date(img.time);
                  const day = String(d.getDate()).padStart(2, '0');
                  const month = String(d.getMonth() + 1).padStart(2, '0');
                  const year = d.getFullYear();
                  return `${day}/${month}/${year}`;
                })()}
              </span>
            </p>
          </div>
        </div>
      `;
      galleryContainer.appendChild(item);
    });
  });
})();
