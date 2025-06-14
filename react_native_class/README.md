# Appwrite Backend and Safe Area View

## Safe Area View 

- create a file called New.tsx and use customized themed view for safe area view

## Backend Using Appwrite
### appwrite SDK integration
go to appwrite create a project
go to the docs of appwrite for the integration `https://appwrite.io/docs/quick-starts/react-native`
install the packages for the appwrite 
`npx expo install react-native-appwrite react-native-url-polyfill`

create a folder called `lib` in the root directory an create a file called `appwrite.js` which serves as an upwrite setting file - <b>Look at the appwrite file</b>

Now lets create a `context` - to give access to login, logout and register function alongside with other functionalities 


### Create Context 
create a folder called context with useContext component

afteer creating a dummy functions, we go to rootlayout file wrap our app with it and create the custome hooks 

### Creating custom hooks
create a folder called `hooks` and inside create a componenet called `useUser.tsx`

### Using the context in Login
go to Login page create the user and console.log the value inside the handleSubmit to see the user to be `null`
that is because there is no logic inside of login function inside of the context

### Logging user in 
first lets do `register function`
what do we need when we register an person 
`creating an account,`
`creating unique id for the user`
- to do that 
first lets import the `account` from the appwrite SDK to the context

then import ID from react-native-appwrite module to generate an ID for each user

once we are done with creating login and register function, we need to update the `Login.tsx` and `Register.tsx` component functions 

### Login.tsx and Register.tsx handleSubmit function updates 
first get the `login` and `register` function from the `useUser` hook for the each components respectively


* then try registering on the app, it should run the login by default
* also check on the appwrite website backend on `Auth` section - left side menu