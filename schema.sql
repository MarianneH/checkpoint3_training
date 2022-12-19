-- MySQL Script generated by MySQL Workbench
-- Mon Dec 19 12:15:29 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`users` ;

CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  PRIMARY KEY (`id_users`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`posts` ;

CREATE TABLE IF NOT EXISTS `mydb`.`posts` (
  `id_posts` INT NOT NULL AUTO_INCREMENT,
  `content` BLOB NOT NULL,
  `date` DATETIME NOT NULL,
  `user` INT NOT NULL,
  PRIMARY KEY (`id_posts`),
  INDEX `id_users_idx` (`user` ASC) VISIBLE,
    FOREIGN KEY (`user`)
    REFERENCES `mydb`.`users` (`id_users`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`comments` ;

CREATE TABLE IF NOT EXISTS `mydb`.`comments` (
  `id_comments` INT NOT NULL AUTO_INCREMENT,
  `content` BLOB NOT NULL,
  `date` DATETIME NOT NULL,
  `user` INT NOT NULL,
  `post` INT NOT NULL,
  PRIMARY KEY (`id_comments`),
  INDEX `id_users_idx` (`user` ASC) VISIBLE,
  INDEX `id_posts_idx` (`post` ASC) VISIBLE,
  CONSTRAINT `id_users`
    FOREIGN KEY (`user`)
    REFERENCES `mydb`.`users` (`id_users`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_posts`
    FOREIGN KEY (`post`)
    REFERENCES `mydb`.`posts` (`id_posts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
