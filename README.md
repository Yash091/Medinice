# Medinice

MediNice is an online consultancy website where patient can book appointment with doctor followed by a scheduled video call.

## Tech-Stack
1. [ReactJs](https://reactjs.org/)
2. [NodeJs](https://nodejs.org/en/about/)
3. [Express](https://expressjs.com/)
4. [MongoDb](https://www.mongodb.com/)

## Pre-Requisites

1. Any IDE (eg. VS Code , Sublime etc).
2. Node JS
3. NPM Installer

## Instructions

- You can clone the repository

  1. Make sure your machine is having internet connection.
  2. Open shell (which ever your OS support) on your PC.
  3. Change drive to the location where you want your project to be copied.
  4. Make a folder name **Medinice** and change directory to that folder.
  5. Now type or copy-paste the below given commands.
      - Frontend
        ```
          https://github.com/Yash091/Medinice.git
        ```
      - Backend
        ```
          https://github.com/Yash091/Medinice-server.git
        ```
  6. Press Enter and the project will be cloned in you system.

  ```You can directly download the zip file and extract it```

- After extracting the zip file or after cloning the repository

  1. You will find 2 folders.
      - Medinice
      - Medinice-server
      
      ```You can change the names of folder if you want.```
   2. To run Client folder, type the following commands in terminal
      - cd Medinice
      - npm install
      - npm start
      
      ```Frontend port - 3000```
  3. To run Server folder, type the following commands in terminal
      - cd Medinice-server
      - npm install
      - npm start
      
      ```Backend port - 8000```
  4. Your project will start running if you followed the instructions properly.

## Brief Project Structure

```
/
|-- medinice/		
    |-- public/
        |-- index.html            #First webpage of the project
    |-- src/
        |-- components/           #Contains all the required components of project
            |-- DoctorProfile/          #Contains UI for Doctor's profile
            |-- PatientProfile/         #Contains UI for Patient's profile
            |-- doctorCard/             #Contains UI for Doctor's Card
            |-- footer/                 #Contains UI for footer
            |-- meetOurSpecialists/     #Contains UI for meeting specialists container
            |-- navbar/                 #Contains UI for Navbar
            |-- whychooseus             #Contains UI for why choose us container
        |-- images/               #Contains images used in the project
        |-- context/              #Contains context file
        |-- pages/                #Contains all the different pages
            |-- Authentication/         #Contains pages related to authentication
            |-- home/                   #Contains home page
            |-- ContactUs/              #Contains ContactUs page
            |-- LandingPages/           #Contains Landing Pages
            |-- ProfilePages/           #Contains Profile Pages for doctor, patient and admin
            |-- VideoCall/              #Contains Video Call Page
            |-- DetailView/             #Contains Detail View Pages for doctor and patient
        |-- services/             #Contains all the api functions used in the project
|    
|-- Medinice-server/
    |-- controller/          #Contains all the controllers of project
        |-- adminconroller.js     #Contains all the functions related to admin
        |-- doctorController.js   #Contains all the functions related to doctor
        |-- patientController.js  #Contains all the functions related to patient
    |-- database/            #To establish connection between database and backend
    |-- modal/               #Contains Schemas
        |-- DoctorSchema.js       #Contains doctor schema
        |-- PatientSchema.js      #Contains patient schema
    |-- route/               #Contains all routes used in project
    |-- server.js            #Main file of server folder
```

## APIs

| Method | Route | parameters | body | Description |
| -------- | -------- | -------- | -------- | -------- |
| `POSt` | /adddoctor | |  | Take the details as input and create doctor profile |
| `POST` | /logdoctor | | password | Take the password as input and authenticate doctor |
| `GET` | /getalldoctor | | name , email , password , enrolment no. , cgpa , semester , course , mobile , gender , resume | Returns array containing all doctors |
| `GET` | /getdoctorr | | | Takes an id and returns information of that doctor |
| `POST` | /updatedoctor | | name , email , password , cgpa , semester , course , mobile , gender , resume | Take the details as input and update doctor |
| `POST` | /addpendingrequest | | studentId | Add a meeting request in pending request array of doctor |
| `GET` | /getpendingappts | | studentId | Returns array containing all the pending requests for a particular doctor |
| `POST` | /deletependingreq | | name , type , description | Delete a pending request for a particular doctor |
| `POST` | /addupcomingappt | | | Add a meeting request in upcoming request array of doctor |
| `GET` | /getupcomingappts | companyId | | Returns array containing all the upcoming requests for a particular doctor |
| `POST` | /addpastappt | | companyId | Add a meeting details in past appointments array of doctor |
| `GET` | /getpastappts | | companyId | Returns array containing all the past requests for a particular doctor |
| `POST` | /addpatient | | name , description , salary , company_name | Take the details as input and create patient profile |
| `POST` | /logPatient | | | Take the password as input and authenticate patient |
| `GET` | /getallpatient | JobId | | Returns array containing all patients |
| `GET` | /getpatient | | jobId | Takes an id and returns information of that patient |
| `POST` | /searchdoctor | | jobId | Takes the required tags in inputs and returns the matching doctor profiles. |
| `POST` | /updatepatient | | enrolment number , student name , jobId , jobName , companyName | Take the details as input and update patient |
| `POST` | /addpatupcomingappt | studentId | | Add a meeting request to upcoming appointment array of patient |
| `POST` | /addpatpastappt | | | Add a meeting request to past appointment array of patient |  
| `POST` | /logAdmin | | | Takes password of admin as input and authenticate admin. |

## Screens  
![Frame 84](https://user-images.githubusercontent.com/76587223/169648864-0d055439-6316-43c1-b34b-ccd072614946.png)
