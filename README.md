# Lineup
This project allows user to create a starting lineup and formation for Racing Louisville FC, a soccer team that plays in the NWSL. On mobile screens, it lists 11 players and their positions in a column view and on a desktop, it will display the players similar to how they would lineup on a soccer field. Users can select which player from Racing Louisville's roster they would like at each position. They can also select which formation they would like to use. This changes the listed position on the page and also where they appear on desktop views. 

The project to meet the Code Louisville course requirements is lineup.html. The roster.html document is additional content I am still working on.

## Current Features
1. Uses JS to generate drop-down list of players that are stored in an object.
2. Uses JS to change image and hometown elements on the page based on which option the user selects from the drop-down.
3. Uses CSS Flex-box to display the players in a column view on smaller screens.
4. Uses Media Query to add player photos once screen reaches a certain width.
5. Uses Media Query to change flex-box properties on wider viewports. This view shows players where they would lineup on a soccer field.
6. When user clicks a formation button, JS function runs to change HTML and flex-basis properties on elements, changing the number of elements on a row.