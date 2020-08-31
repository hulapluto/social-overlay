let url = document.querySelector('.cta2');
let url1 = url.getAttribute('href');
let titles = document.querySelector('.card-pull_title');
let title1 = titles.innerText;
let cardTarget = document.querySelector('figure');

function addHTML(target, sURL, sTitle) {
    let div = document.createElement('div');
    div.setAttribute("class", "social");
    let html = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + sURL + '" target="_blank"><img src="facebook-rev.svg" class="social-icon"></a> <a href="https://twitter.com/intent/tweet?text=' + sTitle + '&url=' + sURL + '" target="_blank"><img src="twitter-rev.svg" class="social-icon"></a> <a href="https://www.linkedin.com/shareArticle?mini=true&url=' + sURL + '&summary=' + sTitle + '&source=DEMO" target="_blank"><img src="linkedin2-rev.svg" class="social-icon"></a>';
    div.innerHTML = html;
    target.appendChild(div);
}

addHTML(cardTarget, url1, title1);
