# What's Cookin

What's Cookin is a meal planning application that allows users to view their favorite recipes, view the ingredients to make the recipes, and the total cost of the recipes are. Users can discover new recipes and can choose what recipes to cook.

### **Downloading the files**

1. click on this [link](https://github.com/mattruder/whats-cookin-starter-kit)

2. hit this green box that says `Code`

![green box](https://user-images.githubusercontent.com/89413678/161453090-3fb52412-8b7f-4c8e-b7f6-359a83db5114.png)

3. Copy the SSH

![Copy SSH](https://user-images.githubusercontent.com/89413678/161453094-154b45dd-f6bf-4883-bfeb-4df1890f256b.png)

4. Open the terminal
5. Type `git clone` + paste the SSH link

![Apr-03-2022 19-41-26](https://user-images.githubusercontent.com/89413678/161460429-1cde31b2-081d-490c-a63c-5e4f9f6980fd.gif)


### **To Run the Application and View the Webpage**

1. In the main-directory, run `npm start`

You should see a similar screen below. 

![View Website](https://user-images.githubusercontent.com/89413678/161453492-049643ab-135d-4d7a-a86a-7802d8468ac8.png)

2. To view the webpage, copy and paste the first link in your console under `webpack server` into the input field in the window. 

![View Website](https://user-images.githubusercontent.com/89413678/161453609-03cf671a-359b-4668-af50-85df2e7f1f25.png)


![Apr-18-2022 17-27-32](https://user-images.githubusercontent.com/89413678/163892630-60d1c7bb-6f59-47cd-92b7-3c46845be6e2.gif)


### **Using the Application**

**_To See All Recipes_**
To see all recipes, users can click on the `View All Recipes` button. This will take them to a list of all the recipes. 

**_Favorite a Recipe_**
To favorite a recipe after the user clicks on a recipe in the `View All Recipes` page, the user can click on the button `Favorite Recipe`. 

Users should now be able to view their favorite recipes when clicking on the `Favorites` button in the top right corner of the page. 

![Apr-04-2022 13-14-07](https://user-images.githubusercontent.com/89413678/161615503-0aaacf1d-a52d-4379-a2d9-61ea6c6dfa35.gif)

**_To Search for a Favorite Recipe_**
To search for a specific recipe, click the `Favorites` button to be taken to the user's favorite page and then type in a keyword of the recipe in the searchbar. It will display all favorited recipe that include that keyword. 

![Search Favorites](https://user-images.githubusercontent.com/89413678/163894486-0b059a99-2d46-4d60-b218-03e38b05ac81.gif)

**_To Unfavorite a Recipe_**
To unfavorite a recipe, the user can click on the 
and click the `Unfavorite` button in their `Favorite` page. The recipe will be removed from the user's Favorites list.

![Apr-04-2022 13-16-34](https://user-images.githubusercontent.com/89413678/161615917-bf656e6d-f246-496e-86e0-a223f38eedbc.gif)

**_Add a Recipes to Cook_**
To add a recipe to cook, after the user clicks on a recipe in the `View All Recipes` page, the user can click on the button `Add to My Cook List`.

Users should now be able to view the recipe they want to cook when clicking on the `Recipes to Cook` button.

![Apr-04-2022 13-19-48](https://user-images.githubusercontent.com/89413678/161616433-68134cea-a5b3-42f2-bbe6-04c6056c20aa.gif)

**_Cook a Recipe_**
To cook a recipe, the user can click on the 
and click the `Cook` button in their `Recipes To Cook` page. The recipe will dissappear from the user's `Recipes To Cook` list.

![Apr-18-2022 17-32-15](https://user-images.githubusercontent.com/89413678/163892929-630c5f24-88b1-4f03-b732-fa8df4700b1e.gif)

**_To Search for a Recipe_**
To search for a specific recipe, type in a keyword of the recipe in the searchbar. It will display all recipe names that include that keyword. 

![Apr-18-2022 17-48-27](https://user-images.githubusercontent.com/89413678/163894373-014f086b-9bd9-4c26-9cad-d05c7a337e25.gif)

**_To View the Pantry_**
To view the user's pantry, the user can click on the `My Pantry` button to see their the names and quantities of each ingredient in the user's pantry.

![Apr-18-2022 17-35-56](https://user-images.githubusercontent.com/89413678/163893270-82492b5a-fbe2-4135-812b-8c9e6a70dd12.gif)

**_To Go To the Main Screen_**
To go back to the main screen, click on the title of the page `What's Cookin?`. This will take the user back to the main screen. 

![Apr-18-2022 17-44-49](https://user-images.githubusercontent.com/89413678/163893870-0d4f6806-52ee-4f3d-bf98-8ef1379872f4.gif)

### **To Close Down the Application**

In the terminal where the app is running, use `control` + `c` to stop the application.

### **Accessibility**

Lighthouse and Wave evaluation app was used to evaluate the app for accessibility. 

![Screen Shot 2022-04-18 at 5 58 06 PM](https://user-images.githubusercontent.com/89413678/163895177-b989b26b-cb20-4c5f-85f2-e69f9070a407.png)

### **Technologies Used**
- JavaScript
- Mocha
- Chai
- Webpack
- CSS
- HTML


### **Challenges**
-  One of the challenges of developing this app was the time frame to finish the app for Part 2. 
-  Another challenge we faced was user error handling. 


### **Wins**
- Accessibility of the app was over 70% when we initially ran `Lighthouse` and became 100% after refactoring our app to make it more accessible.


### **Contributors**
- Matt Ruder [GitHub](https://github.com/mattruder)
- Nathan Hodnett [GitHub](https://github.com/nhodnett)
- Nicholas Ao [GitHub](https://github.com/aominhlong)


### **Future Additions**
- Allow users to add ingredients to the pantry
- Finalize error handling notifications for the user to view
- Allow users to remove recipe to cook functionality
- Allow users to filter using multiple tags
- Add a rating system so users can rate the recipe
- When user clicks on a image on the main page, it will take them to the image recipe page
