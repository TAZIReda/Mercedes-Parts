import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      });
    
      constructor(private fb: FormBuilder) {}
    
      onSubmit() {
        // Handle signup submission logic here (e.g., send data to server)
      }
}

// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   // ...
// })
// export class SignupComponent {
//   signupForm = this.fb.group({
//     username: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(8)]],
//     confirmPassword: ['', Validators.required],
//     acceptTerms: [false, Validators.requiredTrue]
//   });

//   constructor(private fb: FormBuilder) {}

//   onSubmit() {
//     // Handle signup submission logic here (e.g., send data to server)
//   }
// }
