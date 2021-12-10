$("#clear").click(
    function(){
        localStorage.clear()
        $("#cart-body").empty()
    }
)

$("#addporduct").click(
    function(){
        var quantity = parseInt($("input.quantity").val())
        var name = String($("h1#name").text())
        var price = parseInt($("span#price").text())
        var img = "<img width='150px' src='"+$("#img").attr("src")+"'></img>"
        var cart = {
            name:name,
            price:price,
            quantity:quantity,
            img:img
        }
        var newcart = JSON.parse(localStorage.getItem("carts"))
        if(localStorage.carts==="[]"){//如果是空陣列
            console.log("if 是空陣列")
            var newcarts = []
            newcarts.push(cart)
            localStorage.setItem("carts",JSON.stringify(newcarts))
            console.log(localStorage)
        }else if(newcart){//如果陣列裡有物件
            console.log("else if 陣列裡有物件")
            var carts = JSON.parse(localStorage.getItem("carts"))
            var result = $.map(carts,function(item,index){
                return item.name
            }).indexOf(cart.name)
            console.log(result)
                if(result==-1){//判斷如果沒有相同物件
                    console.log("沒有相同物件")
                    carts.push(cart)
                    localStorage.setItem("carts",JSON.stringify(carts))
                    console.log(localStorage)
                }else{//判斷如果有相同物件
                    console.log("有相同物件")
                    carts[result].quantity=carts[result].quantity+cart.quantity
                    localStorage.setItem("carts",JSON.stringify(carts))
                    console.log(localStorage)
                }
            
        }else{//如果連陣列都沒有
            console.log("else 空")
            var newcarts = []
            newcarts.push(cart)
            localStorage.setItem("carts",JSON.stringify(newcarts))
            console.log(localStorage)
        }
        quantity = $("input.quantity").val(1)
    }
)

$("#cartbtn").click(
    function(){
        $("#cart-body").empty()
        var newcart = JSON.parse(localStorage.getItem("carts"))
        for(var i=0;i<newcart.length;i++){
            var addtocart = "<div class='cartitem'>"+newcart[i].img+"<ul><li><h5 id='deleid'>"+newcart[i].name+"</h5></li><li>特價："+
            newcart[i].price+"元</li><li>數量："+
            newcart[i].quantity+"</li></ul></div>"
            $("#cart-body").append(addtocart)
        }
        var total = 0
        for(var i in newcart){
            total += newcart[i].price*newcart[i].quantity
        }
        var sumhtml = "<div class='total'><h5>總價："+total+"元</h5></div>"
        $("#cart-body").append(sumhtml)
        
    }
)

$("#register").click(
    function(){
        alert("尚未開放註冊")
    }
)
$("#login").click(
    function(){
        alert("請輸入正確信箱！")
    }
)
$("#checkout").click(
    function(){
        alert("購買成功")
        localStorage.clear()
        $("#cart-body").empty()
    }
)
