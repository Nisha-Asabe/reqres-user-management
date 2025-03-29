# Overview

This React application allows users to manage a list of users retrieved from the Reqres API. It includes authentication, user listing with pagination, and the ability to edit and delete users.

## Features
User Authentication: Login using provided credentials.

User List: Fetch and display paginated users from the Reqres API.

Edit Users: Modify user details and update the UI in real time.

Delete Users: Remove users from the list.

Pagination: Navigate between pages of users.

Error Handling: Displays error messages for API failures.

## Prerequisites

Ensure you have the following installed:

Node.js (>=14.x recommended)
npm or yarn

## Installation

1. Clone the repository:
   
   git clone https://github.com/your-repo/reqres-user-management.git
   cd reqres-user-management
   
3. Install dependencies:
4. 
   npm install
   # or
   yarn install

## Running the Application

1. Start the development server:
   
   npm start
   # or
   yarn start
   
3. Open your browser and navigate to:
   
   http://localhost:3000


## Usage

### Login

Use the credentials:

Email: eve.holt@reqres.in

Password: cityslicka

On successful login, the token is stored, and the app navigates to the user list.

### View Users

Users are fetched from the API and displayed in a paginated list.

Click "Previous" and "Next" buttons to navigate through pages.

### Edit Users

Click the "Edit" button next to a user.

Modify the first name, last name, or email.

Click "Save" to update the user.

### Delete Users

Click "Delete" to remove a user from the list.

### Assumptions & Considerations

The Reqres API is a mock API, so changes made (edits or deletions) are not persisted.

The user list updates locally to reflect edits and deletions instantly.

Session storage is used to manage login persistence.

Navigation is handled using React Router.



