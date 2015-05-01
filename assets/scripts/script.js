/**
 * Created by aprovis on 29/04/2015.
 */

/**
 * jQuery document.ready runs once the page has loaded.
 *
 * I'm using this to bind my functionality to initial elements on the screen.
 */
$(function() {
    loadItems();

    $(".add-button").on("click", createNewItem);

    $('#todo-input').keypress(function (e) {
        if (e.which == 13) {
            createNewItem();
            return false;
        }
    });

    $("#ToDo").on("click", ".completion-button", closeItem).on("click", ".delete-button", deleteItem);

    $("#Complete").on("click", ".completion-button", openItem).on("click", ".delete-button", deleteItem);
});

/**
 * Adds item to the In Progress list from the input field at the top. Will only add an item if there is one to enter.
 * @param event
 */
function loadItems() {

}

function createNewItem() {
    // Checks of there is any text in the input and if not then the function will exit.
    if (document.getElementsByName('todo-input')[0].value === '') {
        return;
    }

    addNewItem(document.getElementsByName('todo-input')[0].value);

    // Resetting the input field at the top ready for anything else to be entered.
    document.getElementsByName('todo-input')[0].value = '';
}

/**
 * Adds item to the In Progress list from the input field at the top. Will only add an item if there is one to enter.
 * @param event
 */
function addNewItem(itemText) {
    // Adds to-do item to the list.
    $('#ToDo').append(
        '<li class="todo-item">' +
            '<div class="item-text">' +
                itemText +
                '<span class="completion-button"></span><span class="delete-button"></span><span class="edit-button"></span>' +
            '</div>' +
        '</li>'
    );
}

function closeItem() {
    $(this).parent().parent().prependTo('#Complete');
}

function openItem() {
    $(this).parent().parent().appendTo('#ToDo');
}

function deleteItem() {
    var item = $(this).parent();

    // Removes the spans but leaves the text.
    item.children('span').remove();

    item.parent().remove();
}