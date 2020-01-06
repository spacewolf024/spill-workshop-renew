import { combineReducers, createStore } from  'redux';
import {initialFacetStateData} from './FilterData';

//INITIAL STATE
const initialFacetState = initialFacetStateData;

//ACTIONS
const TOGGLE_FACET_EXPANSION = "TOGGLE_FACET_EXPANION";
export const toggleFacetExpansion = (facetName, isActive) => ({
  type: TOGGLE_FACET_EXPANSION,
  payload: { facetName, isActive }
});

//SELECTORS
export const getFacetsList = store =>
  store && store.facets ? store.facets : {};

export const getFacetByName = (store, id) =>
  store && store.facets ? { ...store.facets[id], id } : {};

//REDUCERS
function facetReducer(state = initialFacetState, action) {
  switch (action.type) {
    case TOGGLE_FACET_EXPANSION: {
      let facetName = action.payload.facetName;
      let activeFacet = state[facetName];
      const newState = {
        ...state,
        facetName: {
          ...activeFacet,
          isExpanded: action.payload.isExpanded
        }
      };
      console.log("new state");
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}
const rootReducer = combineReducers({ facetReducer });

//STORE~

const store = createStore(rootReducer);

export default store;