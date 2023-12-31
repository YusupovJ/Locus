function scrollTo() {
	const links = document.querySelectorAll(".menu__link[data-goto]");
	const header = document.querySelector(".header");

	console.log(links);

	if (links.length > 0) {
		for (let index = 0; index < links.length; index++) {
			let link = links[index];
			link.addEventListener("click", function (e) {
				e.preventDefault();
				const linkTarget = e.target;
				if (linkTarget.dataset.goto && document.querySelector(linkTarget.dataset.goto)) {
					let scrollToBlock = document.querySelector(linkTarget.dataset.goto);
					let blockCords = scrollToBlock.getBoundingClientRect().top + scrollY - header.clientHeight;
					window.scrollTo({
						behavior: "smooth",
						top: blockCords,
					});
				}
			});
		}
	}
}

export default scrollTo;
