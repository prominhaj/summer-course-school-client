import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DashBoardTable = ({
  number,
  header1,
  header2,
  header3,
  header4,
  header5,
  children,
}) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {number && (
                <TableCell className="!text-lg !font-medium">#</TableCell>
              )}
              <TableCell className="!text-lg !font-medium">{header1}</TableCell>
              <TableCell className="!text-lg !font-medium" align="left">
                {header2}
              </TableCell>
              <TableCell className="!text-lg !font-medium" align="center">
                {header3}
              </TableCell>
              <TableCell className="!text-lg !font-medium" align="center">
                {header4}
              </TableCell>
              {header5 && (
                <TableCell className="!text-lg !font-medium" align="center">
                  {header5}
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashBoardTable;
