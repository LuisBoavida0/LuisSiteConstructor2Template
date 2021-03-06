# LuisSiteConstructor2Template

This is a simple framework that will help you developing websites.

If you have any suggestions or questions, contact me at luis.128.b@gmail.com

## Start Up

To start the project first run:
```bash
npm install
```

If you want to run the project use this command (It will create a server on port 3000, if you want to change open server/serverStarted.js and change the port on the last line):
```bash
npm start
```

## Production

When you finish the project you can create a production project by running:
```bash
npm run makeProduction
```

If you want to run the production just run:
```bash
npm run runProduction
```
Or go to the production project folder and run:
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
 
## FAQ's:
   1. **project not compiling correctly** -> If for some reason the project is not working because it is not compiling correctly (and the fault isnt your's), just delete the server/fileChanges.txt file to make the project recompile
   2. **elem is giving undefined** -> you can only access elem after all the code index is readed. so to access it use window.onload function. If you use elem in any function that will be called after the code is readed it works. If you want to pass an elem as an argument from a event (on the variables eventsToUse), you can pass the name of the elem (for example "username") and then on the function trigger call as an array elem["username"].
   3. **When Production is created there is some files missing or there is too many files** -> Just open server/productionMaker/productionMaker.js and edit projectStructure variable.
