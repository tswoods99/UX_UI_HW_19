function smoothScroll(target) {
    const element = document.querySelector("." + target);
    element.scrollIntoView({ behavior: 'smooth' });
}