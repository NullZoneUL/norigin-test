# Samuel Hoyas Norigin Media technical test

** ***Important! [Node](https://nodejs.org/en/download) must be installed to run this project.*** **
<br>
Node version: **18.12.1**
<br>
npm version: **8.19.2**
<br>
*[nvm](https://nodejs.org/en/download) can be used to swith between different npm versions*
<br>
<br>
## **--- Init ---**
This first command will install all the needed dependences.
<br>
<br>
**-> npm i**
<br>
## **--- Starting dev server ---**
By default, the dev server runs in *localhost:8080*, but you can access it from any device of your local network by changing localhost to the ip of the device running the server.
<br>
<br>
**-> npm start**
<br>
## **--- Make a build ---**
Build destination: ./dist
<br>
<br>
**-> npm run build**
<br>
### **--- Change api url and port ---**
You can change the api url and port in *webpack.config.js*, in the variable `___BACKEND___`
