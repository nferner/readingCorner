# Reading Corner
Reading Corner is the Brainchild of Jason Tompa with technical and design support from Neil Ferner. (Jason, please input your story behind the idea)

Reading Corner is designed to help the child with pronunciation, grammar and eventually to achieve a better understanding, if not mastery of the english language. (Add more info about what it is supposed to do).

## Technologies used
This will need to be filled out more as we progress. With my current knowledge base I can foresee the following with the caveat this should be native to mobile rather than web design.

1. Javascript
2. React.js
3. Node.js
4. Express.js
5. HTML5
6. CSS3
7. Google Cloud Speech API
8. Other APIs for quotes, news and other info.
8. Webpack
9. Babel
10. Database - Firebase(allows me to be lazy) or does it make more sense to create our own? Must weigh pros and cons, though off the top of my head I would rather use firebase or another similar service.
11. I'm sure their are more and that this will change to prioritize mobile use.
12. react-router-dom

## Features
1. Voice recognition speech to text support through Google's Cloud Speech API. Child will repeat the prompted sentence which will be matched to a predefined answer. (**Priority High**)

2. Voice recognition text to speech support through Google's Cloud Speech API. Application will return the correct answer whether or not correct. Maybe if it is incorrect the application can say so. Some how the the application should be able to say what it is about the incorrect answer that makes it incorrect. (**Priority High**)

3. Registration/log-in - Consumers (children and parents) should be able to log-in to their account, which will take them to a dashboard page. (**Priority High**)

4. Dashboard - A page with Progress of child, positive quotes for encouragement, child's stats within the application (comparative to other users? or measurement of completion of lessons), Question and Answer section for parents and children. (**Priority High**)

5. Positive quotes - can be held in a database and randomized, there should be an API for this somewhere (will need to research). If in depth enough could associate with stats and specified encouragement. (**Priority Low**)

6. Statistics - a combination of tracking the child's progress. A database will need to be setup to keep this information. Should think about the best way to store information to minimize space and speed. Also will this database be created by us or should we use Firebase.io? (**Priority Medium**)

7. Lesson Plans - An outline of each level for children to follow. Jason and I should spend some time ourselves outlining what this looks like. Is this informational or is it a practice before the quiz. (**Priority Low**)

8. About + QA - An brief statement about the mission and what the application is supposed to do. Q+A will be aimed at answer parents'/guardians' questions. Is it free? Yes, etc. (**Priority Low**)

9. News - A way to capture any articles or reviews written about the application. Can also include updates on users, facebook feed, instagram feed, education updates (we should be careful about any policy positions). (**Priority Low**)

10. Video Element - A video of kids using/testimonials/demonstration of application being used. Will need to use some sort of video programming (Youtube or such, as professional as possible). (**Priority Low**)

11. Trial Run - Will need to be a little preview of what the user can expect. Should be the same questions/prompts every time, so as to not give the whole application away without signed in users. (**Priority Low**)

12. Quizzes - Not quite sure how this looks yet. Is this a pop-out modal? Probably should be a page that has a progress track bar, with answers correct and answers wrong at end of quiz. (**Priority High**)

13. Admin access - Create an admin access only page. Will need to map out what is needed and how we access. I have no idea how to do this...but hopefully it's easier than I think it is.

## Questions/Next Steps/Foreseeable challenges
1. I currently know how to make websites with a responsive design, but this application should be mobile native. Many people and children have access to phones and tablets rather than desktop computers or laptops. I currently have experience with javascript, react.js, node.js/express.js, html and css. My next step will be how to transfer that knowledge into mobile design.

2. How does the voice recognition api work? I need to read the documentation.

3. I have mapped out the first iteration of the application, what will need to change as we discover either issues or prioritize?

4. Admin Access Page, I do not know how to do...I think it will need to do:
  * calls to the database to display all non-protected information
  * have a way of uploading articles/information
  * have a way of editing/updating text elements
  * accessing database to change questions/lessons/quizzes

5. There are plenty of other questions I'm sure, regarding both functionality and content. My brain is a little dead right now though.

6. What are some of the legal steps we need to take as we move forward with this projects? How to protect ourselves individually? How do we protect ourselves and our project?

## Progress
* Jason's Outline: (Input Jason's outline here)
* Node map of Frontend: (Input png pic of node map)

## Notes
* React v4 changed some functionality, but once learned was easily implemented.

## Installation

1. Note quite sure what this looks like yet.
