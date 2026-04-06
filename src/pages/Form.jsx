import { MenuItem, Select } from "@mui/material"
import { useState } from "react"

const Form = () => {
    const [first, setfirst] = useState([''])
  return (
    <div className="h-screen pt-10 p-5 bg-gray-800">
      <div className="mx-auto bg-gray-200 p-3 rounded">
        <form className="grid grid-cols-2">
            <div className="p-5 max-w-2xl ">
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Industry</label>
                    <Select
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
            <div className=" bg-gray-100 p-5 max-w-2xl rounded-lg">
                <div className="mt-3 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Industry</label>
                    <Select
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
        </form> 
      </div>
    </div>
  )
}

export default Form
