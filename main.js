const audrey = document.getElementById("audrey");

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
//    console.log(event);
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    const yvalue = (event.path[1].scrollY)/3
    // console.log(yvalue)
    // let aValue = audrey.style.width
    // aValue=yvalue+'px';
    audrey.style.width=`${yvalue}px`;
    // console.log(aValue)
    // console.log(audrey.style)



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   const neyValue = (event.path[1].scrollY)/4;
   audrey.style.height =`${yvalue}px`;
})