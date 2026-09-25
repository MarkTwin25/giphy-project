const KEY = process.env.API_KEY;

export async function fetchGifs(query) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=3&q=${query}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const gifs = data.data;

    if (gifs.length < 3) {
        throw new Error('No GIFs found. :(');
    }

    return gifs.map((gif) => gif.images.original.url);
}
