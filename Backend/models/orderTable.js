import userTable from "./userTable.js";
import ProductTable from "./productTable.js";


const orderTable = `CREATE TABLE IF NOT EXISTS Orders(
    orderId INT AUTO_INCREMENT,
    ProductId INT,
    userId int, 
    quantity INT,
    status varchar(200),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(orderId),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId),
    FOREIGN KEY (userId) REFERENCES User(userId)
)`;

export default orderTable; 
