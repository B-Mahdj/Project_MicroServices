#FROM openjdk:latest
#VOLUME /tmp
#EXPOSE 8080
#ARG JAR_FILE=target/microservice-0.0.1-SNAPSHOT.jar
#ADD ${JAR_FILE} app.jar
#LABEL authors="retya"
#
#ENTRYPOINT ["java","-jar","/app.jar"]
# Utiliser une image de base contenant Java et Maven
FROM maven:latest AS builder

# Copier le code source dans le conteneur
COPY . /app

# Définir le répertoire de travail
WORKDIR /app

# Compiler l'application avec Maven
RUN mvn clean install

# Utiliser une image de base contenant Java pour l'exécution de l'application
FROM openjdk:latest

# Copier le fichier JAR généré dans le conteneur
COPY --from=builder /app/target/microservice-0.0.1-SNAPSHOT.jar /app/mon_application.jar

# Exposer le port sur lequel l'application écoute
EXPOSE 8080

# Commande d'exécution de l'application
ENTRYPOINT ["java", "-jar", "app/mon_application.jar"]
