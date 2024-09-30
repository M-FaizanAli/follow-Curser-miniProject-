const main = document.querySelector(".main");
const pointer = document.querySelector(".box");

main.addEventListener("mousemove", (ele) => {
    pointer.style.left = ele.x+"px";
    pointer.style.top = ele.y+"px";
}); 