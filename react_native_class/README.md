# Map view

install `npx expo install react-native-maps` by going to
https://docs.expo.dev/versions/latest/sdk/map-view/

go to dashboard to see more

# ask user location area

we need to install expo-location module
https://docs.expo.dev/versions/latest/sdk/location/
npx expo install expo-location

lets create a context of the user location
As usual

-   create UserLocationContext
-   Create useLocation hook
-   wrap the auth layout with the context

then import much of the code from doc to your dashboard

# user marker

on dashboard.tsx

-   inside the mapView add the marker
-   loading of data should be done
-   adding user info on top of the map

# Google place Auto Complete

1 - create searchbar component

-   we create a component based on react native google places autocomplete

https://www.npmjs.com/package/react-native-google-places-autocomplete/v/1.7.2

-   use all the code from the RN GP autocomplete,
-   but for the function to work we need to enable google places api
-   once you enabled it, you need to go to `API's and Services`
-   on the left hand side menu, go to `Credentials`, then `Create Credentials` then `API key` then copy the key
-   then add the key to your search bar
-   then try searching something, it should popup

*   now lets pass the searched location from the component to the dashboard and console log it

## 3d view

-   first install the dependencies
    react native webview - expo install react-native-webview
-   go to deepseek

2. Google places api fetch

-   we fetch nearby places based on the users location
    to fetch nearby search request we need to use HTTP POST request to this url

`https://places.googleapis.com/v1/places:searchNearby`

now lets create a global Api file to use this in lib folder - GlobalApi.js

-   After creating the GlobalApi.js go to the dashboard and create the useEffect to get the nearby churches

-   to find places types just type `google places api types`

-   if you finidh this, copy all the data from the console and create a json file and see it if it correct

## protected dashboard should only have 3 tabs -> MAP, Favorite, and Profile

# Next Class - Display Church info

-   collect the data in one state by creating placesList state
-   then add setPlacesList(res.data) to the useeffect hook in dashboard

-   now lets create a component for this datas to be displayed - PlaceListView.jsx

-   in order to render the each places create PlacesList component that will be added to the placeslistview
    also make sure to use dummy photo for now but use the following instructions to make the image workable

# Adding markers of the churchs on the map
