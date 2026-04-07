import { Button, Dialog, DialogContent, DialogTitle, IconButton, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import DxReport from "./DxReport"

const Form = () => {
    const [openReport, setOpenReport] = useState(false)
  return (
    <div className="min-h-screen pt-5 p-1 bg-gray-800">
      <div className="mx-auto max-w-5xl bg-gray-200  rounded">
        <form className="text-blue-900 flex flex-col">
            <div className="p-5 max-w-4xl">
                <div className="mt-1 grid grid-cols-12 items-center">
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
                    <div className="col-span-3"></div>
                    <Button variant="outlined" onClick={() => setOpenReport(true)} className="col-span-2">Report</Button>
                </div>
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="my-7 grid grid-cols-12 items-center">
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
            <div className="bg-gray-50 max-w-5xl p-5 rounded-lg">
                <div className="mt-1 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">Dia</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-2 text-center" htmlFor="demo">Guage</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-2 text-center" htmlFor="demo">GSM</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                    <label className="col-span-1 text-center" htmlFor="demo">Weight</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                </div>
                <div className="mt-1 grid grid-cols-12 items-center">
                    <label className="col-span-3" htmlFor="demo">stitch Length</label>
                    <TextField variant='filled' size="small" className="col-span-1"/>
                </div>
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
                <div className="mt-1 grid grid-cols-12 items-center">
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
            <Dialog
                open={openReport}
                maxWidth="xl"
                fullWidth
                >
                <DialogTitle>Report Preview</DialogTitle>
                <IconButton
                        aria-label="close"
                        onClick={() => setOpenReport(false)}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                        >
                            Close
                        </IconButton>
                <DialogContent style={{ height: "95vh" }}>
                    <DxReport />
                </DialogContent>
                </Dialog>
        </form>
      </div>
    </div>
  )
}

export default Form
