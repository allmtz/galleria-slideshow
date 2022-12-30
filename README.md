# Entertainment web app

## Table of contents

- [Overview](#overview)    
  - [Screenshots](#screenshots)
  - [Links](#links)
- [The Process](#the-process)
  - [Goals](#goals)
  - [Built with](#built-with)
- [Lessons Learned](#lessons-learned) 
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

A modern fully responsive online art gallery. 

Includes a slideshow feature which the user can toggle on and off. A progress bar at the bottom of each page indicates the length of the gallery.

Each painting is displayed with a short description, a portrait of the artist and a link to the painting's Wikipedia page. 

### Screenshots

Home screen
![home screen](./src/assets/screenshots/home.png?raw=true)

 Individual painting
![individual painting](./src/assets/screenshots/individual-painting.png?raw=true)

Fullscreen
![full-screen painting](./src/assets/screenshots/fullscreen.png?raw=true)

Slideshow playing
![example slideshow mechanic](./src/assets/screenshots/slideshow-on.png?raw=true)
### Links
- [Live Demo](https://imaginative-cajeta-48538a.netlify.app/)

## The process

### Goals

 * Use CSS Grid to make a responsive gallery layout

 * Learn and use Vite as an alternative to CRA
 
* Learn and use SASS to style the project 

 * Implement the slideshow functionality with JavaScript

 * Gain more experience using React Router

### Built with

- Semantic HTML5 markup

- [SASS](https://sass-lang.com/)
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/en/main) - React routing library
- Javascript

## Lessons Learned

This is a partial list of the various lessons and takeaways learned while completing this project.

### **Using `return` vs `else`**
 While refactoring I stumbled on [this](https://www.samanthaming.com/tidbits/23-no-else-return/) article which talks about using the `return` statement with an `if` block to avoid using an `else` block. For example, this is part of the code I was using for the slideshow functionality:

```js
setInterval( ()=>{
    i++
    if(i < gallery.length){
        navigate( `/${gallery[i].name}` )
    }
    else{
        stopSlideshow()
    }
    },6000 )
```
and the refactored version:
```js
setInterval( ()=>{
    i++
    if(i < gallery.length){
        navigate( `/${gallery[i].name}` )
        return
    }
    stopSlideshow()
    },6000 )
```
In the first example the `else` is explicitly stated but in the refactored version, because of the `return` in the `if` statement, `stopSlideshow()` only gets executed if the `if` block isn't. 

These are two ways of accomplishing the same thing, the main difference being style and preference.

### **Styling progress bars**
I found [this](https://css-tricks.com/html5-progress-element/) great article on various ways to style the progress element across different browsers.

### **SCSS**
Awesome tool! This was my first time using SCSS and I thoroughly enjoyed it. It has a bunch of useful features to apply DRY principles to CSS. I especially liked the nesting ability as it was a useful reminder of the HTML structure. Although I might have gone a little overboard with the nesting 😅. 

### **setState rendering is asynchronous**
 Problem
 * I was using `setState` to update a variable inside a function and then trying to execute logic based on the updated value. The UI was changing to reflect the new `state` but the `state` value in the function was not updating.
 Ex:
 ```js
 const [playing, setPlaying] = useState(false)

 function changePlayingStatus(){
    setPlaying(true) //UI re-rendered
    console.log(playing) //`playing` is still false
 }
 ```

 Solution
 * I used narrowing to first determine the current value of `playing` and then execute code based on that value
 ```js
 function changePlayingStatus(){
    if(playing){
        setPlaying(false)
        //logic to stop the slideshow
        return
    }
    setPlaying(true)
    //logic to start the slideshow
 }
 ```

## Closing Thoughts
This was a fun project that was trickier than I first anticipated. The off center positioning of elements provided great practice working with the `position` property. Creating the routes for each painting and implementing the slideshow let me use various React Router hooks including `useNavigate`, `useLocation` and `useParams`. I was also able to pick up new technologies and use SCSS and Vite for the first time.

## Useful resources

- [setState rendering is asynchronous](https://stackoverflow.com/questions/38558200/react-setstate-not-updating-immediately) 

- [No Else Return](https://www.samanthaming.com/tidbits/23-no-else-return/) 

- [Styling Progress Element](https://css-tricks.com/html5-progress-element/)

- [Great guide](https://ui.dev/react-router-tutorial) for React Router. I didn't use anywhere near all the topics covered and will definitely be coming back to reference it in future projects. 

## Author

- Personal Website - [Here!](https://allanmartinez.me/)
- LinkedIn - [This way!](https://www.linkedin.com/in/allan-martinez-ab8848252/)


## Acknowledgments
I want to give a huge thanks to [Frontend Mentor](https://www.frontendmentor.io/challenges) for the resources and challenges they provide. 