# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: ***map*** is a higher order function that takes in three parameters. The required parameter is the placeholder which holds the place of the elements within the array. The two optional parameters are the array itself, and the index.

  Researched answer:
element
The current element being processed in the array.
indexOptional
The index of the current element being processed in the array.
arrayOptional
The array map was called upon.
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>




2. What is object destructuring?

  Your answer:
  ***Object destructuring*** is a way to pull out values from a key value pair and assign them to a variable with the same key name. It gives easier access to values or methods in an object. 

  Researched answer:

  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
  <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>



3. Why would you use the method super()?

  Your answer: We would want to use the method ***super*** to inherit previous properties that may be associated with the parent component that our child class was instantiated from. 

  Researched answer:
  When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.
  <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super>



4. What is a React Fragment? Why would you use one?

  Your answer:
  The ***react fragment*** is sort of a container that goes onto the page to help return all the jsx. In react each component is only allowed to return one html element, and so the react fragment helps stores everything in the return statement. 

  Researched answer:
  A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
  <https://reactjs.org/docs/fragments.html>


5. What is JSX?

  Your answer: ***JSX*** is the language underneath the hood that allows for javascript and html to be displayed using react. 


  Researched answer:
  JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
  It allows for the conversion of html tags into react element tags.
  <https://www.w3schools.com/react/react_jsx.asp#:~:text=JSX%20stands%20for%20JavaScript%20XML.&text=JSX%20makes%20it%20easier%20to%20write%20and%20add%20HTML%20in%20React.>


6. STRETCH: What is hoisting in JavaScript?

  Your answer: ***Hoisting*** has something to do with how the keyword Var works. Before the script is run any var variables are lifted to the top so that javascript has access to those variables even if they're declared under functions. 

  Researched answer:
  In JavaScript, a variable can be declared after it has been used.
  In other words; a variable can be used before it has been declared.
  <https://www.w3schools.com/js/js_hoisting.asp>


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React props: React Props are items that are passed down from another component and consumed in areas where that data is needed.

2. React lifecycle methods: Life cycle methods are different stages of the component from when it is created/instantiated to when it leaves the DOM.

3. Logic/smart component: Smart components are components of code that actually has functionality or some type of logic within the component. It either performs some type of api request, info check, other froms of computer logic.


4. Display/dumb component:
Display components don't perform any logic, and are there to receive props from parent components to display to the user. The most distinguishing feature is that they don't perform any logic.

5. DOM Events: DOM events are responses to the interaction between a user and the application. For example, when a user clicks on a button, submit a form, liking a picture, etc. Its a form of reaction that brower/server gets from user interaction.
