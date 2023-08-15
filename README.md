# CS-465-FullStackDev1
CS 465 Full Stack Development I

* Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

An SPA application is significantly different from a standard Express HTML application. One of the main differences is that the SPA application is written to minimize round trips to the server, so functionality is split between various components. An Express HTML application on the other hand uses pages which each have their own functionality. While the page itself may be split between the display logic, business logic, and data (loosely the view, controller, and model), the page itself typically has a single targeted use.

Both applications can utilize Separation of Concerns (SoC) with regards to some functions and the data through the use of APIs, but again the SPA might approach this differently in order to maximize performance.

SPAs can usually deliver a more and faster interactivity to the user since functionality is largely taking place on the client's machine. Once the SPA has been loaded onto the client's system, the response time in moving between pages is typically much faster than a traditional web site. Data access may be an exception at times if it needs to retrieve data from a server.

However, an SPA also uses more resources on the client side in order to accomplish this. Normally this isn't an issue, but especially on mobile devices it is something to be aware of. Special attention also needs to be paid to security issues. Since much of the application is placed on the client side and run there there are additional security vectors that might be vulnerable to things like cross site scripting or data snooping. Finally, SPAs normally only expose the main page to web crawlers, so Search Engine Optimization (SEO) may not work well with SPAs.

* Why did the backend use a NoSQL MongoDB database?

The use of MongoDB was for multiple reasons. First, MongoDB uses JSON natively for data representation, so it fits nicely with the rest of the stack. Second, the NoSQL database is flexible. For this specific project that flexibility was useful as development went along with design changes. It also makes it possible to easily store new data that includes additional information, which might not be designed into the database schema from the start.

* How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON (JavaScript Object Notation) is a specific structure for data, while JavaScript is actual code. Because JavaScript and each of the parts of the MEAN stack can deal with JSON natively it's a natural fit.

* Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One of the earliest cases of refactoring was changing from hard-coded data to textfile-based data to MongoDB. Thanks to adherence to Separation of Concerns (SoC), this was easily accomplished. Later, when the UI was adjusted to handle security the reusable components, which also demonstrated SoC, made this adjustment much easier as well.

* Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

When writing or using an API the endpoints indicate the various ways that you might access a resource. For example, myapi.com/widgets to access the collection of widgets vs myapi.com/widgets/1042 to access the specific widget with ID = 1042. The methods are the various actions that can be taken at these endpoints: GET, PUT, POST, and DELETE. All methods may not be available for all endpoints depending on how routing is set up. Security can be used to determine who has access to which endpoint/method combinations. Some users may be able to view a specific widget but not edit or delete it through a POST or DELETE.

* How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

In the past I've been largely concentrated in database development. This course has already been helpful in my current job in better understanding the full stack development that we're doing, even if that development is using Microsoft technologies rather than the MEAN stack. Most of the theory around full stack development remains the same. I am also looking forward to opportunities to using the MEAN stack in the future or one of the similar technology stacks (MERN, MEVN, etc). I feel much more comfortable with these specific technologies now that I've used them all together.
