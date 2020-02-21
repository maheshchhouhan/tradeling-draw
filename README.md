# tradeling-draw

Infinite recursive shape: To create a recursive function to draw boxes inside each other in array on the basis of 3 parameters
`width` `height` and `padding` 

## Built With

* [NextJS with Typescript](https://nextjs.org/learn/excel/typescript) 
* [Jest](https://jestjs.io/)

### Installing &  Running
`cd tradeling-draw && npm i && npm run dev`
  
## Testing
I am using jest to write unit tests inside `__tests__` folder and using `test_data.json` file to loop through and validate object return from draw function is equivalent to test data object

`npm run test`

## Draw Recursive Fn

Base case if width or height <= padding + 2 then drawing inner most box

Returning array by calling draw fn recursively to create outer boxes

More detailed comments inside `helpers/index.tsx` file.



### Big O 
O(n^2) - Quadratic

## Travis

[![Build Status](https://travis-ci.com/maheshchhouhan/tradeling-draw.svg?token=5g9WeBNMTKUKzvhs5aWm&branch=master)](https://travis-ci.com/maheshchhouhan/tradeling-draw)

![](screenshots/travis.png)

## Deployed on Now

* [Tradeling - Infinite Recursive Shape](https://tradeling-draw.now.sh/)

### Screen shots 

1.  `Width: 20, Height:40, padding: 6)`

![](screenshots/20_40_6.png)

2.  `(Width: 60, Height:60, padding: 10)`

![](screenshots/60_60_10.png)

3.  `(Width: 80, Height:100, padding: 20)`

![](screenshots/80_100_20.png)