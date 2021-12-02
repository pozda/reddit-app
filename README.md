# Getting Started with ReadIt for Reddit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## **How...?**

### **To run the app locally:**

* open terminal and `cd` into project folder
* run `npm i` and wait until it finishes
* run `npm start` and wait until project compiles itself in development mode
* it will automatically start the browser and open `http://localhost:3000`


### **To run the tests:**

#### **In interactive mode (requires manual input):** 
* just run `npm run test` in terminal from the root folder (you could do in the separated terminal while app is running in local mode)
* you will also see code coverage table in the output

#### **In passive mode**
* just to get the test result, just run `npm run test-raw`

### **How to use the app?**

There are 3 ways to access subreddit you want. First one is to choose from listed subreddits on the initial screen (it is showed in batches of 10, you can go forward and backwards by clicking on the buttons under the list).

The second way is to find subreddit by typing the name of the subreddit in the input field on the right side of the app, it should populate the results in real time, and you just have to click on the desired search result.

Third way is not a typical use case, but it is possible to use it this way. If you know some subreddit that you want to open you can also open it by adding it to the base URL (i.e. for r/reactjs subreddit just put this -> http://localhost:3000/r/reactjs in your address bar while running the app locally and press enter, data for it will load).

After choosing subreddit from the list or search results (or any of the 3 mentioned ways), you can browse the selected subreddit and open a post as it links to the original posts on actual reddit.

If the post is of a picture type, you will see the actual picture, not just the title.

You can browse subreddit you entered (i.e. r/reactjs) as you will get the latest articles in a batch of 10 per page, naturally there are PREV and NEXT buttons for going forward or backward.

### **Available Scripts**

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### `npm run test`
Launches the test runner in the interactive watch mode with code coverage table.

### `npm run test-raw`
Launches the test runner in passive mode, displays the test results with code coverage. No inputs needed.

### `npm run build`
Runs the automated tests first and if everything is fine it proceeds to build the app for production to the build folder. This was altered to work in the deployment pipeline - if every test passes it builds it, otherwise the build is interrupted and fails.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### **Technology used:**

* create-react-app
* typescript
* styled-components
* JEST & Enzyme
* Git
* Eslint
* Netlify
