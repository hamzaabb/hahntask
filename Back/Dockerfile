# Use official OpenJDK image as base
FROM openjdk:17-jdk-alpine

# Set work directory
WORKDIR /app

# Copy the executable jar 
COPY target/task-app.jar task-app.jar

# Expose port 
EXPOSE 8085

# Run the jar file
ENTRYPOINT ["java", "-jar", "task-app.jar"]
