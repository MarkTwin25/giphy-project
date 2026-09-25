import './styles.css';
import { fetchGifs } from './api.js';
import { clearError, renderGIFs, showError } from './render.js';
import { initSwiper } from './swiper.js';

const searchInput = document.getElementById('searchInput');
const sendBtn = document.getElementById('sendBtn');
const error = document.getElementById('error');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');

const images = [img1, img2, img3];

initSwiper();

sendBtn.addEventListener('click', async () => {
    // if an error alreadys display
    if (error.classList.contains('active')) {
        clearError();
    }

    const searchQuery = searchInput.value.trim();
    // Validate empty input
    if (searchInput === '') {
        createError('Write something!');
        return;
    }

    sendBtn.disabled = true;

    try {
        const urls = await fetchGifs(searchQuery);
        renderGIFs(urls, images);
        searchInput.value = '';
    } catch (error) {
        showError(error, error.message);
        return;
    } finally {
        sendBtn.disabled = false;
    }
});
