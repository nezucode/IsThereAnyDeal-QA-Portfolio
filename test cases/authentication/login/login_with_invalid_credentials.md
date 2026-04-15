## SC02 - Login With Invalid Credentials

### LOG_SC02_TC02 - Verify login with empty email and password fields
**Title**: Verify login with empty email and password fields <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Leave the email and password fields empty | Both fields remain blank  | ✅ Passed |
| 2 | Click the "Sign in" button | The system displays an error message for the email and password fields (e.g., "Please fill in this field.") | ✅ Passed |

---

### LOG_SC02_TC03 - Verify login with an empty email and a valid password
**Title**: Verify login with an empty email and a valid password <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Leave the email field empty | The email field remains blank  | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | The system displays an error message for the email field (e.g., "Please fill in this field.") | ✅ Passed |

---

### LOG_SC02_TC04 - Verify login with a valid email and an empty password field
**Title**: Verify login with a valid email and an empty password field <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Leave the password field empty | The password field remains blank  | ✅ Passed |
| 3 | Click the "Sign in" button | The system displays an error message for the password field (e.g., "Please fill in this field.") | ✅ Passed |

---

### LOG_SC02_TC05 - Verify login with a valid email and an invalid password
**Title**: Verify login with a valid email and an invalid password <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email  | ✅ Passed |
| 2 | Enter an invalid password| The system accepts the invalid password  | ✅ Passed |
| 3 | Click the "Sign in" button | The systems displays an error message (e.g., "The email and password combination is incorrect") | ✅ Passed |

---

### LOG_SC02_TC06 - Verify login with unregistered email and a valid password
**Title**: Verify login with unregistered email and a valid password <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an unregistered email  | The system accepts the unregistered email  | ✅ Passed |
| 2 | Enter a password| The system accepts the password  | ✅ Passed |
| 3 | Click the "Sign in" button | The systems displays an error message (e.g., "The email and password combination is incorrect") | ✅ Passed |

---

### LOG_SC02_TC07 - Verify login with an unverified email and a valid password
**Title**: Verify login with an unverified email and a valid password<br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an unverified email  | The system accepts the unverified email  | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password  | ✅ Passed |
| 3 | Click the "Sign in" button | The user is allowed to log in and redirected to the homepage | ✅ Passed |

**Notes:** *Email verification is not enforced before login. Core features (e.g., waitlist, collections) are accessible. This appears to be by design.*


