# React-course
React course for Beginners

Run this Application in 3 simple steps

Step 1: > cd frontend
        > npm start
       
Step 2: Start the mongo client using below command:
        > mongod
        
Step 3: Start the node server
        > cd backend
        > node server

Step 4: You may want to create a docker image of the application using below command
        > docker build . -t mernimage

Step 5: Once the image is build Run the docker image on docker using below command
        > docker run -p 3000:3000 -p 5000:5000 mernimage
        
        
