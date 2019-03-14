## RP on Rails (client)

This is the front end for RP on Rails, a web application that helps tabletop RP GMs keep track of their campaign locations, and related plots.

As a bonus feature, GMs can create a pool of risks and rewards with their players to create a black box. Every time players change locations, or whenever the GM feels like, they can randomly generate a risk or reward. The risk or reward used will show up as used. Please see Zee Bashew's [How I DM](https://www.youtube.com/watch?v=vKQv4GC0N9Q) for an example.

The back end for this app is built on Rails. The repository is [here](https://github.com/TaraYoo/rp-on-rails)

#### Locations
Add your campaign locations, see all of them laid out as their own cards, and click on a location card to update or delete them.

You can also click the generate risks or rewards button to pull, and use, a random risk or reward

#### Risks & Rewards
Risks and rewards are labelled bokbulbok in the code - which is a Korean slang for mystery items that could either be great or terrible. You can see all risks and rewards, delete a risk or reward, and draw a random risk or reward from an individual location card.

#### Technologies Used
 [Materialize](https://materializecss.com/getting-started.html)<br>[Node.js](https://nodejs.org/en/)<br>[jQuery](https://jquery.com/)<br>[Handlebars](https://handlebarsjs.com/)

#### Future Goals
<ul>
  <li>Write valid tests for the front end</li>
  <li>Reorganize the file structure to make more sense</li>
  <li>Use Vue.js to represent locations as connected nodes</li>
  <li>Show used risks or rewards cards in grey to clearly show which ones were used</li>
  <li>Add more styles to sidenav</li>
  <li>Write a more efficient interaction between the front and back end</li>
</ul>

#### Planning
##### Wireframes
![Initial Wireframe](https://i.imgur.com/Dakki5V.png)

I based most of the front end around the sidenav, card functionalities from Materialize.

A big challenge was making sure that the local and back-end versions of how many locations, and risk/rewards the user had stayed consistent. I solved this problem by tying get api calls for all locations, and risk & rewards to any changes made to either of the data.

##### User stories
- As a user, I want to have my own account that I can sign up for, and sign into
- As a user, I want to be able to change my passwords
- As a user, I want to be able to log out and in
- As a user, I want only myself to be able to access my information
- As a user, I want clear feedback on all actions
- As a user, I want my authorization forms to clear after each interaction
MVP
- As a gm, I want to add locations that the party can go to
- As a gm, I want to associate plots with my locations
- As a gm, I want to indicate whether or not the party visited the location, or is currently in that location
- As a gm, I want to add the outcomes of the players' visiting a location

- As a gm, I want to have a pool of risks and rewards that will happen to the players when they leave
a location to travel to another one
