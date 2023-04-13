FROM openjdk:latest
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/microservice-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
LABEL authors="retya"

ENTRYPOINT ["java","-jar","/app.jar"]