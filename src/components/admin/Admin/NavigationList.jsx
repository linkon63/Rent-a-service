import React from 'react';

import List from 'devextreme-react/list.js';
import { navigation } from './data';

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
                    navigation.map( nv=> (
                        <div className='bg-primary' onClick={()=>console.log("Hello Im clicked",nv.id)}>
                            {nv.text}
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
