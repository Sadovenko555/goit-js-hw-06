const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

images.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = image.url;
  img.alt = image.alt;

  li.appendChild(img);
  gallery.appendChild(li);
});

const style = document.createElement("style");
style.textContent = `
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
}

.gallery__item {
  flex-basis: calc(33.33% - 10px);
  margin-bottom: 20px;
}

.gallery__image {
  width: 100%;
  height: auto;
}
`;

document.head.appendChild(style);