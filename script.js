//your JS code here. If required.
let colorForm = document.getElementById("form-action");

colorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let gridNo = document.getElementById("block_id").value;
    let color = document.getElementById("colour_id").value;
  

    let block = document.getElementById(gridNo);

    block.style.backgroundColor = color;

});

colorForm.addEventListener("click", () => {
    let grids = document.querySelectorAll(".grid-item");
    grids.forEach( (item)  => {
        item.style.backgroundColor = 'transparent';
    });
});