import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    <div className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search for..." aria-label="Search"></input>
      <button className="btn btn-primary"  type="submit"><SearchIcon/></button>
  </div> 
      <div className="navbar__right">

      <Badge style={{paddingRight:"8px"}}  color="error" badgeContent={4} max={3}>
  <NotificationsIcon style={{width:"20px"}}/>
</Badge>
<Badge style={{paddingLeft:"25px",paddingRight:"12px"}} color="error" badgeContent={4} max={3}>
  <MailIcon style={{width:"20px"}}/>
</Badge>
          <img style={{paddingLeft:"25px"}} width="60px" src={avatar} alt="avatar" />

      </div>
    </nav>
  );
};

export default Navbar;
