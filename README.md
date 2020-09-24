
Quick view to current work
---
![Upstream vs Origin](https://raw.githubusercontent.com/Seven-Bi/jsapp/features/screenshot/img.PNG)


Some information about this project, just in case and also can be a chance to telling my thought and design of this code challenge.
---

This project created with npx create-react-app, coming with all the nessary stuff, only added css framework 'Material UI' for pretty component,
so there are some important parts and functions have done and with some necessary test cases (npm test will run all tests), I will like to list 
some of them just for easy check:

- RRG_Generator/ two functions are there, one is for producing an array data(real RGB value) for later to match, another is a function to
  generate all possibilities of index combines, so by using those index combines back to array data can easy to match rgb color, for example
  1,1,2 wil be array[1,1,2] then have rgb value [8, 16, 24]
  
- For implementing pixel image, there are few components used for this purpose are Grids -> Row -> Grid which are setup by correct row and col number pass
  down via props, each of Grid is 1 pixel and their background color were design to set by a callback function to giving them rgb color, this callback function can
  be accessed by React Context API / Redux (I used Context API for this part but somehow did not work, so did not add the code in)
  
  
The rest of steps which is the part not completed yet is calling the function and manipulate data to react components, to do so I feel it is better to put them on share resource so that every nodes under him still can access the data array, each node only needs few key information keeping itself simple until the last node a single Grid render then call a callback funciton pass its key information then this Grid should be able to set its background color, the last step of course create test cases, to do so it's better to mock data and simulating this whole process to render a Grid.
  
As for test, since I have changed my code a bit, the previous test cases need to mend and new test cases are coming soon


Thanks again :)
