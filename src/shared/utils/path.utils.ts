/**
 * Joins an array of path segments into a single path string.
 *
 * @param paths - An array of path segments to join.
 * @param skipSeparator - A flag indicating whether the provided segments already form a valid path (default: `false`).
 * @returns The joined path as a string.
 *
 * @example
 * ```ts
 * const fullPath = joinPaths(['users', 'john', 'documents']);
 * console.log(fullPath); // Output: "users/john/documents/"
 * ```
 */
export const joinPaths = (paths: string[], skipSeparator?: boolean): string => {
  let joinedPath = '';
  for (const path of paths) {
    joinedPath += `${path}${!skipSeparator ? '/' : ''}`;
  }
  return joinedPath;
};
