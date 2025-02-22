const header_element = document.getElementById("header");
const footer_element = document.getElementById("footer");

const header = `<!DOCTYPE html>
<html>
<head>
    <title>Mike's Site</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="stylesheet" href="../css/index.css">
	<link rel="stylesheet" href="../css/snake.css">
	<link rel="stylesheet" href="../css/ascii_tic_tac_toe.css">
	<link rel="stylesheet" href="../css/about.css">
	<link rel="stylesheet" href="../css/finance_apps.css">
</head>
<div class="main-header">
    <div class="header-text">Mike Bergamini's Portfolio</div>
</div>
<div class="wh-row"></div>
<div class="nav-bar">
    <a class="nav-a" href="../index.html">| Home |</a>
    <a class="nav-a" href="../finance_apps/finance_apps.html">| Finance Apps |</a>
    <a class="nav-a" href="../games/game_menu.html">| Games |</a>
    <a class="nav-a" href="../about/about.html">| About |</a>
    <a class="nav-a" href="https://github.com/Mike-Berg-98605">| GitHub |</a>
</div>
<div class="clear"></div>
<div class="wh-row"></div>
<div class="rainbow"></div>
<div class="wh-row"></div>`;

const footer = `<footer>
<div class="clear"></div>
<div class="wh-row"></div>
<div class="rainbow"></div>
<div class="wh-row"></div>
    <div class="fl-left footer">
        <p>Thanks for Visiting!</p>
    </div>
<div class="clear"></div>
<div class="wh-row"></div>
<div class="rainbow"></div>
<div class="wh-row"></div>
</footer>
</html>`;

header_element.innerHTML = header;
footer_element.innerHTML = footer;
