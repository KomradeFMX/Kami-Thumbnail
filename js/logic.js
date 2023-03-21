function fetchThumbnail() {
    url = document.getElementById("input").value;
    div = document.getElementById("thumbnails");

    // Remove extra stuff from the link
    let cleanLink = url;
    let videoId = "";

    if (!url.includes("?v")) cleanLink = url.replace("?" + url.substring(url.lastIndexOf("?") + 1, url.length), "");
    console.log(cleanLink)
    // Get the ID depending of the URL typoe
    if (url.includes("youtube.com/watch?v=")) videoId = cleanLink.substring(cleanLink.lastIndexOf("=") + 1, cleanLink.length)
    else if (url.includes("youtube.com/live/")) videoId = cleanLink.substring(cleanLink.lastIndexOf("live/") + 5, cleanLink.length)
    else if (url.includes("youtu.be/")) videoId = cleanLink.substring(cleanLink.lastIndexOf(".be/") + 4, cleanLink.length)

    if (videoId == "") {
        div.innerHTML = "<div class='error'><span class='error-message'>That doesn't look like a valid link!</span></div>"
        return;
    };

        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 404) {
              console.log('Thumbnail not found.');
            } else {
              console.log('Thumbnail found.');
            }
          }
        };
        xhr.send()



    div.innerHTML = `<details open="">
                        <summary>High Resolution</summary>
                        <img class="resultImage" src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg">
                    </details>`;
    div.innerHTML += `<details>
                        <summary>Standard Resolution</summary>
                        <img class="resultImage" src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg">
                    </details>`;
    div.innerHTML += `<details>
                        <summary>Low Resolution</summary>
                        <img class="resultImage" src="https://img.youtube.com/vi/${videoId}/default.jpg">
                    </details>`;

    function handleError() {
        console.log("Pum")
        div.innerHTML = "<div class='error'><span class='error-message'>That doesn't look like a valid link!</span></div>"
        return;
    }

}