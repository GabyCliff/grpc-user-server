import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

const pagesUser = ['Publicar'];
const pagesVisitor = ['Iniciar sesion', 'Crear cuenta'];
const settings = ['Mis publicaciones','Crear Usuario', 'Logout'];

function ContainerNavbar({children}) {
  return(
	<AppBar position="static" sx={{backgroundColor: "#282828"}}>
	  <Container maxWidth="xl">
		<Toolbar disableGutters>
		  <Typography
			variant="h6"
			noWrap
			component="a"
			href="/"
			sx={{
			  mr: 2,
			  display: { xs: 'none', md: 'flex' },
			  fontFamily: 'monospace',
			  fontWeight: 700,
			  letterSpacing: '.3rem',
			  color: 'inherit',
			  textDecoration: 'none',
			}}
		  >
			TIENDA ONLINE
		  </Typography>
		  {children}
		</Toolbar>
	  </Container>
	</AppBar>
  );

}

function Navbar() {
  const [isLogged, setIsLogged] = useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
	setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
	setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
	setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
	setAnchorElUser(null);
  };

  const redirect = (page) => {

  }

  const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		width: '12ch',
		'&:focus': {
		  width: '20ch',
		},
	  },
	},
  }));

  return (
	isLogged ? (
	// USER NAVBAR
	<ContainerNavbar>
	  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
		<IconButton
		  size="large"
		  aria-label="account of current user"
		  aria-controls="menu-appbar"
		  aria-haspopup="true"
		  onClick={handleOpenNavMenu}
		  color="inherit"
		>
		  <MenuIcon />
		</IconButton>
		<Menu
		  id="menu-appbar"
		  anchorEl={anchorElNav}
		  anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		  }}
		  keepMounted
		  transformOrigin={{
			vertical: 'top',
			horizontal: 'left',
		  }}
		  open={Boolean(anchorElNav)}
		  onClose={handleCloseNavMenu}
		  sx={{
			display: { xs: 'block', md: 'none' },
		  }}
		>
		  {pagesUser.map((page) => (
			<MenuItem key={page} onClick={handleCloseNavMenu}>
			  <Typography textAlign="center">{page}</Typography>
			</MenuItem>
		  ))}
		</Menu>
	  </Box>
	  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} onClick={() => navigate('/newProduct')}>
	 	 PUBLICAR
	  </Box>
	
	  <Box sx={{ flexGrow: 0, mr: 2 }} onClick={() => navigate('/addWalletCredit')}>
		  Ver/Cargar Saldo
	  </Box>
	  <Box sx={{ flexGrow: 1, mr: 2 }}>
		<Search>
			<SearchIconWrapper>
			<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
			placeholder="Search…"
			inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	  </Box>

	  <Box sx={{ flexGrow: 0 }}>
		<Tooltip title="Open settings">
		  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
			<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
		  </IconButton>
		</Tooltip>
		<Menu
		  sx={{ mt: '45px' }}
		  id="menu-appbar"
		  anchorEl={anchorElUser}
		  anchorOrigin={{
			vertical: 'top',
			horizontal: 'right',
		  }}
		  keepMounted
		  transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		  }}
		  open={Boolean(anchorElUser)}
		  onClose={handleCloseUserMenu}
		>
		  {settings.map((setting) => (
			<MenuItem key={setting}>
			  <Typography onClick={() => navigate(setting !== 'Logout' ? '/'+setting.toLowerCase().replace(/\s/g, '') : '/')} textAlign="center">{setting}</Typography>
			</MenuItem>
		  ))}
		</Menu>
	  </Box>
	</ContainerNavbar>
	) : (
	<ContainerNavbar>
	  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
		<IconButton
		  size="large"
		  aria-label="account of current user"
		  aria-controls="menu-appbar"
		  aria-haspopup="true"
		  onClick={handleOpenNavMenu}
		  color="inherit"
		>
		  <MenuIcon />
		</IconButton>
		<Menu
		  id="menu-appbar"
		  anchorEl={anchorElNav}
		  anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		  }}
		  keepMounted
		  transformOrigin={{
			vertical: 'top',
			horizontal: 'left',
		  }}
		  open={Boolean(anchorElNav)}
		  onClose={handleCloseNavMenu}
		  sx={{
			display: { xs: 'block', md: 'none' },
		  }}
		>
		  {pagesVisitor.map((page) => (
			<MenuItem key={page} onClick={handleCloseNavMenu}>
			  <Typography textAlign="center">{page}</Typography>
			</MenuItem>
		  ))}
		</Menu>
	  </Box>
	  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
		{pagesVisitor.map((page) => (
		  <Button
			key={page}
			onClick={handleCloseNavMenu}
			sx={{ my: 2, color: 'white', display: 'block' }}
		  >
			{page}
		  </Button>
		))}
		</Box>
	
	  <Box sx={{ flexGrow: 1, mr: 2 }}>
		<Search>
			<SearchIconWrapper>
			<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
			placeholder="Search…"
			inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	  </Box>
	</ContainerNavbar>
	)
  );
};

export default Navbar;