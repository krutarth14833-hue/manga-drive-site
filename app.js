// Simple placeholder manga
const sample = [
  "Naruto",
  "One Piece",
  "Bleach",
  "Attack On Titan",
  "Solo Leveling"
];

function loadManga() {
  const popular = document.getElementById("popular");
  const all = document.getElementById("all-manga");

  sample.forEach(title => {
    popular.innerHTML += `<div>${title}</div>`;
    all.innerHTML += `<div>${title}</div>`;
  });
}

loadManga();
