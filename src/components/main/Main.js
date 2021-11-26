import "./Main.css";
import Button from '@mui/material/Button';
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";

export default function Main() {
  const progressBar =[
    {
      title:"Server Migration",
      color:"#e74a3b",
      percentage:"20",
      progress:"20%",
    },
    {
      title:"Sales Tracking",
      color:"#f6c23e",
      percentage:"40",
      progress:"40%",
    },
    {
      title:"Customer Database",
      color:"#4e73df",
      percentage:"60",
      progress:"60%",
    },
    {
      title:"Payout Details",
      color:"#36b9cc",
      percentage:"80",
      progress:"80%",
    },
    {
      title:"Account Setup",
      color:"#1cc88a",
      percentage:"100",
      progress:"Completed!",
    },
  ]
  
  const colors=[
    {
    name:"Primary",
    color:"#4e73df",
    text:"#f8f9fc"
  },
  {
    name:"Success",
    color:"#1cc88a",
    text:"#f8f9fc"
  },
  {
    name:"Info",
    color:"#36b9cc",
    text:"#f8f9fc"
  },
  {
    name:"Warning",
    color:"#f6c23e",
    text:"#f8f9fc"
  },
  {
    name:"Danger",
    color:"#e74a3b",
    text:"#f8f9fc"
  },
  {
    name:"Secondary",
    color:"#858796",
    text:"#f8f9fc"
  },
  {
    name:"Light",
    color:"#f8f9fc",
    text:"#5a5c69"
  },
  {
    name:"Dark",
    color:"#5a5c69",
    text:"#f8f9fc"
  },
]

const styles={
  fontSize:"8px",
  padding:"4px",
  height:"25px"
}
  return (
   
    <main>
      <div className="main__container">
  <div className="heading">
     <h2>Dashboard</h2>
     <Button style={styles} variant="contained"><i className="fas fa-download"></i>Generate Report</Button>
  </div>
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        {/* card-1      */}
  <section className="cards">
     <div className="card1">
     <div className="mainCardContent">
     <div className="content">
     <h6>EARNINGS (MONTHLY)</h6>
     <h3>$40,000</h3>
     </div>
     <i className="fas fa-calendar"></i>
     </div>
     </div>
{/* card-2 */}
    <div className="card2">
    <div className="mainCardContent">
    <div className="content">
    <h6>EARNINGS (ANNUAL)</h6>
    <h3>$215,000</h3>
    </div>
    <i className="fas fa-dollar-sign"></i>
    </div>
    </div>
    
    {/* card-3 */}
    <div className="card3">
    <div className="mainCardContent">
    <div className="content">
    <div className="tasksProgress">
    <h6>TASKS</h6>
    </div>
    <div className="task-bar">
      <h3>50%</h3>
      <div className="progress">
      <div className="progress-bar" role="progressbar" style={{minWidth: "100px",width:"auto",backgroundColor:"#36b9cc"}}></div>
    </div>
    </div>
    </div>
    <i className="fas fa-clipboard-list"></i>
    </div>
    </div>
    {/* card-4 */}
    <div className="card4">
    <div className="mainCardContent">
    <div className="content">
    <h6>PENDING REQUESTS</h6>
    <p>18</p>
    </div>
    <i className="fas fa-comments"></i>
    </div>
    </div>
  
  </section>
        {/* <!-- MAIN CARDS ENDS HERE --> */}
        {/* charts starts here */}
  <div className="chartsContainer">      
  <div className="lineChart">
  <h3 className="allTitle">Earnings Overview</h3>
  <LineChart/>
    </div> 
   <div className="piechart" >
    <div>
  <h3 className="allTitle" >Revenue Sources</h3> 
    <div className="piechartContent">
  <PieChart/>
  </div>
    </div> 
    </div>      
</div>  
{/* charts ends here */}
<section className="content">
<div className="projects">
<div className="projectSection">
<h3 className="allTitle">Projects</h3>
{ progressBar.map((data,index)=><Projects key={index} title={data.title} color={data.color} percentage={data.percentage} progress={data.progress}/>)}
</div>
<div className="colorBox"> 
{ colors.map((clr,index)=><ColorBox key={index} name={clr.name} color={clr.color} text={clr.text}/>)}
</div>
</div>
<div className="illuDevApp">
  <div className="Illustration">
<Illustration/>
</div>
<div className="DevelopmentApproach">
<DevelopmentApproach/>
</div>
</div>
</section>
</div>
</main>
  );
};


function Projects({percentage,color,title,progress}){
  return(
    <div>
      <div className="progressTitle">
      <p>{title}</p>
      <p>{progress}</p>
      </div>
    <div className="progress progressGrp">
  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:`${percentage}%`,backgroundColor:`${color}`}}
   ></div>
</div>
</div>
  )
}
function Illustration(){
  return(
    <div>
      <h3 className="allTitle">illlustrations</h3>
    <div>
      <img className="illustrationImg" download="download" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="illustrationImg"></img>
      <p>Add some quality, svg illustrations to your project courtesy of<span className="span">unDraw</span>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
    <p>Browser illustration ob unDraw  <i className="fa fa-long-arrow-right"></i></p>
    </div>
    </div>
  )
}

function ColorBox({name,color,text}){
  const styles={
    width:"auto",
    height:"90px",
    borderRadius:"5px",
    backgroundColor:`${color}`,
    padding:"10px",
    color:`${text}`
  }
  return(
    
    <div style={styles}>
<p>{name}</p>
<p>{color}</p>
    </div>
    
  )
}

function DevelopmentApproach(){
  return(
    <div>
      <h3 className="allTitle">Development Approach</h3>
      <div>
      <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
    <span></span>
    <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
    </div>
    </div>
  )
}


