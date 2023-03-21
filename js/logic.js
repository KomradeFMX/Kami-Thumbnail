function fetchThumbnail() {
    url = document.getElementById("input").value;
    div = document.getElementById("thumbnails");


    highRes = `https://img.youtube.com/vi/${url.substring(url.lastIndexOf("=") + 1, url.length)}/hqdefault.jpg`
    standardRes = `https://img.youtube.com/vi/${url.substring(url.lastIndexOf("=") + 1, url.length)}/mqdefault.jpg`
    lowRes = `https://img.youtube.com/vi/${url.substring(url.lastIndexOf("=") + 1, url.length)}/default.jpg`

    if (!url.includes("youtube") && url == "" ) return alert("That doesn´t look like a valid youtube link!");

    div.innerHTML = `<details open="">
                        <summary>High Resolution</summary>
                        <img class="resultImage" src="${highRes}">
                    </details>`;
    div.innerHTML += `<details>
                        <summary>Standard Resolution</summary>
                        <img class="resultImage" src="${standardRes}">
                        </details>`;
    div.innerHTML += `<details>
                        <summary>Low Resolution</summary>
                        <img class="resultImage" src="${lowRes}">
                        </details>`;
}