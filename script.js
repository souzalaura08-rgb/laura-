<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Player de Música</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>🎵 Meu Site de Música</h1>
</header>

<div class="container">
    <h2>Playlist</h2>

    <ul id="playlist">
        <li data-src="music/musica1.mp3">🎶 Música 1</li>
        <li data-src="music/musica2.mp3">🎶 Música 2</li>
        <li data-src="music/musica3.mp3">🎶 Música 3</li>
    </ul>

    <audio id="player" controls></audio>
</div>

<script src="script.js"></script>

</body>
</html>body{
    margin:0;
    font-family:Arial, Helvetica, sans-serif;
    background:#111;
    color:#fff;
}

header{
    background:#1db954;
    padding:20px;
    text-align:center;
}

.container{
    width:80%;
    max-width:700px;
    margin:40px auto;
}

#playlist{
    list-style:none;
    padding:0;
}

#playlist li{
    background:#222;
    padding:15px;
    margin:10px 0;
    cursor:pointer;
    border-radius:8px;
    transition:.3s;
}

#playlist li:hover{
    background:#1db954;
}

audio{
    width:100%;
    margin-top:20px;
}const musicas = document.querySelectorAll("#playlist li");
const player = document.getElementById("player");

musicas.forEach(musica => {
    musica.addEventListener("click", () => {
        player.src = musica.dataset.src;
        player.play();
    });
});