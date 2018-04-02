import React from 'react'

class Layout extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
          			{this.props.header}
        		</header>
        		<div className="app-content">
        			{this.props.children}
        		</div>
                <footer className="App-header">
                	{this.props.footer}
                </footer>
            </div>
        )
    }
}
export default Layout;