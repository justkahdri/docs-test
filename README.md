# Docs
This repository contains the Markdown files for the landing-test project.

## Branches
The repository contains two branches:

- **preview**: This branch is for development and testing new changes. Any changes should be done on this branch and then reviewed and tested before merging them to the main branch.
- **main**: This branch is for production and should only contain stable and tested changes.

## How to contribute
1. Clone the repository
    ```git clone git@github.com:justkahdri/meili-docs.git```

2. Checkout the preview branch
    ```git checkout preview```
    
3. Make the changes you want to make, add, commit and push to the preview branch
```
git add .
git commit -m "your commit message"
git push
```

4. Create a pull request from preview to main

5. Wait for the review and test of your changes and if approved, it will be merged to main.

## Deployment
Changes on main branch will be automatically deployed to production.

## Note
Please follow the guidelines, and feel free to ask any questions if you have any doubts.
