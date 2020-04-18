# HEMAA Membership Tracker #
**HEMAA Membership Tracker v 1.0.0**

The HEMAMembership Tracker was developed for the [Historical European Martial Arts Alliance](https://www.hemaalliance.com/). The tracker was built to easily verify membership status of HEMAA members and associated parties such as vendors and event organizers with solely an email address. This application integrates with TidyHQ (membership management software) to allow for seamless use of its current user database hosted on TidyHQ instead of having to create another account. This will allow members to check their membership status in real-time and automatically be updated.

## Release Notes (4/20/2020) ##
- New Features 
  - Integration of Application Database with TidyHQ for automatic updates
- Bug Fixes
- Known Bugs

## Install Guide ##
### Pre-Requisites ###
- [React 16.0 or higher](https://reactjs.org/docs/getting-started.html)
- [NPM](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)

### Dependent Libraries ###
**None**; All needed libraries needed to run the application will be installed during build process

### Download Instructions ###
1. Go to [Github Repository](https://github.com/bitleighvu/HEMAMembershipTracker)
2. Under the repository name, click **Clone or Download**. This will copy the repository link and pull code from the most recent update. 
3. Open Terminal
4. Change the current working directory to the location where you want the cloned directory to be made
5. Type `git clone` and then paste copied repository link from Step 2

  ```
  $ git clone https://github.com/bitleighvu/HEMAMembershipTracker.git
  ```

6. Press **Enter**. Your local clone will be created.

- If you already have the repository downloaded, enter in, and run the command `git pull origin master` to retrieve the most recent changes.
  - [For more information on Git](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

### Build Instructions ###
1. Open the project folder using Terminal
2. Once open, input `cd hema-membership-tracker` into the command line 
3. Type `npm init` and press **Enter**
- Installation of Actual Application
- Application will be installed on your local machine once completing the **Download and Build Instructions**.
  
### Run Instructions ###
1. Open the project folder using Terminal
2. Once open, input `cd hema-membership-tracker` into the command line 
3. Type `git pull origin master` to retrieve the most recent changes in Terminal and press **Enter**
4. Type `npm start` and press **Enter**
5. Application will open on your default web browser on **http://localhost:3000/**

### Troubleshooting ###
- The project is not displaying on **http://localhost:3000/**
  - Check that you have opened the project folder and completed **Download and Build Instructions**
- There is an NPM start error
  - Open the project folder in terminal
  - Enter `npm install -g npm@latest` into the terminal to update npm to the latest build
  - Type `rm - rf node_modules` to remove the existing modules
  - Type `npm install` to re-install the project dependencies
  - This should fix an NPM start error. If there are any additional NPM errors, please let us know and you can also look at [Common NPM Errors](https://docs.npmjs.com/common-errors)
- Let our team know any problems or questions you encounter so we can further improve! 
