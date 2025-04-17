import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * Component for registering a developer with a form.
 * Provides options to register, defer, or clear the input.
 * @author Open Source Application Development Team
 * @public
 */
@Component({
  selector: 'app-register-developer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {
  /**
   * Form group for developer registration with validation.
   * Requires firstName and lastName with minimum length of 2.
   * @public
   */
  public developerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  /** Event emitted when a developer is registered with valid input */
  @Output() public developerRegistered = new EventEmitter<{ firstName: string, lastName: string }>();

  /** Event emitted when the user chooses to defer registration */
  @Output() public later = new EventEmitter<void>();

  /**
   * Handles form submission to register a developer.
   * Emits the developerRegistered event with form values if valid.
   * @public
   */
  public onRegister(): void {
    if (this.developerForm.valid) {
      const firstName = this.developerForm.value.firstName ?? '';
      const lastName = this.developerForm.value.lastName ?? '';
      this.developerRegistered.emit({ firstName, lastName });
      this.developerForm.reset();
    }
  }

  /**
   * Handles the "Later" action to defer registration.
   * Resets the form and emits the later event.
   * @public
   */
  public onLater(): void {
    this.developerForm.reset();
    this.later.emit();
  }

  /**
   * Handles the "Clear" action to reset the form.
   * Does not affect the current greeting state.
   * @public
   */
  public onClear(): void {
    this.developerForm.reset();
  }
}
