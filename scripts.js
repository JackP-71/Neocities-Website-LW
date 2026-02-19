function adjVol(value)
{
    const audio = document.getElementById("player");
    audio.volume = value;
}

//scripts for auto writing footer and heading

document.querySelector(".writeHeader").innerHTML = `
        <div class="titleBox">
            <a href="../index.html" style="text-decoration: none;"><h1>the void...</h1></a>
        </div>
`;

document.querySelector(".writeFooter").innerHTML = `              
        <footer id="footer" style="margin-top: 10px; height: 135px;">
            <p>lost? use the <a href="../sitemap.html">map of the void</a> to help you out!</p>
            <p>© LoneWriter - 2026 'til the end. </p>
            <p><small><small>the void was first discovered on the 25th June 2025 - <a href="https://neocities.org/site/lonewriter">Neocities profile...</a></small></small></p>
        </footer>
`;

//script for last fm widget - DOES NOT SHOW ON NEOCITIES

function getLastFMStat() {
    let user = 'LoneWriter71';
    let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
    let song = document.querySelector('#song');
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            song.innerHTML = json['track']['name'] + ' - ' + json['track']['artist']['#text'];
        });
    }

//script for dark / light toggle

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// checking for user last chosen

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}


const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}