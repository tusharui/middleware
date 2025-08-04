# Express Middleware Examples

This repository demonstrates different types of middleware implementations in Express.js. Each file showcases a specific use-case of middleware, such as rate limiting, error counting, and more.

---

##  Files Overview

### 1. `ratelimit.js` - Rate Limiting Middleware

This file limits the number of requests a user can make within a short time period. Each user is identified via a custom `user-id` header. The rate limit is reset every second.

- Allows **up to 5 requests per second per user**.
- Returns a `429 Too Many Requests` error if limit is exceeded.
- Returns `You are allowed!` if within limits.

**Endpoints:**
- `GET /` → Returns a success message if within request limits.

---

### 2. `errorcount.js` - Error Counting Middleware

This file demonstrates how to handle errors globally and count the number of times an error has occurred.

-  Throws a sample error on `GET /user`.
-  Returns a success message on `POST /user`.
-  Keeps track of error occurrences via middleware.

**Endpoints:**
- `GET /user` → Always throws an error.
- `POST /user` → Returns a dummy success response.
- `GET /errcount` → Returns the total number of errors encountered.

---

### 3. `renamecount.js` (same as errorcount.js)

This file is functionally identical to `errorcount.js`. You can rename or repurpose it for a different type of error tracking if needed in future.

---

##  How to Run

Make sure you have Node.js and Express installed:

```bash
npm install express
