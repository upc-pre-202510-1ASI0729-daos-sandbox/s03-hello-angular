import { Component, Input } from '@angular/core';
import { Developer } from '../../model/developer.entity';

/**
 * Component to display a greeting for a developer.
 * Shows "Anonymous Developer" for unnamed users, adds a celebratory message for registered ones.
 * @author Open Source Application Development Team
 * @public
 */
@Component({
  selector: 'app-greet-developer',
  standalone: true,
  imports: [],
  templateUrl: './greet-developer.component.html',
  styleUrl: './greet-developer.component.css'
})
export class GreetDeveloperComponent {
  /** First name of the developer, defaults to empty */
  @Input() public firstName: string = '';

  /** Last name of the developer, defaults to empty */
  @Input() public lastName: string = '';

  /**
   * Computes the full name for the greeting.
   * Returns "Anonymous Developer" if no names are provided, otherwise the concatenated name.
   * @returns The full name string
   * @public
   */
  public get fullName(): string {
    if (!this.firstName && !this.lastName) {
      return 'Anonymous Developer';
    }
    let developer = new Developer(this.firstName, this.lastName);
    return developer.fullName;
  }

  /**
   * Determines if the developer is registered (non-anonymous).
   * Used to conditionally display the "Now You are an Angular Developer!" message.
   * @returns True if both firstName and lastName are non-empty, false otherwise
   * @public
   */
  public get isRegistered(): boolean {
    return !!(this.firstName && this.lastName);
  }
}
