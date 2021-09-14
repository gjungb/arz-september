declare module 'isbn3' {
  export default ISBN;
}

declare const ISBN: {
  /**
   * Hyphenate the stuff
   * @param isbn - The ISBN
   */
  hyphenate: (isbn?: string) => string | undefined;
};
