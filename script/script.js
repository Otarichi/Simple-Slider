let slides = [
    {
        img: "img/image1.png",
        blText: "FOOD AND LIFE",
        title: "Succed in hotel business",
        description: "Fresh food directly from our restaurant ready coocked for you"
    },
    {
        img: "img/image2.png",
        blText: "COOKING",
        title: "Cooking delicious food",
        description: "Fresh food directly from our restaurant ready coocked for you"
    },
    {
        img: "img/image3.png",
        blText: "FRUITS",
        title: "Getting fresh fruits",
        description: "Fresh food directly from our restaurant ready coocked for you"
    },
]

indexes = [
    2,
    0,
    1
]

let index = 0;
document.getElementById("right-btn").addEventListener('click', () => {
    console.log(document.querySelectorAll(".slide").forEach((element) => {
        element.getElementsByTagName("img")[0].src = slides[indexes[index]].img;
        element.getElementsByTagName("h4")[0].innerHTML = slides[indexes[index]].blText;
        element.getElementsByTagName("h3")[0].innerHTML = slides[indexes[index]].title;
        element.getElementsByTagName("p")[0].innerHTML = slides[indexes[index]].description;
        index+=1;
        if(index>slides.length-1){
            index = 0;
        };
    }));
    let in_0 = indexes[0];
    let in_1 = indexes[1];
    let in_2 = indexes[2];
    indexes[0]=in_1;
    indexes[1]=in_2;
    indexes[2]=in_0;
})

document.getElementById("left-btn").addEventListener('click', () => {
    console.log(document.querySelectorAll(".slide").forEach((element) => {
        element.getElementsByTagName("img")[0].src = slides[indexes[index]].img;
        element.getElementsByTagName("h4")[0].innerHTML = slides[indexes[index]].blText;
        element.getElementsByTagName("h3")[0].innerHTML = slides[indexes[index]].title;
        element.getElementsByTagName("p")[0].innerHTML = slides[indexes[index]].description;
        index+=1;
        if(index>slides.length-1){
            index = 0;
        };
    }));
    let in_0 = indexes[0];
    let in_1 = indexes[1];
    let in_2 = indexes[2];
    indexes[0]=in_2;
    indexes[1]=in_0;
    indexes[2]=in_1;
})