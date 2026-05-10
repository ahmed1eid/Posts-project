# 🚀 Next.js Posts App

A modern **Next.js App Router project** that demonstrates server-side data fetching, dynamic routing, and graceful fallback handling when APIs fail.

This project showcases best practices like:

* Incremental Static Regeneration (ISR)
* Error handling & offline fallback
* Dynamic routes with clean UI
* Component-based architecture

---

## 🌐 Live Demo

👉 https://posts-project-frontend.netlify.app/

---

## 📸 Overview

This app allows users to:

* View a homepage with API connection status
* Browse posts
* View detailed post pages
* Handle network failures gracefully

---

## 🧠 Key Concepts Used

* **Next.js App Router**
* **Server Components**
* **Dynamic Routing (`[post]`)**
* **Data Fetching with `fetch`**
* **ISR (Revalidation)**
* **Error Handling (try/catch)**
* **AbortController (Timeout handling)**

---

## 📂 Project Structure

```
posts/
│
├── app/
│   ├── page.tsx                # Homepage (fetch + status)
│   │
│   └── Posts/
│       └── [post]/
│           ├── page.jsx        # Post details page (dynamic route)
│           └── Post.jsx        # Post card component
```

---

## 🏠 Homepage (`page.tsx`)

### Features:

* Fetches posts from API:

  ```
  https://dummyjson.com/posts
  ```
* Uses **ISR**:

  ```js
  next: { revalidate: 60 }
  ```
* Uses **timeout handling**:

  ```js
  AbortSignal.timeout(5000)
  ```

### 💡 Smart Fallback:

If the API fails:

```js
data = [{ id: 1, title: "Offline Preview" }];
```

### ✅ Status Indicator:

* 🟢 Connected to API
* 🔴 Offline Mode

---

## 📄 Posts Details Page (`[post]/page.jsx`)

### Features:

* Dynamic route:

  ```
  /Posts/:id
  ```

* Fetches post data from:

  ```
  https://dummyjson.com/posts/{id}
  ```

* ISR with longer cache:

  ```js
  revalidate: 3600
  ```

### ⚠️ Error Handling:

* If post not found → Custom **404 UI**
* Handles API errors gracefully

### 🎯 Displays:

* Title
* Body content
* Tags
* Views count
* Likes & dislikes

---

## 🧩 Post Component (`Post.jsx`)

Reusable UI card for displaying posts.

### Includes:

* User ID
* Title (truncated)
* Preview text
* Views count
* "Read More" button

---

## 🎨 UI & Styling

* Tailwind CSS
* Responsive layout
* Modern glassmorphism style
* Smooth hover animations
* Clean typography

---

## 🔗 Navigation

* `/` → Homepage
* `/Posts` → Posts list
* `/Posts/[id]` → Post details

---

## ⚙️ Installation

```bash
git clone <your-repo-url>
cd posts
npm install
npm run dev
```

---

## 🌐 API Sources

* JSONPlaceholder → for homepage preview
* DummyJSON → for detailed posts

---

## 💡 What You Learned

This project helps you understand:

* How to use **Next.js App Router**
* Difference between static & dynamic rendering
* Handling real-world API failures
* Building scalable UI components
* Clean project structure

---

## 👨‍💻 Author

Ahmed Eid

---

## ⭐ Future Improvements

* Add search functionality
* Pagination / infinite scroll
* Authentication system
* Comments section
* Dark/Light mode toggle

---

## 📜 License

This project is open-source and free to use.
