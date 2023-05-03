# Smart Marine Task - Task Manager Web Application

This repository contains the source code for a simple web application that allows users to create and manage a list of tasks. The application has been built using Node.js and React, and uses Sequelize ORM to interact with a Postgres database.

## Functionality

The application has the following functionality:

- Create a new task by entering a title and description.
- View all tasks, sorted by their status.
- Update the status of a task .
- Delete a task

## Technology Stack

- Node.js
- React js
- Sequelize ORM
- Postgres database
- CSS framework : Tailwind CSS
- State management library : React Query

## Prerequisites

Before running the application, ensure that the following are installed:

- Node.js
- Postgres database

## Installation

1.  Clone the repository

```sh
git clone https://github.com/abdelkebir7Y/sm-test.git
```

2.  Install the dependencies

```sh
cd server
npm install
```

```sh
cd client
npm install
```

3.  Create a Postgres database

```sh
createdb YOUR_DATABASE_NAME;
```

4.  edit the `index.js` file inside `./server/config` folder

```
module.exports = {
	development: {
		db: {
			options: {
				host:  "HOST",
				port:  PORT,
				database:  "YOUR_DATABASE_NAME",
				dialect:  "postgres",
				username:  "YOUR_DATABASE_USERNAME",
				password:  "YOUR_DATABASE_PASSWORD",
				...
			},
	...
	}
...
```

5.  Start the application

```sh
cd server
npm start
```

```sh
cd client
npm start
```

The application will be accessible at `http://localhost:3000`.
