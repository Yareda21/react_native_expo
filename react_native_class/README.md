- creating dark and light mode using themed designs 

- go to 'app.json' file and you will see ""userInterfaceStyle": "automatic"," but this setting detects our devices default scheme to be dark or light

- so in order to access this value in our app, we use hook 
'useColorScheme()' from react native, so we can import it and log it to see, the value inside the app


#how to design our app according to the device Dark or Light mode

for this we need external styling - go to constants - colors.js

