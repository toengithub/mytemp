const React = require("react");
const ReactDOM = require("react-dom");
require('../../sass/index.scss');
var Navi = require('../module/navi.js');
var Aside = require('../module/aside.js');
var Section = require('../module/section.js');
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:1
        };
        //this.handleChange = this.handleChange.bind(this);
        this.changeActive = this.changeActive.bind(this);
    }
    /*
    handleChange(event) {
        this.setState({

        });
    }
    */
    changeActive(n) {
        if(n == this.state.active){
            return false
        }
        this.setState({
            active:n
        })
    }
    render() {
        return (
            <div id="container">
                <Navi/>
                <Aside changeActive={this.changeActive}/>
                <Section active={this.state.active}/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainPage/>,
    document.body
)
