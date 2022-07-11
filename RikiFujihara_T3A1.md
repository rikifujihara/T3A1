# Riki Fujihara Term 3 Assessment 1 - Workbook

# Question 1 - Standard source control process for a large project

## Collaboration using Git

### Forking workflow for 'organic' teams

A large project will more than likely involve multiple developers, so source control becomes more involved, complex and important than in a small project with a sole developer.

A 'Forking' workflow is helpful when contributors to the project are not in well-defined teams, such as in an open-source project. Every developer working on the project has a server-side clone of the project (a fork). Each developer pushes code changes to their individual fork, and pull requests are raised from the fork to the original repository. Feature branches are still used to maintain a clean commit history.

To set up a forking workflow, developers need to fork the main repository to create their server-side copy, clone that fork to their local machine and then set an upstream connection with the main repository so they can pull contributions from the other developers.

## Making contributions to the project

Whether the project is using a forking workflow or not, a developer must ensure they are maintaining a proper source-control workflow and follow necessary steps to avoid merge conflicts to contribute to the project.

### 1. Pull from upstream

Before working on their code changes, developers first need to make sure their local repository contains the latest code from the main repository by pulling from upstream.

### 2. Checkout to a feature branch

The developer will then checkout to a feature branch in order to keep their changes organised and their commit history clean.

### 3. Stage and commit changes on feature branch

This is the part of the source control workflow where the developer makes changes to the code and commits a series of changes necessary to implement their feature.

### 4. Change back to main local branch and pull latest code from central repository

While the developer has been working on the code changes on their local repository, the code in the central repository may have changed so it's important to pull any changes in the main repository that may have been added. If there have been changes, the changes that were pulled to the local main branch need to be merged or rebased with the feature branch to make sure that the feature changes work with the latest code.

### 5. Push feature branch to remote repository

Once the code changes are confirmed to work with the changes pulled to the main local branch, the feature branch is pushed to the developer's fork.

### 6. Raise a pull request from fork to central repository

A pull request is then made from the fork to the central repository - in a non-forking workflow, the feature branch would be pushed directly to the central repository which creates a pull request awaiting review.

## Code review

Code reviews are an important quality assurance tool which should be integrated with a team's source control workflow.

### Pull the remote branch to local machine, run and test code

To review the changes in a branch, it should first be pulled to the developer's local machine so that it can be run and viewed properly in an editor.

### Address the pull request, delete the feature branch

Once the code has been run and tested, the reviewing developer should respond to the particular pull request by approving the pull request to be merged into the central repository or requesting any changes they believe to be necessary before merging the code changes. The reviewed branch should be deleted as it's no longer needed.

# Important aspects of quality software

There are many software quality characteristics that should be maintained by developers.

## Reliability

Under different working environments and conditions such as under various traffic levels or in different versions of browsers, software should produce reliable performance. For example, a marketplace web application should be able to display search results and maintain functionality to users whether the traffic on the website is very low or very high, or whether the browser is running the latest or an older version of Google Chrome. Software can be made more reliable by using well-documented software, ensuring proper quality assurance and by placing emphasis on scalability to ensure reliable performance under different loads.

## Maintainability

It should be cost-effective and manageable to make changes to, update and edit quality software. For example, if a company decides that they want to add functionality to their deployed web-based marketplace such as a user's item watchlist, the software should be structured in a way that allows updates to be integrated without having to overhaul the code or rebuild much of the aspects of the app. Software can be made more maintainable by making it more modular so that different functions are handled by different elements of the software - that way things can be added, implemented and fixed without cascading consequences. Maintainability can also be improved by continuous integration and continuous deployment workflows.

## Usability

Although this relates to the user experience of the software product itself and not necessarily an aspect of the raw source code, usability is still an important aspect of software quality. The software product itself should be easy for users to learn, navigate and use. Front end aspects dealing with input should be properly maintained to ensure ease of input and smooth rendering of output and the interface that the user interacts with should be consistent and predictable to use. Software usability can also be improved by assuming it needs to be easy to learn for people who aren't familiar with development, or who aren't particularly tech-savvy. Inclusion and accessibility can also be greatly improved in web applications via semantic html which improves readability of code by browsers so it can be made more accessible to different users.

## Efficiency

Software should be developed so that it can efficiently utilise resources such as disk-space, processing power and memory. This relates closely to reliability, scalability and usability. Inefficient utilisation of resources will lead to poor scalability, degradation of user experience and less reliable performance. Software can be made more efficient by reducing the number of database queries required to produce the desired output. It can also be improved by optimising the front-end components of the software such as image sizes. Third-party tools such as Bootstrap can also be reduced down to the components that the software actually uses so that the browser doesn't have to load the many styles that the software doesn't use, therefore improving loading times.

## Integrity/Security

Software should be developed in a way that aims to maintain integrity and security. Software security relates to how well the software can protect the data that it contains and how well it can protect itself from malicious attacks such as viruses. Database design has a large role in the efficiency and integrity of software, as database design decisions are often centred around improving those aspects of the software. Normalisation of the database structure can help to improve the reliability and integrity of the data by preventing anomalies such as duplication or deletion anomalies, but too much normalisation can make the data more complex to query which may impact the overall efficiency of the software.

## Reusability

Software reusability relates to how easily the software can be used across other modules. Software can be made more reusable by developing it in such a way that it is generic enough to be applied to other functions in the product/application. Making code reusable saves lots of development time and money.

# Question 3 - MERN stack



# Question 4 - Knowledge/Skills required to build a website for a small business as part of a team

### Task planning/Project management
One of the skills that IT workers will need to complete a quality web development project is task/project management. The most popular project management methodology for developing software is the Scrum framework which falls under the Agile methodology, so IT workers will need to be able to work towards fulfilling user stories in an iterative fashion. IT workers should also be able to speak up and communicate clearly throughout retrospectives that will be held throughout the project.


### Collaborative source control workflow
Another skill that IT workers will need to complete a quality web development project is using an effective collaborative source control workflow. A website for a small business is unlikely to require huge organic teams, so a forking workflow is unlikely to be necessary. IT workers will have to be able to frequently ensure that they are working with the latest version of the central repository, and be able to push their code changes from their local repository from feature branches to the central repository. It will also be necessary for IT workers to review each other's code in a way that is productive, helpful and kind before merging the pull requests from the branches into the central repository.

### Quality assurance
Another skill that IT workers will need to complete a quality web development project is quality assurance. Depending on the maintenance requirements of the website, the team of IT workers may integrate a continuous integration/continuous deployment workflow. In the case that the small business wants a working prototype as soon as possible, the IT workers should integrate a continuous deployment workflow where each change is run against automated tests before being pushed to production. If the small business is happy to wait for a totally finished product, it may only be necessary for the IT workers to simply ensure the site has been properly tested using both manual and automated tests before deeming it ready for use. Assuming the site is static, little maintenance will be required but if it's a more complex app, automated tests should be scheduled to ensure that the app remains functional over long periods.

### Documentation
Another skill that IT workers will need to complete a quality web development project is documentation. Documentation of the software as well as the project overall will be important to ensure that the IT workers can continue to work on the project in the case of different employees being added or leaving the project. If the software is well documented, other IT workers will be better able to understand how to contribute to the project in the case the original developers are unable to continue the project.

### Liaison
An extremely important skill that IT workers will need to complete a quality web development project is communication and liaison. Not just for communicating with other IT workers contributing to the project, but for properly understanding the needs of the client. IT workers will need to communicate clearly with their colleagues and their client in order to deliver a quality web development project so that the team can work together efficiently and effectively towards the client's needs.

### HTML/CSS
Another skill that IT workers will need to complete a quality web development project is the ability to create the basic front-end components of the website. A small business' site will always have views to be displayed in the browser so HTML and CSS will be essential skills for the IT workers. 

### Web development framework
Depending on the needs of the small business, IT workers may need to have knowledge of some web-development framework in order to complete a quality web-development project. If the small business only needs a static website, then pure HTML and CSS may be enough to deliver a responsive, effective website. If the small business' needs are more nuanced and require more complex functionality such as database management and CRUD actions, a framework such as Ruby on Rails may greatly benefit the project. Having knowledge of a widely used, well-documented framework such as Rails will allow the IT workers to remove lots of abstraction and spend more time building the site towards the client's needs. 

### Deployment
No matter the needs of the small business, a skill that IT workers will need to deliver a user website is deployment. Even if the small business only needs a static site without CRUD actions, the website still has to be hosted somewhere. If the site is static, a simple service such as netlify could be used to host the site. A more dynamic application would require more nuanced knowledge of a service such as Heroku or even a more flexible solution like AWS.


# Question 5 - Knowledge/Skills required to produce a two-sided marketplace web application

I recently deployed a web application called <a href='https://mighty-brook-03737.herokuapp.com/'>ScooterBay</a> which is a two-sided marketplace for E-Scooters. In order to successfully complete the project I needed to learn some new skills and implement knowledge and skills I've already gained over time.

## Completion of the project

### Task planning/Project management
A critical factor of successfully completing the project was identifying, prioritising and allocating tasks. Trello was used to track the various tasks. Tasks had to be prioritised so that an MVP could be produced before integrating non-essential components to the app. Each task was assigned checklists with user-stories in order to focus time spent on the task towards making a difference to the user. The user stories are inspired by the Agile approach to project management.

### Markup language and CSS/Bootstrap
Knowledge of the markup language HTML and the fundamentals of Cascading Style Sheets was required to complete the project. Knowledge of HTML was required to produce the skeleton content and raw elements of the pages to be displayed to the user such as headings, body text, images and navigation bars. CSS knowledge was required in order to style the HTML elements and to apply classes from the Bootstrap library

### Model View Controller architecture
Scooterbay was built on a web development framework called Ruby on Rails which uses a model-view-controller design pattern, so knowledge of the MVC design pattern was required to complete the project.

### Documentation
Documentation was a skill required to complete the project. Scooterbay project so it was important to document it properly so that it can be well understood by future industry connections. Documenting the project included describing the purposes and functions of the app, screenshotting relevant views of the app, defining the target audience, detailing third party services, describing database and model relations and discussing task planning/allocation.

### Wireframing
ScooterBay's wireframes were drawn up in an app called Balsamiq. The skill of wireframing included planning the basic layout and views of the application. The most pertinent views were wireframed considering various screen sizes. 

### ERD design
ERD design was a skill required to complete the project. Elements of the skill included considering the different entities to be tracked within the app and the types of relationships between them, as well as using diagramming software to implement the visual layout of the design.

### Sitemap design
The skill of sitemap design was necessary to produce a sitemap diagram. The skill was in considering how to represent the paths a user could take throughout the different pages without introducing too much visual noise and complexity.

### Source control
Source control was a skill required to complete the project. Git was used to version control the application and Github was used to host the remote repository. Source control mainly included staging and committing code changes with concise, meaningful commit messages.

### Deployment
Deployment was a skill required to complete the project. Heroku was the service used to deploy ScooterBay. Deploying the app included creating a new Heroku app and pushing the source code into the newly created app. Part of the skill of deployment was understanding how to debug issues in deployment when the application runs without error on the local machine.

### Cloud storage
Cloud storage was a skill required to complete the project. Amazon s3 was used to store the uploaded images used in ScooterBay. Setting up access and environment variables in deployment was required to have the cloud storage function in deployment.

### Manual testing
Manual testing was a skill required to complete the project. In order to ensure ScooterBay functioned as intended, each feature and function was manually tested by checking the outputs of various inputs and ensuring they remain functional when other features are implemented.

## Overcoming challenges

### Debugging
Debugging was a skill required throughout the whole project. Whenever an error occurred, I would use a combination of Rails' helpful error messages and console output to identify the source of the problem and rectify it.

### Online research
Related to the skill of debugging, there were many times where my knowledge was not enough to implement certain features or to achieve certain functionalities. To overcome this challenge I utilised the skill of researching solutions online.

### Task planning
To overcome the challenge of having limited time and lots of desired features and functionality of the app, I utilised strict task planning and prioritisation using Trello. I staggered work so that the most important features and functionality would be complete in time for the project's deadline, and utilised user stories to ensure that the tasks were structured according to an impactful change for the end user of the app.

# Question 6 - Degree of effectiveness of knowledge and skills for personal project

## How effective my knowledge and skills were for building ScooterBay

### Task planning/Project management
I found that my ability to plan and track tasks in the project proved adequate for completing the project to a good standard in the timeframe provided. I initially assessed the scope of building the MVP and prioritised tasks accordingly. Once the MVP was finished I used the experience of building the MVP to accurately scope the work required to build additional features and functionality. The task planning made it easy to focus efforts on one user story at a time in an Agile fashion.

A desired improvement in task planning/management that I would like to develop is the ability to prioritise and delegate tasks across different contributors in multiple teams for a large project and being more confident in assessing the scope of tasks that I'm not as familiar with.

### Markup language and CSS/Bootstrap
My knowledge of the markup language HTML and the fundamentals of Cascading Style Sheets was enough to provide a working two-sided marketplace, especially with the use of Bootstrap. Although Bootstrap components make up the majority of the styles, fundamental CSS knowledge such as the box model and flex display were essential in implementing the desired views of the application.


A way I would like to improve my knowledge of HTML and the fundamentals of Cascading Style Sheets would be a better understanding of using the CSS grid layout system. I was able to produce working, mobile-responsive views using flexbox and Bootstrap, but with better knowledge about CSS grid I would have been less restricted in my design decisions for the front-end components.

### Model View Controller architecture
My knowledge of the MVC design pattern was adequate for producing a two-sided-marketplace. I was able to use different model methods and data queries to produce the desired output to the views, and the app functions as intended in deployment.

An improvement I would like to make in my knowledge of MVC is having a greater depth of understanding regarding best-practices and how to structure the models, controllers and views in a way that is more efficient.

### Documentation
My ability to document the project was enough to provide the important details of what the app does, what it's for and how it was planned and implemented.

An improvement I would like to see in my documentation skills is having a better ability to provide instruction on how to actually use the app.

### Wireframing
My ability to wireframe was the bare minimum to have understandable visual plans for the layout of ScooterBay. The wireframes were still effective in providing a starting point for designing and implementing the views of ScooterBay which were later adjusted to suit the developing needs of the app.

An improvement I'd like to see in my wireframing skills is surpassing my fear of getting creative and trying out new, different layouts. I found that I was overly focussed in fulfilling the MVP requirements of ScooterBay which restricted my wireframing decisions.

### ERD design
My ERD design skills were adequate for visually representing the entities to be tracked in ScooterBay and the relationships between them. The entities and their relationships developed throughout the implementations of different features in ScooterBay - I was able to adjust my ERD accordingly and maintain an accurate representation of the entities.

An improvement I would like to make is being able to harness greater visual design of the ERD with design elements like colour and various shapes and effects.

### Sitemap design
My Sitemap design skills were adequate for visually representing the entities to be tracked in ScooterBay and the relationships between them. There were quite a few different pages to represent in the diagram and I successfully visually represented how they were all linked without using too many connections.

An improvement I would like to make is being able to harness greater visual design of the sitemap with design elements like colour and various shapes and effects.

### Source control
My source control skills were adequate for completing the project. The remote repository served as a reliable backup for all of my code, and my commits were frequent and meaningful.

An improvement I would love to make in my source control skills is a better understanding of feature branching workflows.

### Deployment
I was satisfied with my deployment skills in completing the project. I deployed the application in the extremely early stages of development and pushed the changes to the deployed app very frequently so I was able to debug deployment issues quickly and often. I set up heroku so that it pulls changes from my remote github repository everytime I push a commit to the remote repo.

The next time I complete a similar project, I will use a development pipeline instead of pushing directly to the production app.

### Cloud storage
I was able to use Amazon s3 to store the app's images in the cloud.

A gap in this skill that I would like to fill is being able to give the app access to images in the same s3 bucket that it hasn't uploaded. For static images on the site, I uploaded images to a separate public bucket and had the app render the images stored on the public bucket.

### Manual testing
I was able to effectively use manual testing to ensure that the app functions as expected. I logged in as several different users at once so that I was able to test the conditional logic of the views, and was able to expose lots of holes in the logic to be fixed. Manual testing was extremely helpful in developing the app and ensuring the app functions as intended.

I was happy with my ability to test the app manually but a major improvement I would like to make is having a much better understanding of automated testing so that the app can be maintained properly and in a more time-efficient way.

### Debugging
I was able to successfully debug all the errors and bugs that I encountered in developing ScooterBay. This was because when I decided the features and functionality I wanted to implement, I made sure I had an idea of how to successfully implement it.

I would like to improve my debugging skills so that I can debug more complex issues without immediately consulting online resources and try to utilise some more of my own problem solving skills.

## References

### Question 1

Brandon J, 2020, Git Collaboration - Forking Workflow Lesson, Academy of Information Technology

### Question 2

Software Testing Help 2022, What Are The Quality Attributes?, softwaretestinghelp.com, viewed 10 July 2022, <https://www.softwaretestinghelp.com/what-are-the-quality-attributes/>.

### Question 4
The Agile Coach, What is Agile?, atlassian.com, viewed 11 July 2022, <https://www.atlassian.com/agile>.



