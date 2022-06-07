/*This file is called by the router.js (Its the main file of the html page example called index)
  All the code below is example, you will only need the startTemplate if you are 
  using variables in your html file and eventsToUse if you are using any event
*/
//If you want to import any nodeJS module
//import importSomething from 'nodeModule'

//Use this global variable declared in helper.js to set the data needed when the website is loaded
startTemplate = {
    foo: [
        'bar1',
        'bar2'
    ],
    foo2: "bar3"
}

/*Use this global variable to set the events needed for the project
  Each event contains the folowing information :
        [ 
            Element ID (on the HTML element set an attribute called elemId to be able to access it),
            Event (the event itself (ex: click, to know all events please go to https://www.w3schools.com/jsref/dom_obj_event.asp)),
            Function to be called when the event is triggered,
            The values needed to go to the event (event variable already goes automatically) (OPTIONAL if you dont want to send any variable)
        ]
*/
eventsToUse = [
    ['fooBtn', 'click', fooClick],
    //This event is an example of a form submit, you can pass arguments like this
    ['loginForm', 'submit', login, ["foo", "bar"]]
]

//e is optional, (e contains the event and to get the element use e.currentTarget)
function fooClick(e) {
    alert(e.currentTarget.innerHTML + "event was triggered")
}

function login(e, foo, bar) {
    e.preventDefault()
    alert(`The data sent from the form is: ${elem.username.value} and ${elem.password.value}`)
    //elem global variable will have all the elements with the attribute elemId
    //It can only be runned after the html was compiled (after server/server.js was runned)
    console.log(foo)
    console.log(bar)
}

/*To get an element through the elemId the page first need to be loaded 
(the elemId attribute will be removed once the page loads but they are still accessible)*/
window.onload = function () {
    //If you want to inject html you can use this function. it will use Handlebars so you can send the variables as below
    elem.endParagraph.addCode(`
        This code is injected with the following value: {{foo}}
    `, { foo: 'bar' })

    /*If you want to get an element from the html that doesnt have the attribute elemId, you can use getElem or getElems */
    getElem('html>body')
    getElems('div') //Will get an array
}

/*If you want to send a function to another js file you need to use the export keyword 
(and import the js file you are going to use the exported function on, as you can see below)*/
export function exportedFunction() {
    console.log("this function was exported and is being called on index2.js")
}

/* If you want to use another js file in the project, you have to declare them in here like this 
   (The compiler will them combine them)*/
import './index2.js';