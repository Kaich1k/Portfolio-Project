const skills = document.querySelectorAll("#skills li");

skills.forEach(skill => {
  skill.addEventListener("mouseover", () => {
    skill.style.transform = "scale(1.1)";
    skill.style.transition = "0.5s ease-in-out";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.transform = "scale(1)";
    skill.style.transition = "0.5s ease-in-out";
  });
});