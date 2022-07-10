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