import React, { Component } from 'react';
import NavMenu from './NavMenu';

class Navbar extends Component {
    state = {
        expanded: false
    };

    toggleExpanded = () => {
        const { expanded } = this.state;

        this.setState({
            expanded: !expanded
        });
    };

    render() {
        return (
            <div>
                {/* All of the other navbar code would be here & as subcomponents */}
                <header
                    className="header"
                    style={{
                        textAlign: 'right'
                    }}
                >
                    <div style={{ maxWidth: '1440px' }}>
                        <button
                            style={{
                                padding: '0.6rem 2rem',
                                backgroundColor: '#fffff'
                            }}
                            onClick={this.toggleExpanded}
                        >
                            open nav
                        </button>
                    </div>
                </header>
                {this.state.expanded ? (
                    <NavMenu toggleExpanded={this.toggleExpanded} />
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default Navbar;
