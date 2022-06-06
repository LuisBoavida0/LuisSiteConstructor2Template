/*This is your routes page, here is where you contain all the routes needed.
  Each route can contain the following keys:
    *template - Which hbs file it is to be loaded (hbs files are like html but they allow 
                dynamic html (learn more here (https://handlebarsjs.com/)). In this project you will 
                use hbs files instead of html files, but you dont need to use the dynamic html

    partials - Which partials/layout are you going to use on that page (Just write the file name without the extension)

    startValues - Which starting values does the handlebars will need to be loaded correctly 
    (you can also add them on the front end on the startTemplate global variable)

    js - Which javascript file are you going to use (only add one, if you want to use multiple them import them on that js file)
*/
export const routes = { //Routes
    '/index': {
        template: 'html/index.hbs',
        partials: ['layout', 'header/header1'], //The default path for partials is html/partials
        startValues: {
            nextPage: "Home"
        },
        js: 'index.js',
        //js: 'indexTS.ts' //If You are using typescript
    },
    '/home': {
        template: 'html/home.hbs',  //Only the template is required, the other are optional
    }
}

/* The default folder for the partials is html/partials, if you want to change it you need to declare them like this:*/
/*export const partials = {   //Declare all Partials (Optional)
    'header': 'html/partials/header.hbs',
    'footer': 'html/partials/footer.hbs',
    'layout': 'html/partials/layout.hbs',
    'header/header1': 'html/partials/header/header1.hbs'
}*/

/* The default folder for js is public/js, if you want to use another, for example if you are using typescript, then declare this variable:*/
//export const ts = 'public/ts'

/*If you want to use javascript but you want to use another folder, then declare this variable instead (dont use both):*/
//export const js = 'public/js'