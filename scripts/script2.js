window.onload = function(){
var modal = document.getElementById('myModal');
var books=localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [{title:'Inferno',author:'Dan Brown',isbn:'19991918',publisher:'Bantam Books',editer:'JD',price:'450',source:''},
{title:'Inferno',author:'Dan Brown',isbn:'19991918',publisher:'Bantam Books',editer:'JD',price:'350',source:''},
{title:'The DaVinci Code',author:'Dan Brown',isbn:'1212128',publisher:'europia Books',editer:'JD',price:'500',source:''},
{title:'World War Z',author:'Max Brooks',isbn:'45321918',publisher:'afluia Books',editer:'JD',price:'600',source:''},
{title:'IT',author:'Stephen King',isbn:'1323918',publisher:'dontcare Books',editer:'JD',price:'45000000',source:''},
{title:'Lost Symbol',author:'Dan Brown',isbn:'11223918',publisher:'whydoucare Books',editer:'JD',price:'860',source:''},
{title:'A Game Of Thrones',author:'George RR Martin',isbn:'143431918',publisher:'shutup Books',editer:'JD',price:'999',source:''}];

var cart=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

var modalImg = document.getElementById("img01");
var currenti
$('.shelf img').click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    for(i=0;i<books.length;i++){
        if(!books[i].title.localeCompare(this.alt)){
            $('#title').text(books[i].title);
            $('#author').text(books[i].author);
            $('#ISBN').text(books[i].isbn);
            $('#publisher').text(books[i].publisher);
            $('#editer').text(books[i].editer);
            $('#price').text(books[i].price);
            books[i].source=this.src;
            currenti=i
            localStorage.setItem('books', JSON.stringify(books));
            
        }
    }
    
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
    
}
$('#addo').click(function(){
    $('#lol').hide();
    cart.push(books[currenti]);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('book added to cart');
    
});
var modalc = document.getElementById('modalCart');
$('#cartid').click(function(){
    
    if((!localStorage.getItem('cart')) || cart.length==0){
        $('#checkout').hide();
        $('#cartbtn').hide();
        $('#lol').show();
    }
    else{
        $('#checkout').hide();
        $('#cartbtn').show();
        $('#lol').hide();
        
        $('#cartBooks').empty();
        for(i=0;i<cart.length;i++){
            $('#cartBooks').append("<div class='bookOne'><img src="+cart[i].source+"  style='float: left;'><div class='bookOneInfo'><table><tr><th>Title</th><td>"+cart[i].title+"</td></tr><tr><th>Author</th><td>"+cart[i].author+"</td></tr><tr><th>ISBN</th><td>"+cart[i].isbn+"</td></tr><tr><th>price</th><td>"+cart[i].price+"</td></tr></table></div> </div>");
        }
        $('#cartBooks').show();
    }
    modalc.style.display = "block";
});
var span = document.getElementsByClassName("closeCart")[0];
span.onclick = function() { 
    modalc.style.display = "none";
    
}

$('#cartClear').click(function(){
    
    cart=[];
    localStorage.setItem('cart', JSON.stringify(cart));
    $('#checkout').hide();
    $('#cartBooks').empty();
    $('#cartbtn').hide();
    $('#lol').show();
});

$('#buy_cart').click(function(){
    $('#cartbtn').hide();
    $('#lol').hide();
    $('#cartBooks').hide();
    $('#checkout').show();
    $(".col-25 .container h4 span b").text(cart.length);
    $(".col-25 .container #lastlist").empty();
    var sum=0
    for(i=0;i<cart.length;i++){
        $(".col-25 .container #lastlist").append("<p>"+cart[i].title+"<span class='price'>Rs. "+cart[i].price+"</span></p>");
        sum=sum+ parseFloat( cart[i].price);
    }
    $(".col-25 .container #totalamt").empty();
    $(".col-25 .container #totalamt").append("<p>Total <span class='price' style='color:black'><b>Rs. "+sum+"</b></span></p>");
    
    
});


}
