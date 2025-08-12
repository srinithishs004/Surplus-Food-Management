---
description: Repository Information Overview
alwaysApply: true
---

# Surplus Food Management System Information

## Summary
A full-stack application designed to reduce food waste by connecting food donors, volunteers, and beneficiaries. The system facilitates the redistribution of excess food from events to those in need, promoting community welfare and environmental sustainability.

## Structure
- **Surplusfoodfrontend/**: React-based frontend application
- **Surplusfood_backend)/surplusfood/**: Spring Boot backend application
- **README.md**: Project documentation and setup instructions

## Projects

### Frontend (React Application)
**Configuration File**: package.json

#### Language & Runtime
**Language**: JavaScript/JSX
**Version**: React 18.3.1
**Build System**: Vite 5.3.4
**Package Manager**: npm

#### Dependencies
**Main Dependencies**:
- React 18.3.1
- React Router DOM 6.25.1
- Bootstrap 5.3.3
- React Bootstrap 2.10.4
- Axios 1.7.2
- React Google Maps API 2.19.3
- React Icons 5.2.1

**Development Dependencies**:
- Vite 5.3.4
- ESLint 8.57.0
- React Types 18.3.3

#### Build & Installation
```bash
cd Surplusfoodfrontend
npm install
npm run dev
```

#### Testing
**Framework**: Not explicitly defined
**Run Command**:
```bash
npm run lint
```

### Backend (Spring Boot Application)
**Configuration File**: build.gradle

#### Language & Runtime
**Language**: Java
**Version**: JDK 11 or higher
**Build System**: Gradle
**Framework**: Spring Boot 2.7.1

#### Dependencies
**Main Dependencies**:
- Spring Boot Starter Web
- Spring Boot Starter Data JPA
- Spring Boot DevTools
- Lombok
- Springdoc OpenAPI UI 1.7.0
- Springfox Swagger 2.10.5
- Microsoft SQL Server JDBC 10.2.0.jre8

#### Build & Installation
```bash
cd "Surplusfood_backend)/surplusfood"
./gradlew bootRun
```

#### Database Configuration
**Type**: Microsoft SQL Server
**Configuration**:
- URL: jdbc:sqlserver://crsvcsqltrn02.chec.local;instanceName=CORP_TRN;databaseName=Training
- Dialect: SQLServer2012Dialect
- DDL Auto: update
- Port: 8090

#### Testing
**Framework**: JUnit
**Test Location**: src/test/java/com/team2/surplusfood
**Run Command**:
```bash
./gradlew test
```

#### API Documentation
**Framework**: Swagger/OpenAPI
**Access URL**: http://localhost:8090/swagger-ui.html
**OpenAPI Spec**: http://localhost:8090/v3/api-docs

## Architecture
- **Frontend**: Single-page React application with component-based architecture
- **Backend**: Spring Boot REST API with layered architecture (controllers, services, repositories)
- **Database**: Microsoft SQL Server with JPA/Hibernate ORM
- **Communication**: RESTful API endpoints with CORS enabled for cross-origin requests