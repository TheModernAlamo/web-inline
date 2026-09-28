const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
	const closeMenu = () => {
		navToggle.setAttribute("aria-expanded", "false");
		navToggle.setAttribute("aria-label", "메뉴 열기");
		navLinks.classList.remove("is-open");
	};

	navToggle.addEventListener("click", () => {
		const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
		navToggle.setAttribute("aria-expanded", String(!isExpanded));
		navToggle.setAttribute("aria-label", isExpanded ? "메뉴 열기" : "메뉴 닫기");
		navLinks.classList.toggle("is-open", !isExpanded);
	});

	navLinks.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});
}
