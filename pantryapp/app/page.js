import * as React from 'react';
import {Box, Stack} from '@mui/material'
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

const style = {
  py: 4,
  px: 5,
  width: "400px",
  height: "500px",
  spacing: 1,
  overflow: 'auto',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};
  

export default function Home() {
  return (
    <Box sx={style}>
      <List>
        {items.map((i) => (
          <ListItem spacing={4}>
            <ListItemText primary={i} />
          </ListItem>
        ))}
      </List>
    </Box>
    
  );
}

