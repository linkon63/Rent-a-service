import React from 'react';
import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';

import { text } from './data.js';
import NavigationList from './NavigationList.js';

const openedStateModes = ['push', 'shrink', 'overlap'];
const positions = ['left', 'right'];
const revealModes = ['slide', 'expand'];

export default function Admin() {
    const {
        opened, openedStateMode, position, revealMode,
    } = {};
    return (
        <React.Fragment>
            <Toolbar items={this.toolbarItems} />
            <Drawer
                opened={opened}
                openedStateMode={openedStateMode}
                position={position}
                revealMode={revealMode}
                component={NavigationList}
                closeOnOutsideClick={this.onOutsideClick}
                height={400}>
                <div id="content" className="dx-theme-background-color">
                    {HTMLReactParser(text)}
                </div>
            </Drawer>
            <div className="options">
                <div className="caption">Options</div>
                <div className="options-container">
                    <div className="option">
                        <label>Opened state mode</label>
                        <RadioGroup
                            items={openedStateModes}
                            layout="horizontal"
                            value={openedStateMode}
                            onValueChanged={this.onOpenedStateModeChanged}
                        />
                    </div>
                    <div className="option">
                        <label>Position</label>
                        <RadioGroup
                            items={positions}
                            layout="horizontal"
                            value={position}
                            onValueChanged={this.onPositionChanged}
                        />
                    </div>
                    {openedStateMode !== 'push' && (<div className="option">
                        <label>Reveal mode</label>
                        <RadioGroup
                            items={revealModes}
                            layout="horizontal"
                            value={revealMode}
                            onValueChanged={this.onRevealModeChanged}
                        />
                    </div>)}
                </div>
            </div>
        </React.Fragment>
    )
}
