import { MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"

const Form = () => {
    const [first, setfirst] = useState([''])
  return (
    <div className="h-screen pt-10 p-1 bg-gray-800">
      <div className="mx-auto bg-gray-200 py-3 rounded">
        <form className="grid grid-cols-12">
            <div className="col-span-5 p-5 max-w-2xl ">
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Industry</label>
                    <Select
                        variant="filled"
                        className="col-span-4"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Main Group</label>
                    <Select
                        variant="filled"
                        className="col-span-4"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <label className="col-span-3 text-center">System Id</label>
                    <Select
                        variant="filled"
                        className="col-span-2"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Sub Group</label>
                    <Select
                        variant="filled"
                        className="col-span-9"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Category Type</label>
                    <Select
                        variant="filled"
                        className="col-span-9"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Process Type</label>
                    <Select
                        variant="filled"
                        className="col-span-9"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Ratio Type/Blend</label>
                    <Select
                        variant="filled"
                        className="col-span-9"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="my-10 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Main Group</label>
                    <Select
                        variant="filled"
                        className="col-span-4"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <label className="col-span-3 text-center">System Id</label>
                    <Select
                        variant="filled"
                        className="col-span-2"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="col-span-7 bg-gray-50 p-5 rounded-lg">
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Dia</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-2 text-center" htmlFor="demo">Guage</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-2 text-center" htmlFor="demo">GSM</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-1 text-center" htmlFor="demo">Weight</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">stitch Length</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo"></label>
                    <Select
                        variant="filled"
                        className="col-span-4"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Yarn</label>
                    <Select
                        variant="filled"
                        className="col-span-4"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <label className="col-span-2 text-center" htmlFor="demo">Ratio 1</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-1 text-center" htmlFor="demo">Ratio 2</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo"></label>
                    <Select
                        variant="filled"
                        className="col-span-4"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Fabric Construction</label>
                    <Select
                        variant="filled"
                        className="col-span-9"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Fabric Code</label>
                    <Select
                        variant="filled"
                        className="col-span-9"
                        labelId="demo"
                        id="demo"
                        size="small"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
            </div>
        </form> 
      </div>
    </div>
  )
}

export default Form
