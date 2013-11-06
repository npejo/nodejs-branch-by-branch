nodejs-branch-by-branch
=======================

Step by step guide how to setup and develop nodejs, express, mongoosejs, passportjs application.
This project can be used as:

**Boilerplate** - developers that understand the used technologies and like to skip the configuration part can easy get clean boilerplate for their project, only with the dependencies they need,
                  just checkout to the appropriate branch.

**Tutorial** - easy to follow setup and development of the example project SimpleTasks. To go through the tutorial checkout branch by branch starting from the `master` branch.

All the phases of the setting up and development of the example project (initialization, scaffolding, dependencies installation configuration and development) are split into separate branch.

The tutorial at start assumes that you have already installed `git`, `nodejs`, and have basic understanding of these technologies.
The instructions how the code in each branch is setup are placed in the *DOCS/branch-guide(X).md* file where *(X)* is the number of the branch.

Branch list with short description:

1.  **master** - Initialization
    * Boilerplate:
	    - initial project scaffolding (expressjs default)
	    - dependencies: express, jade, nodeamon
    * Tutorial - starting point
        This is the starting point, create new folder for your project
2. **app-config** - Initial configuration and updated scaffolding
3. **db-session-config** - Mongoosejs initialization and configuration of the db connection and session
5. **routes-config** -
5. **user-model** -
4. **auth** - Passportjs initialization, Sign up, Sign in, Sign out action
5. coming soon...
