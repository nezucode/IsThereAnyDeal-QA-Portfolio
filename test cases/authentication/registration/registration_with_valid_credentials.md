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

---

### LOG_SC03_TC09 - Verify login with leading/trailing spaces in the password field
**Title**: Verify login with leading/trailing spaces in the password fieldd <br>
**Execution Status**: ⛔ Failed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a valid password with leading/trailing spaces (e.g., "Qwerty12 ") | The system accepts the valid password with leading/trailing spaces | ✅ Passed |
| 3 | Click the "Sign in" button | Log in should fail if the entered password contains leading/trailing spaces. The system displays an error message (e.g., "The email and password combination is incorrect"). | ⛔ Failed |

**Notes:** *The user is succeed to login with password containing leading/trailing spaces (e.g., "Qwerty12 "). See attached [screenshot](https://github.com/nezucode/ManualTesting-IsThereAnyDeals-LoginTestCases/blob/main/screenshots/ISTAD_A001_TC09_PasswordWithLeadingTrailingSpaces.png).*

---

### LOG_SC03_TC10 - Verify login with email missing @ symbol
**Title**: Verify login with email missing @ symbol <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with missing @ symbol (e.g., "fkdndtiffincrane.com") | The system displays a warning on the email field  | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | The systems displays an error message (e.g., "Please include an '@' in the email address. 'fkdndtiffincrane.com' is missing an '@'.") | ✅ Passed |

---

### LOG_SC03_TC11 - Verify login with email missing domain
**Title**: Verify login with email missing domain <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with missing domain (e.g., "fkdnd@") | The system displays a warning on the email field  | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | The system displays an error message (e.g., "Please enter a part of following '@'. 'fkdnd@' is incomplete.") | ✅ Passed |

---

### LOG_SC03_TC12 - Verify login with email missing top-level domain
**Title**: Verify login with email missing top-level domain <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with missing top-level domain (e.g., "fkdnd@tiffincrane") | The system accepts the email with missing top-level domain | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | The system displays an error message (e.g., "The email has wrong format.") | ✅ Passed |

---

### LOG_SC03_TC13 - Verify login with email exceeding character limit
**Title**: Verify login with email missing top-level domain <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter an email with 300+ characters (e.g., "aaa...[300x]...@tiffincrane.com") | The system accepts the email with 300+ characters | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the "Sign in" button | The system displays an error message (e.g., "The email has wrong format.") | ✅ Passed |

---

### LOG_SC03_TC14 - Verify login with password exceeding character limit
**Title**: Verify login with password exceeding character limit <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a password with 100+ characters (e.g., "aaa...[100x]...") | The system accepts the password with 100+ characters | ✅ Passed |
| 3 | Click the "Sign in" button | The systems displays an error message (e.g., "The email and password combination is incorrect.") | ✅ Passed |

---

### LOG_SC03_TC15 - Verify login with case sensitivity on the email field
**Title**: Verify login with case sensitivity on the email field <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email in uppercase (e.g., "FKDND@TIFFINCRANE.COM") | The system accepts the valid email in uppercase | ✅ Passed |
| 2 | Enter a valid password | The system accepts the password | ✅ Passed |
| 3 | Click the "Sign in" button | The user is successfully logged in and redirected to the homepage | ✅ Passed |

---

### LOG_SC03_TC16 - Verify login with only whitespace characters in the email and password fields
**Title**: Verify login with only whitespace characters in the email and password fields <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a whitespace in the email field | The system displays a warning in the email field | ✅ Passed |
| 2 | Enter a whitespace in the password field | The system displays the masked character in the password field (e.g., •) | ✅ Passed |
| 3 | Click the "Sign in" button | The system displays an error message for the email and password fields (e.g., "Please fill in this field.") | ✅ Passed |
