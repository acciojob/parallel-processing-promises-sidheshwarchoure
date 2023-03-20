//your JS code here. If required.
const images = [
  { url: 'https://picsum.photos/id/237/200/300' },
  { url: 'https://picsum.photos/id/238/200/300' },
  { url: 'https://picsum.photos/id/239/200/300' },
  { url: 'https://picsum.photos/id/240/200/300' },
  { url: 'https://picsum.photos/id/241/200/300' },
];

function downloadImages(images) {
  const promises = images.map(image =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      img.src = image.url;
    })
  );
  return Promise.all(promises);
}

const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', () => {
  const outputDiv = document.getElementById('output');
  downloadImages(images)
    .then(images => {
      images.forEach(image => outputDiv.appendChild(image));
    })
    .catch(error => {
      console.error(error);
    });
});