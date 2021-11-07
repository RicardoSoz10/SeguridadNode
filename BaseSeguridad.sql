CREATE DATABASE proyectoSeguridad;
USE proyectoSeguridad;

CREATE TABLE Users (
	userid int NOT NULL AUTO_INCREMENT,
	name varchar(32),
    email varchar(64),
    password varchar(64),
    PRIMARY KEY(userid)
);
DROP TABLE Users;

INSERT INTO Users(userid, name, email, password)
VALUES
	(0, "Jesus", "micuenta@hotmail.com", sha2("ContraseñaNoSegura", 256)),
	(0, "Aaron", "aaroncuenta@hotmail.com", sha2("OtraContraseña", 256)),
    (0, "Andrea", "holasoyandrea@hotmail.com", sha2("UnaContraseñaMedioSegura",256)),
    (0, "Ricardo", "cuentaricardo@soygay.com", sha2("LaContraseñaMasDebil", 256));

DROP PROCEDURE getUsers
DELIMITER //
CREATE PROCEDURE getUsers()
BEGIN
	SELECT * from Users;
END //
DELIMITER ;
CALL getUsers()

DROP PROCEDURE addUser
DELIMITER //
CREATE PROCEDURE addUser(IN name varchar(32), IN email varchar(64), IN password varchar(64))
BEGIN
	INSERT INTO Users VALUES(0, name, email, SHA2(password, 256));
END //
DELIMITER ;
CALL addUser("Juan", "juan@ejemplo2.com", "contra34seña");

DELIMITER //
CREATE PROCEDURE deleteUser(IN user_index int)
BEGIN
	DELETE FROM Users WHERE Users.userid = user_index;
END //
DELIMITER ;
CALL deleteUser(5)