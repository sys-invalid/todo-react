var Main = React.createClass({
  render:function(){
    return (<Tabs/>)
  }
});


var Tabs = React.createClass({
  getInitialState:function(){
    return ({tabs:["today","due","finished"],active:"today"})
  },
  componentDidMount: function() {
     $('ul.tabs').tabs();
 },
  render :function(){
    var tabs = [];
     var $this = this;
    _.forEach(this.state.tabs, function(value,index){
      var tabid ="#" + value;
      var className = "white-text " + ($this .state.active === value ? "active" : "");
      tabs.push( (<li className="tab col s4" key={index}><a className={className}  href={tabid}>{value}</a></li>));
    })
    return (<ul className="tabs red darken-4 ">
    {tabs}
    </ul>)
  }
})

var Cards = React.createClass({
  render:function(){

    var cards =[];
    for(var i =0; i <5; i++){
      cards.push(<div className="row" key={i} ><Card/></div>)
    }
    return (<div>{cards}</div>)
  }
});

var Card = React.createClass({

  render:function(){
    var marginRight ={
      marginRight:"10px"
    }
    return ( <div className="col s12 m12 l12">
        <div className="card  red darken-4 hoverable z-depth-5">
           <div className="card-content white-text">
              <div className="row">
                 <div className="col s2 ">
                    <div className="row valign-wrapper">
                       <h5 className="valign">25 Dec</h5>
                    </div>
                    <div className="row valign-wrapper">
                       <h5 className="valign">10:00 P.M.</h5>
                    </div>
                 </div>
                 <div className="col s10 ">
                    <div className="row">
                       <span className="card-title">Do laundry</span>
                       <p className="truncate">I am a very simple card. I am good at containing small bits of information.
                          I am convenient because I require little markup to use effectively.
                       </p>
                    </div>
                    <div className="row">
                       <div className="chip">
                          Tag
                          <i className="material-icons">close</i>
                       </div>
                       <div className="chip">
                          Tag
                          <i className="material-icons">close</i>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="card-action">
              <a href="#" className="waves-effect waves-light btn red lighten-1" style={marginRight}>Done</a>
              <a href="#" className="waves-effect waves-light btn red lighten-1" style={marginRight}>Procastinate</a>
              <a href="#" className="waves-effect waves-light btn red lighten-1" style={marginRight}>Not doing it anymore</a>
           </div>
        </div>
     </div>)
  }
})


ReactDOM.render(<Main/>,document.getElementById("tabs"))
ReactDOM.render(<Cards/>,document.getElementById("today"))
ReactDOM.render(<Cards/>,document.getElementById("due"))
ReactDOM.render(<Cards/>,document.getElementById("finished"))
