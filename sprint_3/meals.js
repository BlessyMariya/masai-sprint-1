window.addEventListener('load',function(){
    var button  = document.getElementById("meals")
    button.addEventListener('click',meals)
})
function meals() {
    var xhr =new  XMLHttpRequest();
    xhr.open('GET','https://www.themealdb.com/api/json/v1/1/categories.php')+document.getElementById("data").value;
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            console.log(result)
            displayDetails(result)

            function displayDetails(){
                var body = document.querySelector("body")
                for(var i =0;i<result["categories"].length;i++){
            
                    var para = document.createElement("p")
                    para.innerHTML = result["categories"][i].idCategory
                    body.appendChild(para)

                    var head = document.createElement("h1")
                    head.innerHTML = result["categories"][i].strCategory
                    body.appendChild(head)

                    var para = document.createElement("p")
                    para.innerHTML = result["categories"][i].strCategoryDescription
                    body.appendChild(para)

                    var para = document.createElement("p")
                    para.innerHTML = result["categories"][i].strCategoryThumb
                    
                    body.appendChild(para)

                }
            }
        }
        else {
            console.log('error code is:xhr.status')
        }
    }

}