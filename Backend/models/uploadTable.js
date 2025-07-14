const uploaTable = `CREATE TABLE IF NOT EXISTS Images(
    imgId INT AUTO_INCREMENT,
    path VARCHAR(255),
    filename VARCHAR(255),
    PRIMARY KEY(imgId)
)`;

export default uploaTable;