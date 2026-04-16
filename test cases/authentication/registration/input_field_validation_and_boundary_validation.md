## SC03 - Input field validation and boundary validation

### REG_SC03_TC07 - Verify registration that leading/trailing spaces are trimmed in the email field 
**Title**: Verify registration that leading/trailing spaces are trimmed in the email field <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email with leading/trailing spaces (e.g., " caterpillar90179@mailshan.com ")| The system accepts the valid email with leading/trailing spaces  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | User is successfully registered and redirected to the "Welcome" page. The system sent a verification email to the registered email. | ✅ Passed |

---

### REG_SC03_TC08 - Verify registration that password contains leading/trailing spaces and the system must not trim
**Title**: Verify registration that password contains leading/trailing spaces and the system must not trim <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a password with leading/trailing spaces (e.g., "qwerty1 ") into both the password and repeat password fields | The system accepts the valid password and must not trim | ✅ Passed |
| 3 | Click the "Create Account" button | User is successfully registered and redirected to the "Welcome" page. The system sent a verification email to the registered email. | ✅ Passed |

---

### REG_SC03_TC09 - Verify registration with email missing @ symbol
**Title**: Verify registration with a valid email when password and repeat password empty <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with missing @ symbol (e.g., "sheep91144aminating.com") | The system displays a warning on the email field  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | The systems displays an error message (e.g., "Please include an '@' in the email address. 'sheep91144aminating.com' is missing an '@'.") | ✅ Passed |

---

### REG_SC03_TC10 - Verify registration with email missing domain
**Title**: Verify registration with email missing domain <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with missing domain (e.g., "sheep91144@") | The system displays a warning on the email field  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message (e.g., "Please enter a part of following '@'. 'sheep91144@' is incomplete.")| ✅ Passed |

---

### REG_SC03_TC11 - Verify registration with email missing top-level domain
**Title**: Verify registration with email missing top-level domain <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with missing top-level domain (e.g., "sheep91144@aminating") | The email field remain blank  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message (e.g., "The email has wrong format.") | ✅ Passed |

---

### REG_SC03_TC12 - Verify registration with case sensitivity on the email field
**Title**: Verify registration with case sensitivity on the email field <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email in uppercase (e.g., "GREBE56112@MAILSHAN.COM") | The system accepts the valid email in uppercase  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | User is successfully registered and redirected to the "Welcome" page. The system sent a verification email to the registered email. | ✅ Passed |

---

### REG_SC03_TC13 - Verify registration with email exceeding character limit
**Title**: Verify registration with email exceeding character limit <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with 300+ characters (e.g., "aaa...[300x]...@mailshan.com") | The system accepts the email with 300+ characters  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message (e.g., "The email has wrong format.") | ✅ Passed |

---

### REG_SC03_TC14 - Verify registration with password exceeding character limit
**Title**: Verify registration with password exceeding character limit <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter a password with 100+ characters (e.g., "aaa...[100x]...") into both the password and repeat password fields | The system accepts the password with 100+ characters | ✅ Passed |
| 3 | Click the "Create Account" button | The system should prevent input beyond the maximum character limit (e.g., 255). The system displays an error message (e.g., "Password must not exceed 255 characters."). | ✅ Passed |

---

### REG_SC03_TC15 - Verify registration with only whitespace characters in the all required fields
**Title**: Verify registration with only whitespace characters in the all required fields <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Leave the email field only whitespace characters (e.g., " ") | The system displays a warning on the email field  | ✅ Passed |
| 2 | Leave the password and repeat password fields only whitespace characters (e.g., " ") | The system accepts the password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message for the email field (e.g., "Please fill in this field.") | ✅ Passed |

---

### REG_SC03_TC16 - Verify registration with a valid email and a single character in the password and repeat password field
**Title**: Verify registration with a valid email and a single character in the password and repeat password field <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter a single character (e.g., "o") into both the password and repeat password fields | The system accepts the password | ✅ Passed |
| 3 | Click the "Create Account" button | - The system displays an error message stating the minimum character requirement (e.g., "Password must be at least 8 characters."). The system must block form submission. | ✅ Passed |

