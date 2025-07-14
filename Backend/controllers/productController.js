import connection from '../config/db.js'
import expressAsyncHandler from 'express-async-handler'
import ProductTable from '../models/productTable.js'
import upload from '../config/multerConfig.js'



export const createProduct =  expressAsyncHandler(async (req, res) => {
 
    const { CategoryId, ProductName, Price, Description } = req.body;
    const ImgPath = req.file ? `./uploads/${req.file.filename}` : null;

  
      const insertProduct = `
        INSERT INTO Product (CategoryId, ProductName, Price, Description, ImgPath)
        VALUES (?, ?, ?, ?, ?)
      `;

      try {
        await connection.execute( insertProduct, [CategoryId, ProductName, Price, Description, ImgPath])
        res.status(200).json({message : "Data inserted successfully!" })
        
      } catch (error) {
        console.log(error)
        res.status(400).json({error : "Data is not inserted!"});

      }
})
  



export const getProduct = expressAsyncHandler(async(req, res) => {
    const { CategoryId } = req.body;
    let selectProduct = `SELECT * FROM Product WHERE CategoryId=(?)`;

    try {
      const [result] = await connection.execute(selectProduct, [CategoryId])
      res.status(200).json(result)

    } catch (error) {
      console.log(error)
      res.status(400).json("Unable to select Product from database!")
    }

})


export const getMultipleElements = expressAsyncHandler( async(req, res) => {

  let selectAllElements = `SELECT * FROM Product`


  try {
    const [result] = await connection.execute(selectAllElements)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json("Unable to fetch data")

  }

})


export const deleteProduct = expressAsyncHandler(async (req, res) => {
    const { IDS } = req.body;

    if (!IDS || (Array.isArray(IDS) && IDS.length === 0)) {
        return res.status(400).json({ error: "No product IDs provided." });
    }

    const productIds = Array.isArray(IDS) ? IDS : [IDS];

    const dropProduct = `DELETE FROM Product WHERE ProductId = ?`;

    try {
        await Promise.all(
            productIds.map(id => connection.execute(dropProduct, [id]))
        );

        res.status(200).json({message : "Item(s) deleted successfully!"});
    } catch (error) {
        console.error("Delete failed:", error);
        res.status(500).json({error : "Unable to delete product item(s)."});
    }
});



