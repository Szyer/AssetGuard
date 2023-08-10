# AssetGuard
AssetGuard is an early warning system that utilizes Spring and Angular to monitor and alert users when their assets reach a specified threshold. This project utilizes various REST APIs, Spring Security, and PostgreSQL to allow users to monitor their assets through various graphs.

## Technologies Used

- **Backend:** Java and Spring Boot
- **Frontend:** Angular
- **Database:** PostgreSQL

## Getting Started

### Prerequisites

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/BugTrackerX.git
   cd BugTrackerX


### Backend Setup

1. Navigate to the backend directory or open in preferred IDE:

   ```bash
   cd backend

2. Configure your PostgreSQL database settings in application.properties:

    ```bash
    spring.datasource.url=jdbc:postgresql://localhost:5432/assetMonitoring
    spring.datasource.username=postgres
    spring.datasource.password=postgres
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.format_sql=true
    spring.jpa.hibernate.ddl-auto=update

    spring.mail.host = smtp.gmail.com
    spring.mail.port = 587
    spring.mail.username=your_email
    spring.mail.password=your_email_password
    spring.mail.properties.mail.smtp.auth=true
    spring.mail.properties.mail.smtp.starttls.enable=true
  

3. Create a database in pgAdming of name `assetMonitoring`.
4. Build and run the Spring Boot backend.


### Frontend Setup

1. Navigate to the frontend directory or open in preferred IDE:
   
   ```bash
   cd frontend
   
2. Install dependencies:

   ```bash
   npm install

3. Start the Angular development server:

   ```bash
   ng serve


### Access the Application
* Backend: http://localhost:8080
* Frontend: http://localhost:4200
