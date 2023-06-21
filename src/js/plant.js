export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const stateControl = storeState();



export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// export const namePlant = changeState("name");

export const drinkingEatingTanningPlant = (name) => {
  let plant = {
    name
  }
  return {...plant, ...stateControl(),...feed(plant), ...hydrate(plant), ...giveLight(plant)};
}

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);
export const redFood = changeState("soil")(-5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const giveLight = changeState("light")(1);
export const superLight = changeState("light")(5);

export const trifecta = (state) => {
  return {...state, ...feed(state), ...hydrate(state), ...giveLight(state)}
}
