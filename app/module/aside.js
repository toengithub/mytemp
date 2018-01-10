const React = require("react");
const ReactDOM = require("react-dom");
require('../../sass/aside.scss');
import {iAddClass,iRemoveClass} from "../tools/tools.js";

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:1
        };
        this.handleClick = this.handleClick.bind(this);
        this.listClick = this.listClick.bind(this);
    }
    listClick(n) {
        if(n){
            this.setState({
                active:n
            })
        }
    }
    handleClick(n) {
        if(n){
            this.setState({
                itemActive:n
            })
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <aside className="aside">
                <div id="sidebar"  className="nav-collapse ">
        			<ul className="sidebar-menu" id="nav-accordion">
        				<p className="centered"><a href="profile.html"><img src="../images/ui-sam.jpg" className="img-circle" width="60"/></a></p>
        				<h5 className="centered">Marcel Newman{this.state.active}</h5>

                        <li className="sub-menu" className={this.state.active==1?"active":""}>
        					<a href="#">
        						<i className="fa fa-dashboard"></i>
        						<span>Dashboard</span>
        					</a>
        				</li>


        				<li className="sub-menu">
        					<a href="javascript:;" >
        						<i className="fa fa-desktop"></i>
        						<span>UI Elements</span>
        					</a>
        				</li>
        				<li className="sub-menu">
        					<a href="javascript:;" >
        						<i className="fa fa-cogs"></i>
        						<span>Components</span>
        					</a>
        				</li>
        				<li className="sub-menu">
        					<a href="javascript:;" >
        						<i className="fa fa-book"></i>
        						<span>Extra Pages</span>
        					</a>
        				</li>
        				<li className="sub-menu">
        					<a href="javascript:;" >
        						<i className="fa fa-tasks"></i>
        						<span>Forms</span>
        					</a>
        				</li>
        				<li className="sub-menu">
        					<a href="javascript:;" >
        						<i className="fa fa-th"></i>
        						<span>Data Tables</span>
        					</a>
        				</li>
        				<li onClick={this.listClick.bind(this,7)} className={this.state.active==7?"active sub-menu":"sub-menu"}>
        					<a href="javascript:;">
        						<i className=" fa fa-bar-chart-o"></i>
        						<span>Charts</span>
        					</a>
        					<ul className="sub">
        						<li onClick={this.handleClick.bind(this,1)} className={this.state.active==7&&this.state.itemActive==1?"active":""}><a href="#">Images</a></li>
        						<li onClick={this.handleClick.bind(this,2)} className={this.state.active==7&&this.state.itemActive==2?"active":""}><a href="#">Chartjs</a></li>
        					</ul>
        				</li>
        			</ul>
        		</div>
            </aside>
        );
    };
}

module.exports = Aside;
