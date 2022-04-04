# What's Cookin

What's Cookin is a meal planning application that allows users to view their favorite recipes, view the ingredients to make the recipes, and total cost of the recipes are. Users can discover new recipes and can choose what recipes to cook.

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


<!-- ADD GIF ON PASTING AND SHOWING THE HOMEPAGE OF WEBSITE -->


### **Using the Application**

**_To See All Recipes_**

To see all recipes, users can click on the `View All Recipes` button. This will take them to a list of all the recipes. 

**_Favorite a Recipe_**

To favorite a recipe, the user can click on a recipe in the `View All Recipes` page and then click on the button `Favorite Recipe`. 
<!-- Add image -->

Users should now be able to view their favorite recipes when clicking on the `Favorites` button in the top right corner of the page. 
<!-- Add Gif -->

**_To Unfavorite a Recipe_**

To unfavorite a recipe, the user can click on the 
and click the `Unfavorite` button. Now, the recipe will be removed from the user's Favorites list.

**_Add a Recipes to Cook_**

To add a recipe to cook, the user can click on a recipe in the `View All Recipes` page and then click on the button `Add to My Cook List`.
<!-- Add image -->

Users should now be able to view the recipe they want to cook when clicking on the `Recipes to Cook` button.
<!-- add Gif -->

### **To Close Down the Application**

In the terminal where the app is running, use `control` + `c` to stop the application.

### **Technologies Used**
- JavaScript
- Mocha
- Chai
- Webpack
- CSS
- HTML

### **Challenges**
-  One of the challenges of developing this app was implementing the fetch API to access the data being used in the app. We were able to access the data but not able to access it at the appropriate time.
- Another challenge was having so many elements in this project. This was by far the largest project that we have done to date and there was a big learning curve. 

### **Wins**
- We figured out the first challenge above by using `.this` and learned how to use `Promise.all()` effectively. 
- We also learned how to do asynchronous development.
- Test driven development is extremely effective. 


### **Contributors**
- Nathan Hodnett [GitHub](https://github.com/nhodnett)
- Matt Ruder [GitHub](https://github.com/mattruder)
- Nicholas Ao [GitHub](https://github.com/aominhlong)


### **Future Additions**
- Allow users to remove recipe to cook functionality
- Allow users to filter using multiple tags
- Add a rating system so users can rate the recipe

