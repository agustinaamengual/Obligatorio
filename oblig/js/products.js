function sortProducts(criteria, array){

}

var currentProductsArray = [];

function showProductsList(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let products = currentProductsArray[i];
        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted">`  + products.cost + " " + products.currency + ` </small>
                           
                        </div>
                        <p class="mb-1">` + products.description + `</p>
                       
                    </div>
                    
                </div>
            </a>`
}
  document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            currentProductsArray = resultObj.data;
            showProductsList(currentProductsArray);
        }
    })

});