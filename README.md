# Test Task

## Introduction

Please create a simple application with the list of pokemons (pokedex). You can pick either the front-end or the full-stack requirements. Full stack variant is more complex (has more requirements) and will also demonstrate your backend skills.

## Requirements

You have to meet the following requirements:
- Source code should be open sourced on GitHub
- The design of the app is not important, but the overall user experience and usability of the application should be good. You can use the existing UI libraries like material ui or ant.design
- Application should be responsive (look good both on mobile and desktop)
- Code should be linted. Preferably with the eslint standard config (https://github.com/feross/eslint-config-standard)
- The application should be deployed online. Heroku, github pages are a few of free alternatives for deployment
- The app must be developed with React.js and MobX (or a MobX alternative with the same observable/reactivity concept, but not Redux) in ES6. For full stack developers the server has to be in Node.js

## Evaluation Criterias

We do not expect to receive a production ready application from you, but it’s important for us to understand whether you have the following skills:
- Deliver a minimal viable product in a short period of time
- Follow good coding conventions and style guides
- Know what is important to implement, and what can be left out to be implemented in future
- Ability to properly integrate libraries into the app and use them
… more stuff depending on your skill level (DRY, architecture skills, etc.)

## Bonuses

Following are not a requirement, but will be a bonus for us:
- Use React Hooks (https://reactjs.org/docs/hooks-intro.html), and the hooks-specific version of MobX (https://github.com/mobxjs/mobx-react-lite)
- SASS, Stylus or any other css preprocessor
- Webpack if applicable
- CSS animations
- Unit testing

## Pokedex

Using the open pokemon API (http://pokeapi.co/ *) build a pokedex with the following functionality:
Front End Candidate Requirements:
- List pokemons in a table view (or cards) with their name, avatar, type (should visually look as a colored tag) and the main pokemon stats (whichever additional pokemon info you want to show)
- The list must have a pagination with an ability to select how many items to show per page (10 / 20 / 50)
- Filter the pokemons by name with a search box
- Filter the pokemons by type using tags (multiple selected tags have to show pokemons with any of the types selected)
- Show your skills
