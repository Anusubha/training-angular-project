import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'mismatch': true } : null;
}