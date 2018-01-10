const React = require("react");
const ReactDOM = require("react-dom");

require('../../sass/section.scss');

class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="main-content">
                <div className="active" sectionId="1">1</div>
                <div sectionId="2">2</div>
                <div sectionId="3">3</div>
                <div sectionId="4">4</div>
                <div sectionId="5">5</div>
                <div sectionId="6">6</div>
                <div sectionId="7">7</div>
            </section>
        );
    };
}

module.exports = Section;
