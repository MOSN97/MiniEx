# MiniEx 5 - The Right Order
https://rawgit.com/MOSN97/MiniEx/master/MiniEx5/empty-example/index.html

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx5/Screenshot_9.png)

1. How does my game work?

When you open the program a few numbered circles will appear within the canvas and there'll be a start button. When you click the button the numbers will disappear and the circles will start moving around randomly. The players job is to keep track of the circles and remember their numbers and when they stop moving, he's then supposed to click them in the right order. Doing this will allow the player to progress to higher "stages" where the circles will start moving faster and more circles will appear. The game is in some ways an advanced version of the shell game, except here you'll have to keep track of several objects. It's a lot harder than you might think and it took me many attempts to get my record of reaching stage 7.

2. How did I program the objects?

The objects in my program are the moving circles, which I based on a circle class. It's a rather simply class that has a number attached to it (each circle will have a higher number than the last) and other than that just a position and a velocity. The circles have two "methods": move() and show(). move() adds the velocity to the positon every frame and is also responsible for changing the velocity every second and show() is of course simple what draws the circle itself and when certain conditions are met also the number on the circle.

3. What are the characteristics of object-oriented programming?

I one of the strong characteristics of object-oriented programming compared to regular programming is that it tries a lot more to imitate the real world, which at least from our perspective is a world full of objects. Objects in the real world have certain characteristics and certain things they can do, and in the same way objects in programming also have attributes and methods. Of course most the things that can be done in programming using objects could also be done without it, but the difference is that instead of having a bunch of loose variables you can combine them in a certain object, which can make it easier to keep track of.

