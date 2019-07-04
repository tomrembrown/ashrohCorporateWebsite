# Company Website - Ashroh Enterprises

This is a Single Page Application that has the code for the corporate website of Ashroh
Enterprises Inc.  It is built using PostgreSQL 11, NodeJS, Express, VUE, and BootStrap 4.3.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
A Linux OS
node version 12.5.0 or later
npm version 6.9.0 or later
PostgreSQL 11.4 with postgresql-contrib
```

### Installing

Clone GIT repository and download

```
https://github.com/tomrembrown/ashrohCorporateWebsite
```

Update npm, node, and postgresql to latest versions and install postgresql-contrib. This projects currently uses npm 6.9.0, node 12.5.0, PostgreSQL 11.4.

```
sudo npm update -g npm
sudo npm install -g n
sudo n latest
echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main 11"
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update && sudo apt-get install postgresql-11
sudo apt-get install postgresql-contrib
```


Build NPM script

```
npm install
```

Create environment file (copy either .env_prod or .env_dev)

```
cp .env_development .env
```

Determine port postgres runs on

```
sudo netstat -plunt |grep postgres
```

Build PostgreSQL initial database and add extension. 

```
su - postgres (enter postgres user password)
psql --port (port determined for postgresql server)
CREATE DATABASE ashroh_enterprises;
CREATE ROLE ar_computer_access WITH ENCRYPTED PASSWORD (enter password here);
GRANT ALL PRIVILEGES ON DATABASE ashroh_enterprises TO ar_computer_access;
ALTER ROLE "ar_computer_access" WITH LOGIN;
CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
\c ashroh_enterprises
CREATE EXTENSION IF NOT EXISTS citext;
```

Adjust parameters in .env as necessary (such as postgres port and ar_computer_access password)

Create the database tables

```
npm run createDatabase
```

Increase the number of watches allowed for nodemon to work properly

```
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

For development mode, start the server

```
npm run dev
```

In development mode, run webpack-dev server in browser at localhost:8080

For production mode, first build the bundles

```
npm run build
```

In production mode, run the node-express server at localhost:3000

```
npm run prod
```

## Running the tests

Tests are not currently configured

### What the tests do

These tests handle linting with jshint, link checking, and some cross-page and unit tests.

## Built With

* [Node.JS](https://nodejs.org/) - JavaScript runtime that allows server-side JavaScript
* [Express](https://expressjs.com/) - Backend framework
* [PostgreSQL 11](https://www.postgresql.org/) - Database
* [Vue.js](https://vuejs.org/) - Frontend framework

## Contributing

This is a proprietary project.  Please ask Tom Brown (tom@tomrembrown.com) to add you to the private github repository in order to contribute.

## Authors

* **Tom Brown** - *Initial work*
* **David Yim** - *Access APIs to gather event data automatically*

See also the list of [contributors](https://github.com/tomrembrown/QTCommunity/contributors) who participated in this project.

## License

This project is proprietary - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Following along Ethan Brown's book 'Web Development with Node & Express' was useful
* Watching the NodeJS - The Complete Guide by Maximilian Schwarzmuller on udemy.com was helpful to upgrade the node and express to the latest ES2016 code.
* The series "You Don't Know JS" by Kyle Simpson was helpful to make sure the JavaScript was coded properly.
* Super sweet David Yim has provided much advice, support and encouragement :-)
