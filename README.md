1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: We use getElementById when we want to get only one element by its Id. Id should be unique. We use getElementsByClassName when we work with multiple elements that have same class name. Multiple elements can have same class name. querySelector is used when we need the first element of a CSS selector. On the other hand, we use querySelectorAll when we need all the elements of a CSS selector.

2. How do you create and insert a new element into the DOM?

Answer: To create a new element into the DOM, we use document.createElement(). And, to insert a new element we use .innerText or .innerHTML.

3. What is Event Bubbling and how does it work?

Answer: Event Bubbling means when we click on an element, the click event runs on the clicked button/element. Then, it goes to its parent. It keeps going to the parents until it reaches to the top of the document/page.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Normally, we use event listener to an child element. We can add one event listener to the parent element so that it can easily be checked which child element is clicked if there are multiple childs under one parent. It is useful as it allows us to use less code and it is efficient for memory.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the browser's default action when the specific event is clicked. stopPropagation() is used when we do not want bubbling to the parent element.
