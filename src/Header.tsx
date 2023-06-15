import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{width: '600px'}}>
      <Toolbar>
        <Typography 
            variant="h3" 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Todo List 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


