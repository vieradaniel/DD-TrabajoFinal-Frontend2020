1) First I want to connect the API  and play a little with it to see all the posibilities I have.
2)20/5/2021 I was able to access the data from the API and store it in a variable (for later use) but I know it's not the way to do it. I'm repeating too much code... 
3) Adding some css html to "choose your pokemon section"
4) I started with the wrong foot because i hadn't created components.
5) I erased it all and started building components ( I watched the classes several times to understand how to pass a property into the component)
6) I didn't know how to handle fetch so I had to rewatch the videos util I understood I had to use the ".then" to manipulate the retrieved info.
7) right now I want to go from end to end in this project and be able to finish it, no matter what. Then I'll try to improve what I have. that way I can see my mistakes and how to solve them.
8) that's why I'm nesting the .then in order to manipulate the info and make the fight algorithm work(that was the only idea I came up with). I'm pretty sure this is not the way it sould be done but so far it is working.(I gotta do further research on it once I'm finished)
9) I'm pretty sure I need to improve encapsulation and the creation of functions.
10) so far I'm using the display css property to show or hide content. 

11) ok so Now I realized that settimeout() will not wait for the code to finish to go to the next one. It starts running and then the next code will continue running without waiting for the settimeout to finish... because settimeout is an asynchronous function  xD... 

 ---my first approach was: use settimeout() and run this code(function1()), then after it finished, run this other code(function2()).
 -- I'm guessing that I need some kind of flag...? research on!

12) well, I did research on synchrony and asynchrony, and I understood what I was doing wrong , I was able to mimic the sleep() function in python as a workaround . To figure this out, I had to understand : synchrony vs asynchrony,single threaded vs multy threaded, async-await, promise, and the typical example to understand how settimeout()/javascript works.
