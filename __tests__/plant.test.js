import { changeState, stateControl, storeState, drinkingEatingTanningPlant, feed, blueFood, redFood, hydrate, superWater, giveLight, superLight, trifecta } from '../src/js/plant.js';


describe('changeState', () => {
  
  test('should make feed function', () => {
    const feed = changeState("soil")(1);
    let plant = {};
    const newPlant = feed(plant);
    expect(newPlant.soil).toEqual(1);
  });
});

describe('storeState', () => {
  
  test('should store state of a plant', () => {
    const feed = changeState("soil")(1);
    const hydrate = changeState("water")(3);
    const plantA = storeState();
    const plantB = storeState();
    plantA(feed);
    plantB(hydrate);
    const expectedPlantA = { soil: 1 }
    const expectedPlantB = { water: 3 }
    expect(plantA()).toEqual(expectedPlantA);
    expect(plantB()).toEqual(expectedPlantB);
  });
  
  test('should update state of a plant', () => {
    const feed = changeState("soil")(1);
    const fedPlant = stateControl(feed);
    const fedPlantAgain = stateControl(feed);
    expect(fedPlant.soil).toEqual(1);
    expect(fedPlantAgain.soil).toEqual(2);
  });
  
  test('should update multiple properties of a plant', () => {
    const happyPlant = storeState();
    happyPlant(trifecta);
    const expected = { soil: 1, water: 1, light: 1};
    expect(happyPlant()).toEqual(expected);
  });
  
  test('should update multiple properties of a plant', () => {
    const bestPlant = drinkingEatingTanningPlant('Best Plant');
    feed(bestPlant);
    expect(bestPlant.name).toEqual('Best Plant');
    expect(bestPlant.soil).toEqual(1);
    expect(bestPlant()).toEqual(1);
  });
});