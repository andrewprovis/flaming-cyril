/**
 * Created by aprovis on 29/04/2015.
 */

/**
 * jQuery document.ready runs once the page has loaded.
 *
 * I'm using this to bind my functionality to initial elements on the screen.
 */
$(function() {
    console.log( "ready!" );

    $(".add-button").on("click", addItem);
});


/**
 * Adds item to the In Progress list from the input field at the top. Will only add an item if there is one to enter.
 * @param event
 */
function addItem(event) {
    //console.log(arguments);

    // Checks of there is any text in the input and if not then the function will exit.
    if (document.getElementsByName('todo-input')[0].value === '') {
        return;
    }

    // Adds to-do item to the list.
    $('#ToDo').append(
        '<li class="todo-item">' +
            '<div class="item-text">' +
                document.getElementsByName('todo-input')[0].value +
                '<span class="edit-button"></span><span class="completion-button"></span>' +
            '</div>' +
        '</li>'
    );

    // Resetting the input field at the top ready for anything else to be entered.
    document.getElementsByName('todo-input')[0].value = '';
}


function deleteItem() {

}