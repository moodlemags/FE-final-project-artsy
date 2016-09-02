# Maggie's TBNamed Artsy Platform

***

### Overview:
This app can be used a study guide of sorts for those who want to learn more about art or just be exposed to beautiful works by artists throughout time and space without being overstimulated. Throughout my academic education, I always struggled to find resources in the ever developing tech world to help me study for art history exams -- surprisingly, the best option always ended up as notecards and printed images. This app is a step in the right direction towards a completely automated and customizable art history study tool.

### Specs:

This app was built with a React Front-end and styled with assistance from Bootstrap-react. The back end is mostly Ruby on Rails which accesses the Artsy API (which is in beta still) and uses Firebase for a database.

### How to use:

There are two different main features to this app - the "discover" component and the "learn" component. The user is meant to first direct their attention to the discover component where they are able to input an artist name and see a work by the artist displayed. The user can then learn more about the artist and different styles and techniques they are affiliated with by pressing the learn more button, which grabs "genes" from the Artsy API and displays descriptions of them for the user to learn more about the artist and their period. From there, the user can store the piece in their database and move on to the "Learn" section. The Learn section hits up the Firebase database and grabs a randomly selected stored image from what the user has saved and then gives a randomly selected number of genes, the user can click on a gene to see if they have guessed right and therein learn more about the artist. The Explore section allows the user to go into their database and find and delete different artists.

### Problems/What's Left:

I had the worst trouble hosting, which is why this isn't hosted. Additionally, I need to find a way to have my token pass and be able to make the api call without re calling it in each method. Lastly, I have to render my CRUD, which is all coded but not rendered.
