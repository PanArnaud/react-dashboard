import React from "react";
import "./datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datasource";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
