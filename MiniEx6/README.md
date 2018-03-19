# MiniEx 6 - A Generative Clock
https://rawgit.com/MOSN97/MiniEx/master/MiniEx6/empty-example/index.html

Note: If you open the program when the minutes on your computer are 00 (Like at 13:00 for example), there won't be any shapes and the screen will be completly white. This is not because the program is not working, just wait and shapes will start appearing when the minute changes.

The idea: The program works kind of like the clock in the way that it shows a number of shapes equal to the number of seconds your computers clock shows (which is why there is never 60 shapes as a clock would just move onto the next minute instead). Furthermore the program also changes background color every minute, thus showing when a minute has passed (but not directly what minute it is currently at though).

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx6/Screenshot_10.png)

1. What are the rules in my generative program?

My program generates its shapes based solely based on your computers clock. Every time the second changes a new shape will be created using vertex() when the second is even and curveVertex() when it is odd. all these vertex points are points offset by a radius from a center using cos() and sin() which is why all the of the shapes could more or less fit inside a circle. Like I said the shapes are generated based on your computers clock. More specificly the vertex points and the color of the shapes are both dependent on a kind of formulas using the current second, the current minute and in some cases, also hours, days, etc. To get a more specific idea of how it works, the easiest way would be to look at the code itself. The background color is created in the same way, but isn't dependent on the current second, which is why it only changes any minute.

2. How does this mini-exericse help me understand generativity?

My program is a good example of a program that generates something completely independent of human interaction (Unless you go and change the time and date settings on your computer). It is really just a program that creates something based on some numbers. The numbers here aren't really random though, even though they could maybe appear so to someone who didn't know it was based on the computers clock. I guess you could say then that the program is in some ways pseudorandom (despite the fact that I can't guarantee it is statistically random), though in my personal opinion all "randomness" is pseudo to some degree, because there's always some factors behind the scenes that determine the outcome, sometimes it's just clearer than others what these factors are.
