// Enforcing global state pattern with Redux which is built on top of useReducer

// Create a store which is the global state
import { createStore, combineReducers } from 'redux';

// Import Redux Provider component for React
import { Provider } from 'react-redux';

// Reducers are used at the "root" level of components to enforce the global state philosophy of Redux
import { reducers } from "./Child"

import {Child as SongPlayerRedux} from "./Child"

// There are categories of reducers to switch between because of how massive of state Redux is expected to handle at a global scale
const rootReducer = combineReducers({
    playback: reducers,
});


const store = createStore(rootReducer);
  
function Parent() {
    return (
        <Provider store={store}>
            <SongPlayerRedux></SongPlayerRedux>
        </Provider>
    )
}

export default Parent;
