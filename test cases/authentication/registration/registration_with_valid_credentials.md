## SC01 - Registration with valid credentials

### REG_SC01_TC01 - Verify registration with a valid email and password
**Title**: Verify registration with a valid email and password <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter the identical valid password into both the password and repeat password fields | The system accepts the input in both fields | ✅ Passed |
| 3 | Click the "Create Account" button | User is successfully registered and redirected to the "Welcome" page. The system sent a verification email to the registered email. | ✅ Passed |
