/*To create global imports first create the variable that will contain the import in 
  helper.js and then import the module here and set the variable to that*/
import handlebarsImport from 'handlebars'
//Handlebars variable is created in helper.js and it is being equalled to handlebarsImport, and now the module is accessible globally
Handlebars = handlebarsImport 

//If you want to use bootstrap (you need to run "npm install bootstrap@latest --save-dev" bootstrap)
//import "bootstrap"
//If you want to use only one part of bootstrap (Only the js part)
//import "bootstrap/js/dist/modal"
//import "bootstrap/js/dist/alert"