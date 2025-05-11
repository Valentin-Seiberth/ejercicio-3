const totalFigus = 100;
const estadoFigus = JSON.parse(localStorage.getItem("figus")) || Array(totalFigus).fill(false);
const album = document.querySelector("#album");
const contador = document.querySelector("#contador");

function actualizarContador() {
  const obtenidas = estadoFigus.filter(f => f).length;
  contador.textContent = `Faltan ${totalFigus - obtenidas} figuritas`;
}

function crearAlbum() {
  for (let i = 0; i < totalFigus; i++) {
    const btn = document.createElement("button");
    btn.className = "figu";
    btn.textContent = i + 1;
    if (estadoFigus[i]) {
      btn.classList.add("obtenida");
    }

    btn.addEventListener("click", () => {
      estadoFigus[i] = !estadoFigus[i];
      btn.classList.toggle("obtenida");
      localStorage.setItem("figus", JSON.stringify(estadoFigus));
      actualizarContador();
    });

    album.appendChild(btn);
  }
  actualizarContador();
}

crearAlbum();
