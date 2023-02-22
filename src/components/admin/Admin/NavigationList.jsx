import React from 'react';

import List from 'devextreme-react/list.js';
import { navigation } from './data';
import { Link } from 'react-router-dom';

class NavigationList extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            selectionMode: 'all',
            selectAllMode: 'page',
            selectedItemKeys: [],
        };
        // this.onSelectionModeChange = this.onSelectionModeChange.bind(this);
        // this.onSelectAllModeChange = this.onSelectAllModeChange.bind(this);
        this.onSelectedItemKeysChange = this.onSelectedItemKeysChange.bind(this);
    }

    onSelectedItemKeysChange(args) {
        console.log("Arg", args)
        if (args.name === 'selectedItemKeys') {
            console.log("inside if -> Arg", args)
            // this.setState({
            //     selectedItemKeys: args.value,
            // });
        }
    }

    render() {
        return (
            <div className="list" style={{ width: '200px' }}>
                {
                    navigation.map(nv => (
                        <div className='border bg-sky-500 p-3'
                        // onClick={() => console.log("Hello Im clicked", nv.id)}
                        >
                            <Link to={nv?.path}>
                                {nv.text}
                            </Link>
                        </div>
                    ))
                }
                {/* <List
                    itemDeleteMode={true}
                    dataSource={navigation}
                    hoverStateEnabled={false}
                    activeStateEnabled={false}
                    focusStateEnabled={false}
                    className="panel-list dx-theme-accent-as-background-color" /> */}
            </div>
        );
    }
}

export default NavigationList;
