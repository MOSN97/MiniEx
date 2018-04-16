# MiniEx 9 - Flow Charts

**Part 1:**

Note: I wouldn't exactly call the program I have chosen for this my most "technically complex" one, but I choose it because even this relatively simple program can result in a somewhat complex flowchart:

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx9/Screenshot_13.png)

The MiniEx: https://github.com/MOSN97/MiniEx/tree/master/MiniEx1

1. What was difficult about drawing the flowchart?

The thing about programs like this that can be affected while they run by input from the user (so basicly most interactive programs), is that when the user can the interact with the program while it runs, it's suddenly not a list of tasks to be completed (a linear process). That's why I thought the best way to show my program through a flowchart was to split the flowchart in two: The part that the program that is run every frame aka. function draw() and the part that runs whenever the user clicks with their mouse aka. function mousePressed(). If you were to go even more into detail you could also add a part for function setup(), but since the setup doesn't do much else in this program than create a canvas, I choose to leave it out. I generally think flowcharts work best when you have one flowchart for every individual process, which is why in cases with complex programs that include many different processes that start at different times, making a flowchart to create a better overview can suddenly become a big challenge in itself.

**Part 2:**

First Idea: Neuralizer of web content

We mainly want to focus on the topic of code and language in the digital culture. We want to create a program that can manipulate what is visually accessible to you, and often forced upon you while you are engaged in the digital world. We want to challange the lacking of control of the contemporary constant feeds and data streams that we experience on the web. This by creating something that affords the individual to choose and take control of what is shown to them and therefore make web content from external sources less powerful (ex. the browser extension AdBlock).

Our ideas strives from a program that removes adjectives, to one that neutralizes genders or even one that can change negative words into positive ones. To make a program with functions like these, we will have to make a web extension that is able to examine the content of the current webpage and be able replace or manipulate it.

The flowchart we have made for this idea is based on an algorithm that is supposed to get the news articles from a website, analyse the text for adjectives and then remove them. When the program as gone through the whole text it shal print the new and changed article.

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx9/Flowchart.png)

Second idea: Web content filter

Our idea for the second flowchart is in the same category as our first idea. Instead of a program that removes adjectives, we want this program to have an input field where you can write different words you don’t want to read articles about. So like our first idea the program will get an article or some other content from a website, and then analyse the content for the keywords that you didn’t want to see. This program gives the users some control of what they are going to look at online by choosing what not to see.

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx9/Flowchart2.png)

2. How are these flowcharts different from my own one?

Well first of all they're both just a single flowchart, which makes sense since they're linear processes to be completed. Other than that both our ideas are for web extensions rather than programs in themselves. Therefore they don't really have to create something from scratch, but instead look at what is already there on the pages that you visit, analyze it and then somehow change it.
