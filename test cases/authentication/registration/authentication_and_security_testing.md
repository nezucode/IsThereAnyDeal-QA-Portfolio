## SC04 - Authentication and security testing

### REG_SC04_TC17 - Ensure that sensitive fields (e.g., password and repeat password) mask input characters 
**Title**: Ensure that sensitive fields (e.g., password and repeat password) mask input characters <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email| The system accepts the valid email  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password fields | The system accepts the valid password. The system displays the masked character in the password and repeat password fields (e.g., •) | ✅ Passed |

---

### REG_SC04_TC18 - Verify that the email field rejects SQL injection attempt
**Title**: Verify that the email field rejects SQL injection attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email on the email field (e.g., "1' OR '1'='1'--") | The system displays a warning on the email field | ✅ Passed |
| 2 | Enter a password into both the password and repeat password fields (e.g., "Pass123") | The system accepts the password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message for the email field (e.g., "Please include an '@' in the email address. 1' OR '1'='1'-- is missing an '@'."). Registration failed | ✅ Passed |

---

### REG_SC04_TC19 - Verify that the email field rejects XSS attack attempt
**Title**: Verify that the email field rejects XSS attack attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a script tag into the email field (e.g., <script>alert('xss')</script>@mailshan.com) | The system displays a warning on the email field  | ✅ Passed |
| 2 | Enter a valid password into both the password and repeat password field | The system accepts the password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message for the email field (e.g., "A part following '@' should not contain the symbol '<'."). Registration should fail. | ✅ Passed |

---

### REG_SC04_TC20 - Verify that the password and repeat password field reject SQL Injection attempt
**Title**: Verify that the password and repeat password field reject SQL Injection attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter a SQL injection query into both the password and repeat password fields (e.g., "1' OR '1'='1'--") | The system accepts the password | ✅ Passed |
| 3 | Click the "Create Account" button | The user redirected to the "Welcome" page. The system sent a verification email to the registered email. User is successfully registered.| ✅ Passed |

---

### REG_SC04_TC21 - Verify that the password and repeat password field reject XSS attack attempt
**Title**: Verify that the password and repeat password field reject XSS attack attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User clicks the "Create an account" button
- User is currently on the "Register" page

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a script tag into both the password and repeat password field (e.g., "<script>alert('xss')</script>") | The system accepts the password | ✅ Passed |
| 3 | Click the "Create Account" button | The system displays an error message for the email field (e.g., "Failed to create account"). Registration failed. | ✅ Passed |
