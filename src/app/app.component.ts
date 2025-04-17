import { Component } from '@angular/core';
import { RegisterDeveloperComponent } from './greetings/components/register-developer/register-developer.component';
import { GreetDeveloperComponent } from './greetings/components/greet-developer/greet-developer.component';

/**
 * Root component of the application.
 * Manages the developer registration state and passes it to the greeting component.
 * @author Open Source Application Development Team
 * @public
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterDeveloperComponent, GreetDeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Title of the application */
  public title = 'hello-angular-developer';

  /** First name of the registered developer, empty if anonymous */
  public firstName: string = '';

  /** Last name of the registered developer, empty if anonymous */
  public lastName: string = '';

  /**
   * Handles the developer registration event.
   * Updates the firstName and lastName properties with the registered values.
   * @param developer - Object containing firstName and lastName
   * @public
   */
  public onDeveloperRegistered(developer: { firstName: string, lastName: string }): void {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }

  /**
   * Handles the "Later" action to defer registration.
   * Resets firstName and lastName to empty, reverting to anonymous state.
   * @public
   */
  public onLater(): void {
    this.firstName = '';
    this.lastName = '';
  }
}
