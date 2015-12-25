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




ReactDOM.render(<Main/>,document.getElementById("tabs"))
