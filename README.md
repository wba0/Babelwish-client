Babelwish
------

### [Main Repository](https://https://github.com/wba0/Babelwish)

##### Development setup:

1. Clone [Server Repo](https://https://github.com/wba0/Babelwish).
2. Clone [Client Repo](https://https://github.com/wba0/Babelwish-client) (this one).
3. Start MongoDB.
4. Backend runs on localhost:3000 (npm run reload), front end runs on localhost:4200 (ng serve).
5. Use Angular CLI to build: ng build -prod --aot.


##### Purpose:
This app was built as a proof of concept to demonstrate what a "freelance translation for animal welfare" website would resemble. Users can post a short translation job to which translators can apply and work on. When a job is submitted for approval, the translator specifies the animal welfare organization of their choice that will be paid directly for their work.

#### Considerations:

The PayPal integration is for demonstration purposes only, as I only have a regular PayPal for Developers account which does not provide live credentials.

What is the best way for animal welfare organizations to receive donations that can also be integrated into such an app as this one? There may exist better solutions than PayPal which requires an email address that is not always available on these organizations' websites.


### Created using [Angular2](https://angular.io), [Node.js](https://nodejs.org), [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/).

### [Live link](http://babelwish.herokuapp.com/)

### MIT License
