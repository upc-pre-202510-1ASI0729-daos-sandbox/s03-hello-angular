/**
 * Represents a developer with a first name and last name.
 * Provides a computed full name based on the provided values.
 * @author Open Source Application Development Team
 * @public
 */
export class Developer {
  /** @private The developer's first name */
  private _firstName: string;

  /** @private The developer's last name */
  private _lastName: string;

  /**
   * Creates a new Developer instance.
   * @param firstName - The developer's first name
   * @param lastName - The developer's last name
   * @public
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Gets the developer's full name by concatenating first and last names.
   * @returns The full name with trimmed whitespace
   * @public
   */
  public get fullName(): string {
    return `${this._firstName} ${this._lastName}`.trim();
  }
}
