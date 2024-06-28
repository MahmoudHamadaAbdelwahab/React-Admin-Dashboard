 import {useState} from 'react'
 import './products.scss'
 import DataTable from '../../components/datatable/datatable';
 import Add from '../../components/add/add';
 import { products } from '../../data';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

 const columns: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 90 },
  {
      field:'status',headerName:'Status',width:100,type:'Boolean'
  },
  {
    field: "title",
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: "color",
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: "inStock",
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  ];
  


 const Products = () => {

  const [open,setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Products</button>
      </div>

      <DataTable slug="Products" columns={columns} rows={products}/>
      
      {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
    
    </div>
  )
}
export default Products
