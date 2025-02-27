import { describe, expect, it } from 'vitest';
import { joinPaths } from './path.utils';

describe('UTILS: joinPaths', () => {
  it('should join an array of path segments with a slash', () => {
    expect(joinPaths(['users', 'john', 'documents'])).toBe('users/john/documents/');
  });

  it('should not append a trailing slash if skipSeparator is true', () => {
    expect(joinPaths(['users/john/', 'documents'], true)).toBe('users/john/documents');
  });

  it('should handle an empty array gracefully', () => {
    expect(joinPaths([])).toBe('');
  });
});
