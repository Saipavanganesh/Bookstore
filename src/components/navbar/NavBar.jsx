import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ProfileIcon from '@mui/icons-material/PermIdentityOutlined';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import './NavBar.css'
import logo from '../images/openBook.png';
import { useNavigate } from 'react-router-dom';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  color: 'rgb(169, 168, 168)',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    color: 'black',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '52ch',
    },
  },
}));

export default function NavBar() {
    let Navigate = useNavigate();
    const handleCartClick = () => {
        Navigate("/cart")
    }
    const handleNavClick = () => {
        Navigate("/dashboard")
    }
    const [anchorEl, setAnchorEl] = React.useState(null); //Profile
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    if(localStorage.key){
        localStorage.removeItem("token");
    }
    Navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='toolbar'>
          <img className='logo' onClick={handleNavClick} src={logo} alt="Bookstore logo" />
          <Typography className='bookstore-text'
            variant="h6"
            noWrap
            onClick={handleNavClick}
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Bookstore
          </Typography>

          <Search className='search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <div className='last-icons'>
            <div className="profile-box">
              <IconButton className='profile-icon' size="larger" onClick={handleMenu} aria-label="show 4 new mails" color="inherit">
                <ProfileIcon />
              </IconButton>
              <span className='text'>Profile</span>
              <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
            </div>
            <div className="cart-box">
              <IconButton onClick={handleCartClick} size="larger" aria-label="show 4 new mails" color="inherit">
                <CartIcon className='cart-icon' />
              </IconButton>
              <span className='text'>Cart</span>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>

  );
}