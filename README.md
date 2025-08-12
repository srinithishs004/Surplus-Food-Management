# Surplus Food Management System

A comprehensive web application designed to reduce food waste and alleviate hunger by connecting food donors, volunteers, and beneficiaries in a seamless ecosystem.

## 🌟 Overview

The Surplus Food Management System is a full-stack application that facilitates the redistribution of excess food from weddings, parties, events, and other sources to those who are hungry. Our platform creates a bridge between food abundance and food scarcity, promoting community welfare and environmental sustainability.

> *"Hunger is not a problem. It is an obscenity. How wonderful it is that nobody need wait a single moment before starting to improve the world"* – Anne Frank

## 🎯 Features

### For Donors
- **Food Donation Form**: Easy-to-use interface for registering food donations
- **Donor Dashboard**: Track donation history and status
- **Real-time Updates**: Get notifications about donation pickup and delivery

### For Volunteers
- **Task Management**: View and accept food pickup and delivery tasks
- **Location Services**: Integrated Google Maps for efficient route planning
- **Status Tracking**: Update task progress in real-time

### For Beneficiaries
- **Food Requests**: Browse and request available food donations
- **Order Tracking**: Monitor the status of food requests
- **Landing Page**: Personalized dashboard for beneficiaries

### General Features
- **User Authentication**: Secure login and registration system
- **Role-based Access**: Different interfaces for donors, volunteers, and beneficiaries
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Real-time Communication**: Status updates and notifications

## 🏗️ Architecture

### Frontend
- **Framework**: React 18.3.1 with Vite
- **Routing**: React Router DOM for single-page application navigation
- **UI Components**: Bootstrap 5.3.3 and React Bootstrap
- **Maps Integration**: Google Maps API for location services
- **HTTP Client**: Axios for API communication
- **Icons**: React Icons library

### Backend
- **Framework**: Spring Boot 2.7.1
- **Language**: Java
- **Database**: Microsoft SQL Server
- **ORM**: Spring Data JPA
- **API Documentation**: Swagger/OpenAPI
- **Build Tool**: Gradle

## 📁 Project Structure

```
Surplus Food Management System/
├── Surplusfoodfrontend/          # React frontend application
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── assets/              # Static assets
│   │   └── styles/              # CSS files
│   ├── public/                  # Public assets
│   └── package.json            # Frontend dependencies
│
├── Surplusfood_backend)/        # Spring Boot backend
│   └── surplusfood/
│       ├── src/main/java/       # Java source code
│       │   └── com/team2/surplusfood/
│       │       ├── controller/  # REST controllers
│       │       ├── model/       # Entity models
│       │       ├── services/    # Business logic
│       │       ├── repositories/# Data access layer
│       │       └── dto/         # Data transfer objects
│       ├── src/main/resources/  # Configuration files
│       └── build.gradle        # Backend dependencies
│
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **Java** (JDK 11 or higher)
- **Microsoft SQL Server**
- **Git**

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Surplusfoodfrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd "Surplusfood_backend)/surplusfood"
   ```

2. Configure database connection in `src/main/resources/application.properties`

3. Build and run the application:
   ```bash
   ./gradlew bootRun
   ```

4. The backend API will be available at `http://localhost:8090`

### Database Setup
- Ensure Microsoft SQL Server is running
- Create a database for the application
- Update connection details in `application.properties`

## 🛠️ Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `./gradlew bootRun` - Start the Spring Boot application
- `./gradlew build` - Build the application
- `./gradlew test` - Run tests

## 🌐 API Documentation

Once the backend is running, you can access the API documentation at:
- Swagger UI: `http://localhost:8090/swagger-ui.html`
- OpenAPI Spec: `http://localhost:8090/v3/api-docs`

## 🔧 Configuration

### Environment Variables
Create appropriate configuration files for different environments:

**Frontend** (`.env`):
```
VITE_API_BASE_URL=http://localhost:8090
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

**Backend** (`application.properties`):
```properties
spring.datasource.url=jdbc:sqlserver://crsvcsqltrn02.chec.local;instanceName=CORP_TRN;databaseName=Training
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.SQLServer2012Dialect
server.port=8090
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Developed by Team 2 as part of a community service initiative to address food waste and hunger.

## 🙏 Acknowledgments

- **Special gratitude to Sri Nithish S** (srinithishs004@gmail.com) for his invaluable guidance, inspiration, and contributions that made this humanitarian project possible
- Thanks to all volunteers and donors who make this platform meaningful
- Bootstrap team for the excellent UI framework
- Spring Boot community for the robust backend framework
- React team for the powerful frontend library

## 📞 Support

For support, please contact:
- **Sri Nithish S**: srinithishs004@gmail.com (Project Lead)
- Create an issue in the repository for bug reports and feature requests

---

**Together, we can make a difference in reducing food waste and fighting hunger in our communities.**