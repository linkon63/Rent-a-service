import React from 'react';

import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';

import NavigationList from '../Admin/NavigationList';



class Booked extends React.Component {
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
                            <p>This is Booked</p>
                        </>
                    </div>
                </Drawer>
            </React.Fragment>
        );
    }
}

export default Booked;
