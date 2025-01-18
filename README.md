# rockPaperScissors
Part of the Odin Project Foundations course

Project requirements are to make a rock paper scissors game within the console. while it is not in scope for this project, I may also make a UI for this.

Pseudocode:

Define rock, paper, scissors.


I will need a function to randomly generate the opponent selection.
Math.random for the random generation, if value is less than .3334 , rock, if greater than .6667, scissors, else paper.

I will then need to create a function to accept human input for their selection.
prompt for rock, paper, scissors.
If other value, print to console "that was an invalid value, type rock, paper, or scissors."

I will then need to create the logic to decide who the winner is.

if human is equal to computer "draw!"
If human is rock and computer is paper "lose!"
If human is paper and computer is scissors "lose!"
If human is scissors and computer is rock "lose!"
Else, "win!"


----

Now, on rps-ui branch, I am going to turn this into a UI.

I need to create 3 buttons, one to select rock, paper, and scisssors.

Then, I need to make a div to show the current tally of score. When a winner is determined after 5 rounds, I then need to display who the winner is, and give options to play again.
