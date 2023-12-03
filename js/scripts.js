
function newItem(){

    // adding new element
    let li = $('<li></li>');
    let inputValue= $('#input').val();
    li.append(inputValue);

if(inputValue === ''){
    alert('You must write something before clicking Add button.')
}else{
    let list = $('#list');
    list.append(li);
}

//  function of strike 
function crossOut(){
    li.toggleClass('strike');
}
li.on('dblclick',crossOut);

// "x" 

let crossOutButton = $('<button></button>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

// delete in list 

function deleteListItem(){
    li.addClass('delete');
}

// re order items
$('#list').sortable();

}