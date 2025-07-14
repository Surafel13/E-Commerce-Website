const userTable = `CREATE TABLE IF NOT EXISTS User(
    userId INT AUTO_INCREMENT,
    name VARCHAR(250) UNIQUE,
    email VARCHAR(250) UNIQUE,
    password VARCHAR(600),
    address VARCHAR(255),
    phoneNumber VARCHAR(50),
    PRIMARY KEY(userId)
)`;



export default userTable;
