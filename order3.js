let maincon = document.getElementById("orderedItemsContainer");
let unorder = document.getElementById("unorder");

let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

function deletion(okay) {
    let del = document.getElementById(okay);
    unorder.removeChild(del);
}

function lining(okay) {
    let liid = "item" + okay.uniqueNo;
    let buttonid = "button" + okay.uniqueNo;

    let li = document.createElement("li");
    li.id = liid;
    li.classList.add("dot");
    unorder.appendChild(li);

    let con = document.createElement("div");
    con.classList.add("d-flex", "flex-row", "justify-content-center", "mt-3");
    li.appendChild(con);

    let comment = document.createElement("h1");
    comment.textContent = okay.itemName;
    comment.classList.add("heading");
    con.appendChild(comment);

    let button = document.createElement("button");
    button.textContent = "Cancel";
    button.id = buttonid;
    button.classList.add("btn", "btn-danger", "button1", "ml-3");
    con.appendChild(button);
    button.onClick = function() {
        deletion(liid);
    }
}


for (let okay of itemList) {
    lining(okay);
}


console.log(maincon);