import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Products = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$ 45.99",
      stock: "32 in stock",
      totalSale: "20",
    },
    {
      id: 2,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$ 45.99",
      stock: "32 in stock",
      totalSale: "20",
    },
    {
      id: 3,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$ 45.99",
      stock: "32 in stock",
      totalSale: "20",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <div className=" flex justify-between items-center p-6 ">
        <h1>Product Sell</h1>
        <div className=" flex">
          <div className=" flex items-center gap-1"> 
          <i class="fa-solid fa-magnifying-glass" style={{ color: "gray" }}></i>
          <input type="text" placeholder="Search" />
          </div>
          <div className=" flex items-center gap-4 cursor-pointer">
            <h1>Last 30 days</h1>
            <i class="fa-solid fa-angle-down fa-lg p-2 mt-1" style={{color:'gray'}}></i>
          </div>
        </div>
      </div>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <div className=" flex justify-between p-3  ">
              <TableCell className="Table-title">Product Name</TableCell>
              <div className=" flex gap-7 p-4">
                <TableCell className="table-title">Stock</TableCell>
                <TableCell className="table-title">Price</TableCell>
                <TableCell className="table-title">Total Sale</TableCell>
              </div>
            </div>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <div className=" flex justify-between">
                <TableCell className="tableCell">
                  <div className=" flex items-center">
                    <img src={row.img} alt="" className=" w-30 h-20" />
                   <div className="flex flex-col items-start"> <h1 className=" text-lg">{row.product}</h1> <span className=" text-gray-500">Lorem ipsum dolor sit amet</span></div>
                  </div>
                </TableCell>
                <div className=" flex gap-9 mr-8">
                  <TableCell className="tableCell">{row.stock}</TableCell>
                  <TableCell className="tableCell">{row.price}</TableCell>
                  <TableCell className="tableCell">{row.totalSale}</TableCell>
                </div>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
