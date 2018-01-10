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
        };
        //this.handleChange = this.handleChange.bind(this);
    }
    /*
    handleChange(event) {
        this.setState({

        });
    }
    */
    render() {
        return (
            <div id="container">
                <Navi/>
                <Aside/>
                <Section active={this.state.active}/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainPage/>,
    document.body
)
