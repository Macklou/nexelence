//*/ function for the accrodion
//target the all accrodion heading
const accrodions = document.querySelectorAll(".accrodion-heading");

//strat loop to each accrodion heading
accrodions.forEach((accrodion) => {
  accrodion.addEventListener("click", () => {
    //add active class to accrodion heading for the arrow rotate
    accrodion.classList.toggle("active");
    //target the accrodion content
    const content = accrodion.nextElementSibling;
    //if the cotnet is allready visable then the content will be hide and else it will show
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});

//*/ sidebar function
const toggleCheckBox = document.getElementById("toggleCheckBox");

toggleCheckBox.addEventListener("change", function () {
  //target the sidebar
  const sideBar = document.querySelector(".side-bar-wrapper");

  if (this.checked) {
    //show the sidebar
    sideBar.classList.add("right-0");
    // Stop scroll
    document.body.style.overflow = "hidden";
  } else {
    //hide the sidebar
    sideBar.classList.remove("right-0");
    // Restore scroll
    document.body.style.overflow = "auto";
  }
});

/// theme change
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company_name").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:louise@nexelence.com?subject=New%20message%20from%20${name}&body=Email:%20${email}%0ACompany:%20${company}%0AMessage:%20${message}`;

  window.location.href = mailtoLink;
}
