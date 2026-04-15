## SC05 - Security Testing

### LOG_SC05_TC19 - Verify account lockout after multiple failed login attempts
**Title**: Verify account lockout after multiple failed login attempts <br>
**Execution Status**: ⛔ Failed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email and incorrect password, then click "Sign In" button (1st attempt) | The systems displays an error message (e.g., "The email and password combination is incorrect.") | ✅ Passed |
| 2 | Enter a valid email and incorrect password, then click "Sign In" button (2nd attempt) | The systems displays an error message (e.g., "The email and password combination is incorrect.") | ✅ Passed |
| 3 | Enter a valid email and incorrect password, then click "Sign In" button (3rd attempt) | The systems displays an error message (e.g., "The email and password combination is incorrect.") | ✅ Passed |
| 4 | Enter a valid email and incorrect password, then click "Sign In" button (4th attempt) | The systems shows CAPTCHA challenge (e.g., reCAPTCHA checkbox or image puzzle) | ⛔ Failed |

**Notes:** *No CAPTCHA or account lockout after multiple failed login attempts. Increases risk of brute-force attacks. Recommend adding CAPTCHA after 3–5 failed attempts. See attached [screenshot](https://github.com/nezucode/ManualTesting-IsThereAnyDeal/blob/main/screenshots/D002_A001_TC19_LoginFailedAttempt.png).*

---

### LOG_SC05_TC20 - Verify that the email field rejects SQL injection attempt
**Title**: Verify that the email field rejects SQL injection attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with SQL injection query on the email field (e.g., "fkdnd@tiffincrane.com'; DROP TABLE users;--") | The system displays a warning on the email field | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | Login should fail. The system displays an error message for the email field (e.g., "A part following '@' should not contain the symbol '.'.") | ✅ Passed |

---

### LOG_SC05_TC21 - Verify that the email field rejects XSS attack attempt
**Title**: Verify that the email field rejects XSS attack attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a script tag into the email field (e.g., <script>alert('xss')</script>@tiffincrane.com) | The system accepts the email with script tag | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | Login should fail. The system displays an error message for the email field (e.g., "A part following '@' should not contain the symbol '<'.") | ✅ Passed |

---

### LOG_SC05_TC22 - Verify that the password field rejects SQL Injection attempt
**Title**: Verify that the password field rejects SQL Injection attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a SQL injection query into both the password and repeat password fields (e.g., "pass' OR '1'='1'--") | The system accepts the password | ✅ Passed |
| 3 | Click the "Sign in" button | Login should fail. The system displays an error message (e.g., "The email and password combination is incorrect".) | ✅ Passed |

---

### LOG_SC05_TC23 - Verify that the password field rejects XSS attack attempt
**Title**: Verify that the password field rejects XSS attack attempt <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a script tag into the password field (e.g., "<script>alert('xss')</script>") | The system accepts the password | ✅ Passed |
| 3 | Click the "Sign in" button | Login should fail. The system displays an error message (e.g., "Failed to sign in".) | ✅ Passed |
