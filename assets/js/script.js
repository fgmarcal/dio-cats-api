const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getGets = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();    
        return json[0].url;
    }
    catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImg.src = await getGets();
};

catBtn.addEventListener('click', loadImg);

loadImg();

