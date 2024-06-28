import { GridColDef } from '@mui/x-data-grid';
import './add.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query';
type Props = {
    slug:string;
    columns:GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

 const Add = (props:Props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn:()=>{
        return fetch(`http://localhost:8800/api/${props.slug}s`,{
          method:'post',
          headers:{
            Accept:'application/json',
            "content-Type":"application/json"
          },

          body:JSON.stringify({
            id:111,
            img:'',
            lastName:'hello',
            firstName:'test',
            email:'testme@gmail.com',
            phone:'215 587 999',
            createdAt:'01.02.2023',
            verified:true,
          }),
        });
      },
      onSuccess: ()=>{
        queryClient.invalidateQueries([`all${props.slug}`])
      }
    })

const handelSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    // add new item
    mutation.mutate()
    props.setOpen(false)
}

  return (
    <div className='add'>
        <div className="model">
            <span className="close" onClick={()=>props.setOpen(false)}>x</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handelSubmit}>
                {props.columns.filter(item=>item.field !== 'id' && item.field !== 'img')
                .map(column=>(
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button>send</button>
            </form>
        </div>
    </div>
  )
}
export default Add
