export const labelClickEvent = (label) => {
  label.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      label.click();
    }
  });
};

export const oberverElement = (sectionElements) => {
  const option = {
    threshold: 0.5,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callback, option);
  sectionElements.forEach((element) => observer.observe(element));
};
