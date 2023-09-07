import React from "react";
import {Container, Typography, Grid} from '@mui/material'
import Order from "./Components/Order";
import Bill from './Components/Bill'
import './App.css'


function App() {
  return (
    <div>
      <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                          <Order/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Bill/>
                        </Grid>
                    </Grid>
                </Container>
    </div>
  );
}

export default App;
