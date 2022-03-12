import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Header from "../../components/Header"
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import {uploadImagesInStorage,SellAdd} from "../../config/firebase"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Sell() {
  const [proname,setProName]=useState('')
  const [price,setPrice]=useState('')
  const [category, setCategory] = useState('')
  const [discription,setDiscription]=useState('')
  const [images,setImages]=useState([])
  // const[imagesurl,setImagesUrl]=useState([])

 const SubmitSell =async ()=>{
   try{
  const urls =await uploadImagesInStorage(images)
  console.log('url from component', urls)
  alert('Successful Hogya')
    await SellAdd(proname,price,category,discription,urls)
      setDiscription('')
      setPrice('')
      setCategory('')
      setProName('')
    }
  catch(e){
    alert(e.message)
  }
}
// const UploadImages=async()=>{
//   try{
//   const urls =await uploadImagesInStorage(images)
//         console.log('url from component', urls)
        
//       }
//   catch(e){
//     alert(e.message)
//   }
//       }
 



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  console.log(images,"IMAGESSS->>>>>>>>>>>>>");
  console.log(discription,"DISSSKLKSJSJSJ->>>>");
  console.log(category,"C TTTTEETETHETTETET");
  return (
    <>
      <div>
        <Header />
      </div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AddCircleOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sell
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="ProductName"
                    required
                    fullWidth
                    id="ProducttName"
                    label="Product Name"
                    autoFocus
                    onChange={(e) => setProName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type={'number'}
                    id="Price"
                    label="Price"
                    name="Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} >
                  {/* <select name="category"
                    id="country"
                    autoComplete="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Mobiles</option>
                    <option>Cars</option>
                    <option>Bikes</option>
                    <option>Laptops</option>
                    <option>Cameras</option>
                  </select> */}
                  <TextField
                    required
                    fullWidth
                    id="Category"
                    label="Category"
                    name="Category"
                    autoComplete="Category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Discription"
                    label="Discription"
                    name="Discription"
                    autoComplete="Discription"
                    onChange={(e) => setDiscription(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label> Select Images</label>
                  <input
                  type='file'
                  multiple
                  onChange={(e) => setImages(e.target.files)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={SubmitSell}
              >
                Sell
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}