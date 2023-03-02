import React from 'react';

import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
// import HTMLReactParser from 'html-react-parser';

import { text } from './data.jsx';
import NavigationList from './NavigationList.jsx';

import RadioGroup from 'devextreme-react/radio-group';

const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['left', 'right'];
const revealModes = ['slide', 'expand'];

class Admin extends React.Component {
    constructor() {
        super();

        this.state = {
            opened: true,
            openedStateMode: 'shrink',
            revealMode: 'slide',
            position: 'left',
        };

        this.toolbarItems = [{
            widget: 'dxButton',
            location: 'before',
            options: {
                icon: 'menu',
                onClick: () => {
                    this.setState({ opened: !this.state.opened })
                    console.log("OnClick ToolbarItems")
                },
            },
        }];

        this.onOpenedStateModeChanged = this.onOpenedStateModeChanged.bind(this);
        this.onRevealModeChanged = this.onRevealModeChanged.bind(this);
        this.onPositionChanged = this.onPositionChanged.bind(this);
        this.onPositionChanged = this.onPositionChanged.bind(this);
        this.onOutsideClick = this.onOutsideClick.bind(this);
        this.onOptionChanged = this.onOptionChanged.bind(this);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
    }

    onOpenedStateModeChanged({ value }) {
        this.setState({ openedStateMode: value });
    }

    onRevealModeChanged({ value }) {
        this.setState({ revealMode: value });
    }

    onPositionChanged({ value }) {
        this.setState({ position: value });
    }

    onOutsideClick() {
        this.setState({ opened: false });
    }
    onOptionChanged() {
        console.log('====================================');
        console.log("onOptionChanged onOptionChanged");
        console.log('====================================');
    }

    onSelectionChanged() {
        console.log('====================================');
        console.log("onSelectionChanged onSelectionChanged");
        console.log('====================================');
    }

    render() {
        const {
            opened, onOptionChanged, onSelectionChanged, openedStateMode, position, revealMode,
        } = this.state;

        return (
            <React.Fragment>
                <div className='border bg-sky-500 p-2'>
                    <Toolbar
                        items={this.toolbarItems}
                    />
                </div>
                <Drawer
                    selectionMode={'single'}
                    selectByClick={true}
                    onSelectionChanged={onSelectionChanged}
                    onOptionChanged={onOptionChanged}

                    opened={opened}
                    openedStateMode={openedStateMode}
                    position={position}
                    revealMode={revealMode}
                    component={NavigationList}
                    closeOnOutsideClick={this.onOutsideClick}
                    height={"100vh"}>
                    <div id="content" className="dx-theme-background-color">
                        <>
                            <p>This is dashboard</p>
                        </>
                    </div>
                </Drawer>
                {
                    // Option of navbar added by lin kon 22/02/22
                    // <div className="options">
                    //     <div className="caption">Options</div>
                    //     <div className="options-container">
                    //         <div className="option">
                    //             <label>Opened state mode</label>
                    //             <RadioGroup
                    //                 items={openedStateModes}
                    //                 layout="horizontal"
                    //                 value={openedStateMode}
                    //                 onValueChanged={this.onOpenedStateModeChanged}
                    //             />
                    //         </div>
                    //         <div className="option">
                    //             <label>Position</label>
                    //             <RadioGroup
                    //                 items={positions}
                    //                 layout="horizontal"
                    //                 value={position}
                    //                 onValueChanged={this.onPositionChanged}
                    //             />
                    //         </div>
                    //         {openedStateMode !== 'push' && (<div className="option">
                    //             <label>Reveal mode</label>
                    //             <RadioGroup
                    //                 items={revealModes}
                    //                 layout="horizontal"
                    //                 value={revealMode}
                    //                 onValueChanged={this.onRevealModeChanged}
                    //             />
                    //         </div>)}
                    //     </div>
                    // </div>
                }
            </React.Fragment>
        );
    }
}

export default Admin;
