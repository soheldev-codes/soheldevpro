 export const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) {
    const yOffset = -80; // navbar height adjust
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};