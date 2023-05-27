import {createStore} from 'redux';

const reducerFn = (state = {data: []}, action) => {
  if (action.type === 'AddUser') {
    console.log('Store data value==>', action.payload);

    return {data: action.payload};
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
