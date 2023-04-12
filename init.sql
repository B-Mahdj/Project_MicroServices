CREATE DATABASE IF NOT EXISTS BD;
USE BD;

DROP TABLE IF EXISTS Location, Propriete, Utilisateur;

CREATE TABLE IF NOT EXISTS utilisateur (
id_user INT(10) UNSIGNED UNIQUE NOT NULL,
password VARCHAR(28),
nom VARCHAR(50),
prenom VARCHAR(50),
adresse VARCHAR(50),
ville VARCHAR(50),
mail VARCHAR(50),
telephone VARCHAR(10),
proprietaire TINYINT(1),
locataire TINYINT(1),
PRIMARY KEY (id_user)
);

CREATE TABLE IF NOT EXISTS propriete(
id_propriete INT(10) UNSIGNED UNIQUE NOT NULL,
id_proprietaire INT(10) UNSIGNED,
type VARCHAR(50),
adresse VARCHAR(50),
ville VARCHAR(50),
prix FLOAT,
dispo TINYINT(1),
photo VARCHAR(100),
PRIMARY KEY (id_propriete),
FOREIGN KEY (id_proprietaire) REFERENCES utilisateur(id_user)
);

CREATE TABLE IF NOT EXISTS location(
id_location INT(10) UNSIGNED UNIQUE NOT NULL,
id_locataire INT(10) UNSIGNED,
id_propriete INT(10) UNSIGNED,
date_deb DATE,
date_fin DATE,
annule TINYINT(1),
PRIMARY KEY (id_location),
FOREIGN KEY (id_locataire) REFERENCES utilisateur(id_user),
FOREIGN KEY (id_propriete) REFERENCES propriete(id_propriete)
);

INSERT INTO utilisateur VALUES (1, 'motdepasse', 'Dupont', 'Jean', 'Rue des Lilas', 'Paris', 'j.dupont@email.com', '0123456789', 1, 0);
INSERT INTO utilisateur VALUES (2, 'password', 'Martin', 'Marie', 'Avenue des Roses', 'Lyon', 'm.martin@email.com', '0678901234', 0, 1);
INSERT INTO utilisateur VALUES (3, '12345678', 'Leclerc', 'Pierre', 'Boulevard de la Liberté', 'Marseille', 'p.leclerc@email.com', '0456789123', 1, 1);

INSERT INTO propriete VALUES (1, 1, 'Maison', 'Rue des Lilas', 'Paris', 500000, 1, 'maison1.jpg');
INSERT INTO propriete VALUES (2, 2, 'Appartement', 'Avenue des Roses', 'Lyon', 300000, 0, 'appart1.jpg');
INSERT INTO propriete VALUES (3, 1, 'Villa', 'Avenue des Pins', 'Nice', 800000, 1, 'villa1.jpg');

INSERT INTO location VALUES (1, 2, 1, STR_TO_DATE('2023-05-01', '%Y-%m-%d'), STR_TO_DATE('2023-05-15', '%Y-%m-%d'), 0);
INSERT INTO location VALUES (2, 3, 2, STR_TO_DATE('2023-07-01', '%Y-%m-%d'), STR_TO_DATE('2023-07-31', '%Y-%m-%d'), 0);
INSERT INTO location VALUES (3, 2, 3, STR_TO_DATE('2023-06-15', '%Y-%m-%d'), STR_TO_DATE('2023-06-30', '%Y-%m-%d'), 0);
