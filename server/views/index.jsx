const React = require('react');
const DefaultLayout = require('./layouts/default-layout');

class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div id="application-container" />
            </DefaultLayout>
        );
    }
}

module.exports = indexPage;
