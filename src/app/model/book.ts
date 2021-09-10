/**
 * Ein Buch
 */
export interface Book {
  /**
   * Die ISBN
   * @link https://wikipedia.de
   */
  isbn: string;
  /**
   * Der Titel
   */
  title: string;
  author: string;
  abstract?: string;
}
