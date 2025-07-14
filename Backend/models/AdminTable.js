
const AdminTable = `CREATE TABLE IF NOT EXISTS Admin (
    AdminId INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Phone VARCHAR(20)
);
`
export default AdminTable;