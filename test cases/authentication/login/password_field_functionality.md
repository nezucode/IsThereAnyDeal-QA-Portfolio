## SC04 - Password Field Functionality

### LOG_SC04_TC17 - Verify that the “Show/Hide password” button toggles password visibility
**Title**: Verify that the “Show/Hide password” button toggles password visibility <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Enter a valid password | The system accepts the valid password | ✅ Passed |
| 3 | Click the eye icon/visibility toggle button | The password displays in plain text | ✅ Passed |
| 4 | Click the eye icon/visibility toggle button again | The password returns to masked format | ✅ Passed |

---

### LOG_SC04_TC18 - Verify copy-paste functionality in password field
**Title**: Verify copy-paste functionality in password field <br>
**Execution Status**: ✅ Passed <br>
**Preconditions**: 
- User opens the website (https://isthereanydeal.com/)
- User clicks the "User" button then clicks the "Sign in / join" button
- User is currently on the "Sign in" page
- User has a valid registered account (e.g., fkdnd@tiffincrane.com / Qwerty12)

| Steps | Action | Expected Result | Status |
| :--- | :--- | :--- |:--- |
| 1 | Enter a valid email | The system accepts the valid email | ✅ Passed |
| 2 | Copy a valid password from another source (e.g., password manager or text file)| The password copied | ✅ Passed |
| 3 | Right click on the password field then paste the password | The system accepts the pasted password | ✅ Passed |
| 4 | Click the "Sign In" button | The user is successfully logged in and redirected to the homepage | ✅ Passed |

