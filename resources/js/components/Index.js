import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Table from './table';
function Index() {
    return (
        <div className="container">

            <Header/>
            <Table/>

        </div>
    );
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
