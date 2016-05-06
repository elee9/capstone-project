# Pyxel

[Pyxels][website]

[website]: http://www.pyxels.co

Pyxels is a full-stack web application inspired by photo sharing websites. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Photo Index

The main page of Pyxels is the `Photo Index`. It gives the user a thumbnail overview of all photos in the database, sorted by the most recent first. The page also allows users to upload photos. Clicking on a photo will bring the user into a `Photo Detail` page.

![image of photo index](https://s3-us-west-1.amazonaws.com/pyxels-photos/readme+screenshots/Screenshot+2016-05-06+15.55.42.png)

### Photo Detail

This view shows the photographer, the title, and the description of the photo along with comments other users have left. You can make a comment, or click usernames to go to their `User Profile`.

![image of photo detail](https://s3-us-west-1.amazonaws.com/pyxels-photos/readme+screenshots/Screenshot+2016-05-06+15.54.50.png)


### User Profile

On each `User`'s profile, you will find detailed information on each user as well as all of the photos they have uploaded. If you are viewing your own page, you can edit your user information.

![image of user profile](https://s3-us-west-1.amazonaws.com/pyxels-photos/readme+screenshots/Screenshot+2016-05-06+16.49.32.png)
