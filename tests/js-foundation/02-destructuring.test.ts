import {characters} from '../../src/js-foundation/02-destructuring';

describe('02-destructuring', () => {
  
  test('charactes should containt Flash, Superman', () => {
    expect ( characters ). toContain('Flash');
    expect ( characters ).toContain('Superman');
  });

  test('', () => {
    
    const [flash, supeman] = characters;

    expect(flash).toBe('Flash');

    expect(supeman).toBe('Superman');

  });

});