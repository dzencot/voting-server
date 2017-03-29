import { expect } from 'chai';
import { List } from 'immutable';

describe('immutability', () => {
  describe('a List', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      const state = List.of('Trainspotting', '28 Days Later');
      const nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine',
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
      ));
    });
  });
});
