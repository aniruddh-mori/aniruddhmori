const typed = new Typed("#element", {
  strings: ["Web developer.", "Frontend developer."],
  typeSpeed: 70,
  backSpeed: 30,
  loop: true,
  backDelay: 100,
});

const icons = document.querySelectorAll(".second-about .icon");
const projects = document.querySelectorAll(".second-project .project");
const contacts = document.querySelectorAll("main .contact");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        console.log(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4,
  },
);

icons.forEach((icon) => observer.observe(icon));
projects.forEach((project) => observer.observe(project));
contacts.forEach((contact) => observer.observe(contact));
