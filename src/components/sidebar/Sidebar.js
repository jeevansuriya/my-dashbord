import "./Sidebar.css";
import Button from '@mui/material/Button'
import SettingsIcon from '@mui/icons-material/Settings';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const styles={
    textTransform: "capitalize",
  }
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img ">
        <i className="far fa-grin-wink"></i>
          <h1><b>SB  ADMIN</b><span className="textNo">2</span></h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="active_menu_link sub-title">
          <i className="fa fa-tachometer"></i>
          <Button style={styles} color="inherit" >Dashboard</Button>
        </div>
        <h2>INTERFACE</h2>
        <div className="sidebar__link">
          <SettingsIcon/>
          <Button style={styles} color="inherit">Components</Button>
         <span className="iconsidebar"> <KeyboardArrowRightIcon/></span>
        </div>
        <div className="sidebar__link line-Div">
          <i className="fa fa-wrench"></i>
          <Button style={styles} color="inherit">Utilities</Button>
          <span className="iconsidebar"> <KeyboardArrowRightIcon/></span>
        </div>
        <h2>ADDON</h2>
        <div className="sidebar__link ">
          <FolderRoundedIcon/>
          <Button style={styles} color="inherit">Pages</Button>
          <span className="iconsidebar"> <KeyboardArrowRightIcon/></span>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-chart-area"></i>
          <Button style={styles} color="inherit">Charts</Button>
        </div>
        <div className="sidebar__link sub-title-1">
          <i className="fa fa-table"></i>
          <Button style={styles} color="inherit">Tables</Button>
        </div>
        
     
      </div>
    </div>
  );
};

export default Sidebar;
