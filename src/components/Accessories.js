import React from "react";
import AccessoriesContent from "./AccessoriesContent.json"

function Accessories() {

    function getTotal() {

        let total = 0;
        AccessoriesContent.map((item) => {
            let e = document.getElementById(item.title);
            let result = e.options[e.selectedIndex].value;
            console.log(e.options[e.selectedIndex].value)
            console.log(total)
            total += parseInt(result)
        })
        document.getElementById("total").innerHTML = `Total: $${total}`;
    }

    return (
        <>
            {AccessoriesContent.map((item) => {
                return (
                    <div class="row my-3 border">
                        <div class="col-4">{item.title}</div>
                        <div class="col-4">${item.cost}</div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Amount</label>
                            <select class="form-control" onChange={getTotal} id={item.title}>
                                <option value={parseInt(item.cost) * 0}>0</option>
                                <option value={parseInt(item.cost) * 1}>1</option>
                                <option value={parseInt(item.cost) * 2}>2</option>
                            </select>
                        </div>
                    </div>
                )
            })}
            <div id="total" class="row my-3 border"></div>
        </>
    )
}

export default Accessories;