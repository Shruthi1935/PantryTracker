"use client"
import * as React from 'react';
import { useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore'; // Correct imports
import { firestore } from '@/firebase'; // Your firebase configuration file

import { Box, Stack, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
  'Lavender Buds (culinary grade)'
];

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
  useEffect(() => {
    const updatePantry = async () => {
      const pantryCollection = query(collection(firestore, 'pantry')); // Correct usage
      const snapshot = await getDocs(pantryCollection);
      snapshot.forEach((doc) => 
        console.log(doc.id)
      );
    };
    updatePantry();
  }, []);

  return (
    <Stack> 
      <Typography marginLeft={5} marginTop={5} variant={'h4'} color={''} textAlign={'left'} fontWeight={'bold'}> Pantry List </Typography>
      <Box sx={listStyle}>
        <List>
          {items.map((i) => (
            <ListItem key={i}> {/* Added key prop */}
              <ListItemText primary={i} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  );
}
