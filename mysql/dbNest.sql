-- Drop tables in the reverse order of creation for safety
DROP TABLE IF EXISTS ProfessionalSkill;
DROP TABLE IF EXISTS Skill;
DROP TABLE IF EXISTS Professional;

USE dbNest;

-- Create Professional table
CREATE TABLE IF NOT EXISTS Professional (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Create Skill table
CREATE TABLE IF NOT EXISTS Skill (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Create ProfessionalSkill join table for Many-to-Many relationship between Professional and Skill
CREATE TABLE IF NOT EXISTS ProfessionalSkill (
    professionalId INT NOT NULL,
    skillId INT NOT NULL,
    PRIMARY KEY (professionalId, skillId),
    FOREIGN KEY (professionalId) REFERENCES Professional(id) ON DELETE CASCADE,
    FOREIGN KEY (skillId) REFERENCES Skill(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
