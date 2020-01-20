# Övningar med Lowdb

## Instruktioner

Dokumentation för Lowdb hittar ni [här](https://github.com/typicode/lowdb).

1. Installera lowdb med **npm install lowdb (--save om du vill spara den i din package.json)** samt **express**.

2. Skapa en ny databas som heter **names** och sedan följande:
    * Lägg in fem objekt, varje objekt ska ha egenskaperna **firstname**, **lastname**, **age**. Programmatiskt alltså inte direkt i din names.json.
    * Hämta alla namn från databasen. Hämta alla namn efter det sorterat på förnamn.
    * Hämta det tredje namnet.
    * Hämta alla åldrar och sedan summera dessa.
    * Byt förnamn och ålder på det fjärde namnet.
    * Ta bort det andra namnet från databasen.

3. Nu ska du bygga en sida där du kan skapa ett konto samt logga in. Användaren ska alltså kunna från din sida logga in samt skapa en konto. När man registrerar  ett konto ska andvändaren ange användarnamn, lösenord och e-postadress. Det ska inte vara möjligt att registerera sig med ett användarnamn eller en e-post som redan finns. När en användare försöker logga in ska användarnamn och lösenord kontrolleras mot databasen.

4. Först skapa en ny databas som heter **accounts**. 

5. Skapa sedan två endpoints i din Node.JS - fil som heter **/api/login** och **/api/signup**.
    * **/api/login** - tar användarnamn och lösenord som har skickats in och kollar om det finns samt är samma som i databasen. Endpoint:en ska returnera ett objekt med egenskapen **success** som antingen är true eller false till klienten.

    * **/api/signup** -  tar emot användarnamn, lösenord, och e-post och kontrollerar så att användarnamn och e-post inte redan finns i databasen. Endpoint:en ska returnera ett objekt med egenskaparna: **success**, **usernameExists** och **emailExists**. Alla egenskapar är antingen true eller false.
