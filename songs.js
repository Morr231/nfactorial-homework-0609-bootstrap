const allSongs = new Array(10).fill(0);
document.getElementById("row").innerHTML = `${allSongs
    .map((song) => {
        return `
        <div class="col-4 d-flex justify-content-center mb-3">
            <div class="card" style="width: 18rem;">
                <img src="assets/f.png" class="card-img-top" alt="music-song">
                <div class="card-body">
                    <h5 class="card-title">Music title</h5>
                    <p class="card-text">Author</p>
                    <a href="index.html" class="btn btn-primary">Listen</a>
                </div>
            </div>
        </div>
    `;
    })
    .join("")}`;
