"use strict";

const addSiteToUrlBtn = document.getElementById('add-site-url-btn');
const goToNewSiteByUrlBtn = document.getElementById('go-to-site-by-url-btn');
let url = null;

addSiteToUrlBtn.addEventListener('click', () => {
    const urlInput = prompt('Add your url address')?.trim();

    if (!urlInput) {
        alert('No Martini, no party.')
    } else {
        try {
            new URL(urlInput);
            url = urlInput;
        } catch (e) {
            alert('Url is incorrect')
        }
    }
});

goToNewSiteByUrlBtn.addEventListener('click', () => {
    if (url) {
        document.location.href = url;
    } else {
        alert('Please, enter the url')
    }
});
