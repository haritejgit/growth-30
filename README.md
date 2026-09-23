# growth-30

A mobile-first personal growth platform for a 30-day transformation program.

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS
- React Router
- Firebase Authentication and Cloud Firestore

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com), register a web app, and copy its client configuration into `.env.local` using the `VITE_FIREBASE_*` names in `.env.example`. Enable **Authentication → Sign-in method → Email/Password** and create a Firestore database. Never commit `.env.local` or put Firebase Admin credentials in this frontend.

The app starts in a clear local-preview mode when Firebase variables are absent. In that mode account actions show setup guidance and data is not synced to Firestore. Once configured, email/password authentication is required for the app routes and the current user's data is stored in Firestore.

## Firestore collections

The client uses the product model from `context.txt`: `users`, `userGoals`, `dailyTasks`, and `dailyCheckIns`. Each user-owned document includes `userId`, and queries are scoped to the authenticated user. Add security rules before production deployment; a safe starting point is to allow a user to read/write only documents where `request.auth.uid == resource.data.userId` (and validate `request.resource.data.userId` on writes).

## Product direction

The app helps users decide what to improve, create realistic daily actions, complete them, reflect, and stay accountable through a simple and calm experience.
