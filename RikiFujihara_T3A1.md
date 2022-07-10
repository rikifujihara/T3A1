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

Software should be developed so that it can efficiently utilise resources such as disk-space, processing power and memory. This relates closely to reliability, scalability and usability. Inefficient utilisation of resources will lead to poor scalability, degradation of user experience and less reliable performance. Software can be made more efficient by reducing the number of database queries required to produce the desired output. It can also be improved by optimizing the front-end components of the software such as image sizes. Third-party tools such as Bootstrap can also be reduced down to the components that the software actually uses so that the browser doesn't have to load the many styles that the software doesn't use therefore improving loading times.

## Integrity/Security

Software should be developed in a way that aims to maintain integrity and security. Software security relates to how well the software can protect the data that it contains and how well it can protect itself from malicious attacks such as viruses. Database design has a large role in the efficiency and integrity of software, as database design decisions are often centred around improving those aspects of the software. Normalisation of the database structure can help to improve the reliability and integrity of the data by preventing anomalies such as duplication or deletion anomalies, but too much normalisation can make the data more complex to query which may impact the overall efficiency of the software.

## Reusability

Software reusability relates to how easily the software can be used across other modules. Software can be made more reusable by developing it in such a way that it is generic enough to be applied to other functions in the product/application. Making code reusable saves lots of development time and money.

# Question 3 - MERN stack

# Question 4 - Knowledge/Skills required to build a website for a small business as part of a team

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

### Debugging
Debugging was a skill required throughout the whole project. Whenever an error occurred, I would use a combination of Rails' helpful error messages and console output to identify the source of the problem and rectify it.

### Manual testing
Manual testing was a skill required to complete the project. In order to ensure ScooterBay functioned as intended, each feature and function was manually tested by checking the outputs of various inputs and ensuring they remain functional when other features are implemented. 

## References

### Question 1

Brandon J, 2020, Git Collaboration - Forking Workflow Lesson, Academy of Information Technology

### Question 2

Software Testing Help 2022, What Are The Quality Attributes?, softwaretestinghelp.com, viewed 10 July 2022, <https://www.softwaretestinghelp.com/what-are-the-quality-attributes/>.
