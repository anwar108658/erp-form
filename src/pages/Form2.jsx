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

const CustomerScreen = () => {
  const [tab, setTab] = useState(0);
  const [file, setFile] = useState(null);

  const handleTabChange = (e, newValue) => setTab(newValue);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#F9FAFB", minHeight: "100vh" }}>

      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Saira Textile
          </Typography>
          <Chip label="Active" color="success" size="small" />
        </Box>

        <Box>
          <Button variant="contained" sx={{ mr: 1 }}>
            + New Order
          </Button>
          <Button variant="outlined" sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button variant="outlined" color="error">
            Delete
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>

        {/* LEFT SIDE FORM */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>

              {/* BASIC INFO */}
              <Typography variant="h6">Basic Info</Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <TextField label="Customer ID" value="CUST-001" fullWidth disabled />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Customer Name" required fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Company Name" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField
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
              <Typography variant="h6" mt={4}>Contact</Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={4}>
                  <TextField label="Phone" required fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Email" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="WhatsApp" fullWidth />
                </Grid>
              </Grid>

              {/* ADDRESS */}
              <Typography variant="h6" mt={4}>Address</Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={4}>
                  <TextField label="Country" defaultValue="Pakistan" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="City" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Full Address" multiline rows={2} fullWidth />
                </Grid>
              </Grid>

              {/* BUSINESS */}
              <Typography variant="h6" mt={4}>Business Info</Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={4}>
                  <TextField label="Credit Limit" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Payment Terms (Days)" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Business Type" placeholder="Manufacturer / Importer" fullWidth />
                </Grid>
              </Grid>

              {/* TAX */}
              <Typography variant="h6" mt={4}>Tax Information</Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={4}>
                  <TextField label="NTN" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="STRN" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Tax Status" placeholder="Active" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Tax Office" fullWidth />
                </Grid>
                <Grid item xs={6}>
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
              </Grid>

              {/* SAVE */}
              <Box mt={4}>
                <Button variant="contained" size="large">
                  Save Customer
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT PANEL */}
        <Grid item xs={12} md={4}>
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

export default CustomerScreen;