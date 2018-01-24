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
    handleClick(n) {//在这个事件上，.sub-menu和.sub>li是平级的
        if(n){

            if(n == 2){//在.sub>li层时，需要设置，用于二级菜单选中
                this.setState({
                    itemActive:n
                });
                this.props.changeActive(7);
            }else if(n == 1){//在.sub-menu层时，需要清除设置，相当于清除了原来选中的二级菜单的选中状态
                this.setState({
                    itemActive:0
                });
                this.props.changeActive(1);
            }else if(n == 99){
                this.setState({
                    itemActive:n
                });
            }

        }
    }
    render() {
        return (
            <aside className="aside">
                <div id="sidebar"  className="nav-collapse ">
        			<ul className="sidebar-menu" id="nav-accordion">
        				<p className="centered"><a href="profile.html"><img src="ui-sam.jpg" className="img-circle" width="60"/></a></p>
        				<h5 className="centered">Marcel Newman{this.state.active}</h5>

                        <li className={this.state.active==1?"sub-menu active":"sub-menu"} onClick={this.listClick.bind(this,1),this.handleClick.bind(this,1)}>
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
        						<li onClick={this.handleClick.bind(this,99)} className={this.state.active==7&&this.state.itemActive==99?"active":""}><a href="#">Images</a></li>
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
