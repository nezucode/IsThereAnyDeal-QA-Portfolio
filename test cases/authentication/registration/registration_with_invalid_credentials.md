## SC02 - Registration with invalid credentials

### REG_SC02_TC02 - Verify registration with all required fields empty
**Title**: Verify registration with all required fields empty <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Leave all the required fields empty (e.g., email, password, and repeat password) | All the required fields remain blank  | ✅ Passed |
| 2 | Click the "Create Account" button | The system displays an error message for all the required fields (e.g., "Please fill in this field.") | ✅ Passed |

---

### REG_SC02_TC03 - Verify registration with a registered email and a valid password
**Title**: Verify registration with a registered email and a valid password <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a registered email | The system accepts the registered email  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message (e.g., "Email is already in use.") | ✅ Passed |

---

### REG_SC02_TC04 - Verify registration with a valid email when password and repeat password empty
**Title**: Verify registration with a valid email when password and repeat password empty <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Leave the password and repeat password fields empty | Both fields remain blank | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message for the password and repeat password fields (e.g., "Please fill in this field.") | ✅ Passed |

---

### REG_SC02_TC05 - Verify registration with a valid email when password and repeat password don’t match
**Title**: Verify registration with a valid email when password and repeat password don’t match <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter a valid password (e.g., "admin12") | The system accepts the valid password | ✅ Passed |
| 3 | Enter a different password (e.g., "adm1n12") | The system accepts the different password | ✅ Passed |
| 4 | Click the "Create Account" button | The system displays an error message (e.g., "Passwords do not match") | ✅ Passed |

---

### REG_SC02_TC06 - Verify registration with a valid email and password when repeat password field empty
**Title**: Verify registration with a valid email and password when repeat password field empty <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Leave the repeat password field empty | The repeat password field remain blank | ✅ Passed |
| 4 | Click the "Create Account" button | The system displays an error message for the repeat password field (e.g., "Please fill in this field.") | ✅ Passed |

