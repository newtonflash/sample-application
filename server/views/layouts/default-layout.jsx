const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Task Boards</title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link href="/js/main.css" rel="stylesheet" />
                </head>
                <body>
                    {this.props.children}

                    <script src="/js/webpack.bundle.js" />
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
