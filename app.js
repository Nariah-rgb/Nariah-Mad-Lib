/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

// let ________ = prompt("Ask the user for ________");
// let ________ = prompt("Ask the user for ________");
// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

// let story = `Write your story here using ${_____} and ${_____} etc.`;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

// document.getElementById("madlib-output").innerHTML = /* your story variable */ ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/


let userName = prompt("Your Name");
let userPlace = prompt("A Place");
let userThing = prompt("A Thing");
let userFood = prompt("Favorite Food");
let userNameSecond = prompt ("A Name for a Person");
let userRandom = prompt("Something Random");
let userAnimal = prompt("An Animal");
let userAdj = prompt("An adjective");
let userVerb = prompt("A verb");
let userThingSecond = prompt ("A Thing");
let userLiquid = prompt ("A liquid");
let userAdjSecond = prompt ("Another Adjective ending with -est")

let myStory = `<p><b>${userName}</b> goes out to dinner in <b>${userPlace}</b> with a <b>${userThing}</b> named <b>${userNameSecond}</b> and they eat <b>${userFood}</b>, while talking about <b>${userRandom}</b>. All of a sudden a <b>${userAdj} ${userAnimal}</b> comes in and <b>${userVerb}</b> the waiter. That's when I noticed <b>${userNameSecond}</b> was wearing a <b>${userThingSecond}</b> on their head. It made me laugh so hard <b>${userLiquid}</b> was coming out my mouth. In the end it was <b>${userAdjSecond}</b> dinner ever.</p>`;



document.getElementById("madlib-output").innerHTML = myStory
