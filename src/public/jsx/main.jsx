var Main = React.createClass({
  getInitialState:function(){
    var $this = this;
    $.getJSON( "/data/test.json", function( data ) {
      $this.setState({cards:data});
    });
    return {cards:{},tabs:["today","due","completed"]}
  },
  render:function(){
    return (
      <div className="container red lighten-4">
        <Tabs tabs={this.state.tabs}/>
        <CardContainers tabs={this.state.tabs} todos={this.state.cards}/>
      </div>)
  }
});

var Tabs = React.createClass({
  getInitialState:function(){
    return ({active:"today"})
  },
  componentDidMount: function() {
     $('ul.tabs').tabs();
 },
  render :function(){
    var tabs = [];
     var $this = this;
    _.forEach(this.props.tabs, function(value,index){
      var tabid ="#" + value;
      var className = "white-text " + ($this .state.active === value ? "active" : "");
      tabs.push( (<li className="tab col s4" key={index}><a className={className}  href={tabid}>{value}</a></li>));
    })
    return (<ul className="tabs red darken-4 ">
    {tabs}
    </ul>)
  }
})

var CardContainers=  React.createClass({
  render:function(){
    var $this = this;
    var containers = _.map(this.props.tabs, function(v){
      var todos = $this.props.todos[v];
      return (<div id={v} className="col s12 m12 l12" key={v}>
                <Cards todos={todos}/>
            </div>)
    });
    return(
    <div className="row padding-10">
      {containers}
    </div>)
  }
})

var Cards = React.createClass({
  render:function(){
    var $this = this;
  var cards =  _.map($this.props.todos, function(v,i){
      return (
        <div className="row" key={i} ><Card todo ={v}/></div>
      )
    })
    return (<div>{cards}</div>)
  }
});

var Card = React.createClass({
  render:function(){
    var $this = this;
    var todo = $this.props.todo;
    var marginRight ={
      marginRight:"10px"
    }
    return ( <div className="col s12 m12 l12">
        <div className="card  red darken-4 hoverable z-depth-5">
           <div className="card-content white-text">
              <div className="row">
                 <div className="col s2 ">
                    <div className="row valign-wrapper">
                       <h5 className="valign">{todo.date}</h5>
                    </div>
                    <div className="row valign-wrapper">
                       <h5 className="valign">{todo.time}</h5>
                    </div>
                 </div>
                 <div className="col s10 ">
                    <div className="row">
                       <span className="card-title">{todo.title}</span>
                       <p className="truncate">{todo.description} </p>
                    </div>
                    <Chips chips={todo.tags}/>
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

var Chips =React.createClass({
  render:function(){
    var chips = _.map(this.props.chips,function(v,i){
      return (<div className="chip" key={i}>
                {v}
                  <i className="material-icons">close</i>
            </div>)
    })
    return (  <div className="row">
              {chips}
              </div>
            )
  }
})

ReactDOM.render(<Main/>,document.getElementById("container"))
