export function renderGIFs(urls, images) {
    urls.forEach((url, i) => {
        images[i].src = url;
    });
}

export function showError(element, message) {
    element.textContent = message;
    element.classList.add('active');
}

export function clearError(element) {
    element.classList.remove('active');
}
