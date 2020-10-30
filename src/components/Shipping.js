import React from "react";
// import ShippingContent from "./ShippingContent.json"

function Shipping() {
    return (
        
            <div class="row my-3 border text-center">
                <div class="col-6" id="shipping">Shipping Options</div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1"></label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>free $0</option>
                        <option>Overnight $20</option>
                    </select>
                </div>
            </div>
        
    )
}

export default Shipping;