# 2048

This is my rendition of the game 2048, originally created by Gabrielle Cirulli in 2014. 2048 is a game in which there is a 4x4 grid, and the player moves tiles using arrow keys (or swipes on mobile devices) to merge them. Tiles merge when they have the same value on a basis of x * 2. Once a player reaches the 2048 tile, the game is finished, but they can continue playing thereafter.

The chosen technologies were largely based on those I learned during the Full Stack Open course by The University of Helsinki: React + Vite for the app, Jest for unit tests, and Cypress for end-to-end tests.

![2048-e2e-testcases](https://github.com/ssihvola/2048/assets/126657772/aa3e1a0d-0ac1-420c-adfc-1480d63671d1)

![2048unit-tests](https://github.com/ssihvola/2048/assets/126657772/7187f21f-a448-4db3-810a-90f2737cd637)


In addition, I also conducted a usability testing situation following Jacob Nielsen’s 10 heuristics. I recruited an external participant to conduct the following test cases:

1. Navigate through the game interface and assess the intuitiveness of the controls.
2. Evaluate the intuitiveness of game mechanics.
3. Merge tiles and evaluate the responsiveness and accuracy of the mechanic.
4. Evaluate the addictiveness of the game.
5. Evaluate the UI after dark reader mode has been switched on.
6. Get four (4) tiles into the same row and merge them.
7. Get the game into a game-over situation and evaluate the situation.
8. Update browser and see what happens.
9. Play the game for another 20 minutes and evaluate the overall feel of the UI
after that.
10. Try to get the highest score possible within the time frame

This proved useful, since it gave me non-author biased information in the early stages of development. Most of the results were concerned with UI: the lack of animations, tiles moving too fast, the lack of background in the tiles affecting how immersive the gameplay was. Additionally, one bug was found during the procedure, which had to do with how the tiles merged together.

# Instructions

Clone the repository with git clone

Install dependencies

```
npm install
```

Launch the game

```
npm run dev
```

Open browser and hit http://localhost:5173

