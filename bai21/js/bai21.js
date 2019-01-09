let URLSplit = decodeURIComponent(window.location.search).slice(1,decodeURIComponent(window.location.search).length).split('&');

$(".showOffInfo")[0].innerHTML += URLSplit[0].slice(9,URLSplit[0].length).replace("+"," ");
$(".showOffInfo")[1].innerHTML += URLSplit[1].slice(9,URLSplit[1].length).replace("+"," ");
$(".showOffInfo")[2].innerHTML += URLSplit[2].slice(7,URLSplit[2].length).replace("+"," ");
$(".showOffInfo")[3].innerHTML += URLSplit[3].slice(8,URLSplit[3].length).replace("+"," ");
$(".showOffInfo")[4].innerHTML += URLSplit[4].slice(6,URLSplit[4].length).replace("+"," ");
$(".showOffInfo")[5].innerHTML += URLSplit[5].slice(6,URLSplit[5].length).replace("+"," ");
$(".showOffInfo")[6].innerHTML += URLSplit[6].slice(9,URLSplit[6].length).replace("+"," ");