import * as model from "./model.js";
import startView from "./views/startView.js";
import gameModesView from "./views/gameModesView.js";
import substantiveView from "./views/substantiveView.js";
import verbView from "./views/verbView.js";
import wordsView from "./views/wordsView.js";
import wordsView2 from "./views/wordsView2.js";
import leaderboardView from "./views/leaderboardView.js";
import { leaderboard1 } from "./config.js";
const init = function () {
  startView.displayGameModes(model.generateGameModes);
  gameModesView.displayGame1Description(model.displayGame1);
  gameModesView.removeGame1Description(model.removeGame1);
  gameModesView.displayGame2Description(model.displayGame2);
  gameModesView.removeGame2Description(model.removeGame2);
  gameModesView.displayGame3Description(model.displayGame3);
  gameModesView.removeGame3Description(model.removeGame3);
  gameModesView.displayGame4Description(model.displayGame4);
  gameModesView.removeGame4Description(model.removeGame4);
  substantiveView.displayGameButtons(model.startGame1);
  substantiveView.checkGuess(model.procesateGuess);
  substantiveView.leaderBoard(model.procesateLeaderBoard1);
  substantiveView.skipButton(model.procesateSkipButton);
  verbView.displayGameButtons(model.displayCheckBoxesGame2);
  verbView.startGame2(model.startAndProcesateGame2);
  verbView.handleAnswer(model.procesateAnswer);
  verbView.introduceSpecialLetter(model.specialButtonsProcesate);
  wordsView.displayGameButtons(model.startGame3);
  wordsView.procesateGuess(model.procesateGuess3);
  wordsView2.displayGameButtons(model.startGame4);
  wordsView2.procesateGuess(model.procesateGuess4);
  leaderboardView.displayLeaderboard(model.renderLeaderboard);
  leaderboardView.nextGame(model.renderNextGame);
  leaderboardView.previousGame(model.renderPreviousGame);
  startView.backButton(model.returnAtStart);
  startView.earlySubmitButton(model.earlySubmit);
};
init();
