# Deployment Guide

Follow these steps to deploy your portfolio website.

## 1. Frontend Deployment (Vercel/Netlify)

### Vercel (Preferred)
1. Push your code to GitHub.
2. Connect your GitHub repo to [Vercel](https://vercel.com).
3. Set the **Build Command** to `npm run build`.
4. Set the **Output Directory** to `dist`.
5. Deploy!

## 2. Backend Deployment (Render/Railway)

### Render
1. Create a new "Web Service" on [Render](https://render.com).
2. Connect your GitHub repo.
3. Set the **Root Directory** to `backend`.
4. Set the **Build Command** to `npm install`.
5. Set the **Start Command** to `node server.js`.
6. Add your Environment Variables in the "Settings" tab:
   - `MONGO_URI`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT` (usually 10000 or 5000)

## 3. MongoDB Atlas Setup
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a Database User and save the credentials.
3. Whitelist IP addresses (allow access from anywhere 0.0.0.0/0 for initial testing).
4. Get your connection string and add it to `MONGO_URI`.

## 4. Email Setup (Gmail)
To use Gmail with Nodemailer:
1. Enable 2FA on your Google Account.
2. Search for **"App Passwords"** in Google settings.
3. Generate a new password for "Mail" and "Other (Custom Name)".
4. Use this 16-character code as `EMAIL_PASS` in your `.env`.
