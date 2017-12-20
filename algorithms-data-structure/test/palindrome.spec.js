import { expect } from 'chai';
import palindrome from '../src/palindrome';

describe('Palindrome', () => {
  it('should palindrome method exists', () => {
    expect(palindrome).to.exist;
  });
});
