document.addEventListener("DOMContentLoaded", function() {
    fetch('artwork.json') // Assuming your JSON file is named artwork.json
        .then(response => response.json())
        .then(data => {
            const featuredArtwork = data.featuredArtwork.filter(artwork => artwork.imageUrl); // Filter out artwork items with no image URL
            const galleryContainer = document.querySelector('.artwork');

            featuredArtwork.forEach(artwork => {
                const artworkItem = document.createElement('div');
                artworkItem.classList.add('artwork-item');

                const artworkPreview = document.createElement('div');
                artworkPreview.classList.add('artwork-preview');
                artworkPreview.style.backgroundImage = `url('${artwork.imageUrl}')`; // Update the URL to use the local image path

                const artworkDetails = document.createElement('div');
                artworkDetails.classList.add('artwork-details');

                const title = document.createElement('h3');
                title.textContent = artwork.title;

                const artist = document.createElement('p');
                artist.textContent = `By ${artwork.artist}`;

                const description = document.createElement('p');
                description.textContent = artwork.description;

                const codeSnippet = document.createElement('div');
                codeSnippet.classList.add('code-editor');
                codeSnippet.innerHTML = `<pre><code>${artwork.codeSnippet}</code></pre>`;

                artworkDetails.appendChild(title);
                artworkDetails.appendChild(artist);
                artworkDetails.appendChild(description);
                artworkDetails.appendChild(codeSnippet);

                artworkItem.appendChild(artworkPreview);
                artworkItem.appendChild(artworkDetails);

                galleryContainer.appendChild(artworkItem);
            });
        })
        .catch(error => {
            console.error('Error fetching artwork data:', error);
        });
});
