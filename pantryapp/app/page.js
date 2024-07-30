import * as React from 'react';
import {Box, Stack, Typography} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const items = [
  'Cocoa Powder (unsweetened, Dutch-processed)', 
  'Cacao Nibs', 
  'Couverture Chocolate (extra cocoa butter)', 
  'Dark Chocolate Bars (70% or higher cocoa content)',  
  'Milk Chocolate',
  'Vanilla Beans', 
  'Hazelnut Praline Paste', 
  'Sea Salt Flakes', 
  'Espresso Powder', 
  'Candied Ginger', 
  'Lavender Buds (culinary grade)']

const listStyle = {
  py: 4,
  px: 4,
  m: 5,
  width: "450px",
  height: "500px",
  spacing: 1,
  overflow: 'auto',
  borderRadius: 3,
  border: '2px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};
  

export default function Home() {
  return (

    <Stack> 

      <Typography marginLeft={5} marginTop={5} variant={'h4'} color={''} textAlign={'left'} fontWeight={'bold'}> Pantry List </Typography>

      <Box sx={listStyle}>
        <List>
          {items.map((i) => (
            <ListItem spacing={4}>
              <ListItemText primary={i} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
    
  );
}

