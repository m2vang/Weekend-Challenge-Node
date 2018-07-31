let employee = [];

class Employee {
    constructor(name, lastName, idNumber, title, annualSalary) {
        this.name = name;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.title = title;
        this.annualSalary = annualSalary;
    }// end of constructor

}//end of Employee class

$(document).ready(onReady);

function onReady() {
    //create table
    let table = $('<table align="center"></table>');
    table.append(
        `<thead><tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Id Number</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th>Delete</th>
        </thead>`
    );

    //create table body
    let tbody = $('<tbody id="tablebody"></tbody>');
    //add table body to table
    table.append(tbody);

    //add table to data div
    $('#data').append(table);

    //run clickHandler
    //clickHandlers should only be call once, not multiple times
    clickHandler();

} //end of onReady

function clickHandler() {
    //adding employee when submit button is clicked
    $('#submit').on('click', addToTable);

    //removing employee
    //target #tablebody, which is the parent of the delete button
    //then target the #delete of the delete button when clicked and run the removeEmployee()
    if ($('#tablebody').on('click', '#delete', removeEmployee));

} //end of clickHandler

let mSalary = [];

function addToTable() {
    //variables
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let Id = $('#Id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let monthlySalary = Math.floor(annualSalary / 12);
    //push the monthly salary into the mSalary array
    mSalary.push(monthlySalary);

    //***create new employee & push it into the employee array
    //let newEmployee = new Employee( $('#first-name').val(), $('#last-name').val(), 
    //$('#Id').val(), $('#title').val(), $('#annual-salary').val() );
    //line below is a better way to code for the same two lines above
    employee.push(new Employee($('#first-name').val(), $('#last-name').val(),
        $('#Id').val(), $('#title').val(), $('#annual-salary').val()));

    //adding value input to the table body
    $('#tablebody').append(
        '<tr id="row"><td>' + firstName +
        '</td><td>' + lastName +
        '</td><td>' + Id +
        '</td><td>' + title +
        '</td><td class="salary">' + '$' + annualSalary +
        '</td><td><button id="delete">X</button></td>' +
        '</tr>');

    updateMonthlyCost();

    //empty each input
    //faster way to clear inputs instead of targeting each input's id
    $('#inputs input').val('');
    // $('#first-name').val('');
    // $('#last-name').val('');
    // $('#Id').val('');
    // $('#title').val('');
    // $('#annual-salary').val('');

} //end of addToTable

function getSum(total, num) {
    return total + num;
} //end of getSum

function removeEmployee() {
    let aSalary = $(this).parent().find('.salary');
    console.log('aSalary');
    test = parseInt(((mSalary.reduce(getSum).toFixed(2)) - aSalary) / 12);
    console.log('test', test);
    //remove the row
    $(this).parent().parent().remove();
    //$('#row').remove();

    updateMonthlyCost()
}//end of removeEmployee

function updateMonthlyCost() {
    //update the dom
    //updating mSalary & displaying it after clicking on submit
    $('.monthlySal').html('Total Monthly: $' + mSalary.reduce(getSum).toFixed(2)); //.reduce means that it'll reduce the array to a single value

    //change total monthly background color to red if mSalary is greater than 20000
    if (mSalary.reduce(getSum).toFixed(2) > 20000) {
        $('#footer').css('background-color', 'red');
    }//end of if statement

}//end of updateMonthlyCost