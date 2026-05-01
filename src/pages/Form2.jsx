import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  MenuItem
} from "@mui/material";

const Form2 = () => {
  const [tab, setTab] = useState(0);
  const [file, setFile] = useState(null);

  const handleTabChange = (e, newValue) => setTab(newValue);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box sx={{ pt:1, bgcolor: "#F9FAFB", minHeight: "100vh" }}>

      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Chip label="Active" color="success" size="small" />
        </Box>
        
        <Box>
          <Button size="small" variant="contained" sx={{ mr: 1 }}>
            + New Order
          </Button>
          <Button size="small" variant="outlined" sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button size="small" variant="outlined" color="error">
            Delete
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>

        {/* LEFT SIDE FORM */}
        <Grid container item size={12} >
              {/* BASIC INFO */}
              <Grid size={{xs:12,sm:6,md:4,lg:3}} container spacing={1} alignSelf={'flex-start'}>
                <Typography variant="h6">Basic Info</Typography>
                <Grid item width>
                  <TextField size="small" fullWidth label="Customer ID" value="CUST-001" disabled />
                </Grid>
                <Grid item width>
                  <TextField size="small" fullWidth label="Customer Name" required/>
                </Grid>
                <Grid item width>
                  <TextField size="small" fullWidth label="Company Name"/>
                </Grid>
                <Grid item width>
                  <TextField
                    size="small"
                    select
                    label="Customer Type"
                    fullWidth
                  >
                    <MenuItem value="retail">Retail</MenuItem>
                    <MenuItem value="wholesale">Wholesale</MenuItem>
                    <MenuItem value="corporate">Corporate</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              {/* CONTACT */}
              <Grid size={{xs:12,sm:6,md:4,lg:3}} container spacing={1} alignSelf={'flex-start'}>
               <Typography  variant="h6" >Contact</Typography>
                <Grid item width>
                  <TextField size="small" label="Phone" required fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="Email" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="WhatsApp" fullWidth />
                </Grid>
              </Grid>

              {/* ADDRESS */}
              <Grid size={{xs:12,sm:6,md:4,lg:3}} container spacing={1} alignSelf={'flex-start'}>
              <Typography variant="h6">Address</Typography>
                <Grid item width>
                  <TextField size="small" label="Country" defaultValue="Pakistan" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="City" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="Full Address" multiline rows={2} fullWidth />
                </Grid>
              </Grid>

              {/* TAX */}
              <Grid size={{xs:12,sm:6,md:4,lg:3}} container spacing={1} alignSelf={'flex-start'}>
              <Typography variant="h6">Tax Information</Typography>
                <Grid item width>
                  <TextField size="small" label="NTN" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="STRN" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="Tax Status" placeholder="Active" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="Tax Office" fullWidth />
                </Grid>
                
              </Grid>

              {/* BUSINESS */}
              <Grid size={{xs:12,sm:6,md:4,lg:3}} container spacing={1} alignSelf={'flex-start'}>
              <Typography variant="h6">Business Info</Typography>
                <Grid item width>
                  <TextField size="small" label="Credit Limit" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="Payment Terms (Days)" fullWidth />
                </Grid>
                <Grid item width>
                  <TextField size="small" label="Business Type" placeholder="Manufacturer / Importer" fullWidth />
                </Grid>
              </Grid>

              <Grid item width>
                <Button variant="outlined" component="label" fullWidth>
                  Upload Tax Document
                  <input type="file" hidden onChange={handleFileUpload} />
                </Button>
                {file && (
                  <Typography variant="body2" mt={1}>
                    {file.name}
                  </Typography>
                )}
              </Grid>
              {/* SAVE */}
              <Box mt={4}>
                <Button variant="contained" size="large">
                  Save Customer
                </Button>
              </Box>

        </Grid>

        {/* RIGHT PANEL */}
        <Grid item size={12}>
          <Card>
            <CardContent>

              <Tabs value={tab} onChange={handleTabChange}>
                <Tab label="Overview" />
                <Tab label="Orders" />
                <Tab label="Payments" />
              </Tabs>

              <Box mt={2}>
                {tab === 0 && (
                  <>
                    <Typography>Total Orders: 24</Typography>
                    <Typography>Total Revenue: Rs. 450,000</Typography>
                    <Typography>Pending: Rs. 50,000</Typography>
                  </>
                )}

                {tab === 1 && (
                  <Typography>Orders list will appear here</Typography>
                )}

                {tab === 2 && (
                  <Typography>Payments history here</Typography>
                )}
              </Box>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Form2;