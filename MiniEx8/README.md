# MiniEx 8 - Planet Position Project

Made by me, Jesper Vendelbo (https://github.com/JesperVendelbo) and Thomas Matthiesen (https://github.com/thomasmatthiesen)

https://rawgit.com/MOSN97/MiniEx/master/MiniEx8/empty-example/index.html

Note: Due to the fact that the API we have used is apparently not considered "safe" by most browsers, our program will only work if you disable a safe connection (this can be done in Firefox by clicking the lock icon in the adress bar), if you do not feel comfortable doing this you'll have to just settle for this screenshot:

![alt text](https://github.com/MOSN97/MiniEx/blob/master/MiniEx8/Screenshot_11.png)

1. What is the program? What API have we used?

Our program can show the position of the five innermost planets of our solar system (Mercury, Venus, Earth, Mars and Jupiter) at the beginning of any month between 1900 and 2050. You change which month to show by using the slider at the buttom of the screen. The distance between the planets is in realistic scale, however their size is not (If it was I'd be very difficult to see anything else than the sun and jupiter). To make this program we have used http://www.astro-phys.com/api, which in an API that can return the position of all the planets (except Saturn for some reason) all the way back from year 0 and far into the future. The reason it can give their position in such a great range is probably that it uses a mathematical formula that scientists have calculated based on observations rather than observations themselves.

2. Describe our process of making this mini exercise:

We looked at a couple of other APIs, but when we found this we quickly decided to use it. The description on the site on how to use the API was a bit confusing to us at first, but luckily there was a few examples and we managed to figure out how the API worked by experimenting with these. The biggest problem we had was figuring out how to get the position of more than one celestial body at a time, since none of the examples showed this. It turned out however that you had to write the following as part of the url: bodies=mercury,venus,earth,mars,jupiter. It would have been nice with an example showing this, but oh well, we figured it out. The data that the API gives isn't super complicated. It gives you two arrays for each planet, one of them their position as X, Y, Z in a kind of three dimensional grid with the center of our solar system (The sun) at 0, 0, 0 and the other their velocity (also as X, Y, Z). We only used the first of the two so we could take that data (the planets position in comparison to each other and the sun) and show it visually.

3. Formulate a question in relation to APIs that you want to investigate further:

I guess I'm mostly just curious about what other APIs are out there.
