# MiniEx 3 - Fiction Is Full of Waiting
https://rawgit.com/MOSN97/MiniEx/master/MiniEx3/empty-example/index.html

Note 1: There will be audio

TV shows and movies are full of iconic intros. But what if those intros were replaced by throbbers? It's that never asked question that my program tries to answer.

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx3/Screenshot_2.png)

1. What is the time-related syntax/function that I have used?

To make the throbber itself I've actually just used to draw() which executes automatically every frame and then changed the framerate to decide how quickly I wanted the throbber to move. However I've also used the millis() function to make to change a variable every 12 seconds, which results in a change in "theme" of the throbber (if you haven't opened the program already, you'll see what I'm talking about when you do).

2. What do I think a throbber tells us, and/or hides?

Well compared to a loading bar for example a throbber tells us a lot less. All it really does it show us that some kind of process is happening, but we as the user don't really know what it is or how long it will take. All we're given is a little animation to entertain us. A loading bar on the other hand at least shows how far along the process is and we're also sometimes given an estimate as to when it might be finished. For very short processes the throbber icon can be fine, because if it'll only take a few seconds or even less it's not that important to know exactly at what point of the process you're at, but for longer wait times like when you install a program or download big files, the throbber icon is probably unsuited because the information it leaves out could be very relevant to a user in those situations. 
