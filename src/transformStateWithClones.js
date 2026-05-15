'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];

  let currenState = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      currenState = {};
    } else if (action.type === 'addProperties') {
      currenState = {
        ...currenState,
        ...action.extraData,
      };
    } else if (action.type === 'removeProperties') {
      const newState = { ...currenState };

      for (const key of action.keysToRemove) {
        delete newState[key];
      }
      currenState = newState;
    }

    history.push(currenState);
  }

  return history;
}

module.exports = transformStateWithClones;
