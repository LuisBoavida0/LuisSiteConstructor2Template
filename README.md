# LuisSiteConstructor2Template

This is a simple framework that will help you developing websites.

If you have any suggestions or questions, contact me at luis.128.b@gmail.com

## Start Up

To start the project first run:
```bash
npm install
```

If you want to run the project use this command (It will create a server on port 3000):
```bash
npm start
```

## Which files will you need to use and what are they for (open the files as you go through):
   1. router.js - This is the file where you will store all the routes and the information about them, you can study the file by open it.
   2. .js main file - when you create a route you can set a js file to be runned with the page, it is there where you will implement youre page logic (see public/js/index.js to see how to use it). PS: You can also use typescript on the project
   3. .hbs files - handlebars files are html files but with the possibility to make dynamic html. when you create a route you set which hbs will be your page and which partials will it use. (learn more about handlebars [here](https://handlebarsjs.com/))
   4. SCSS files - SCSS is a framework to build css in an easier way. You need to include on the hbs pages which scss files you want to use (include them with the .css extension because the scss files will be compiled to css ones). To learn more about sass go [here](https://www.w3schools.com/sass/)
   5. public/server files - This javascript files you wont need to edit them that much, but they do come in handy
      * helper.js - This file is where you will declare any global variable you want to use in the project
      * globalImports.js - If you want to import something globally you need to import them in this file and then set the import into a helper.js global variable to be accessible.
      * server.js - This file you probably wont need to edit it, but what this do is, it compiles the handlebars code.

## Other important information:
   1. If for some reason the project is not working because it is not compiling correctly (and the fault isnt your's), just delete the server/fileChanges.txt file to make the project recompile