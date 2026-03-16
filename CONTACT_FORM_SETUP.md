# Contact Form Setup Guide

This website uses **EmailJS** to handle contact form submissions. Follow these steps to enable the contact form:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose a provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the authentication steps
5. Click **Create Service** and note your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it: "Contact Form"
4. Configure the template:
   - **To Email**: `{{to_email}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `New Contact from {{from_name}}`
   - **Content**:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     
     Message:
     {{message}}
     ```
5. Click **Save** and note your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (starts with a long string)

## Step 5: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **dovehome** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

   | Name | Value |
   |------|-------|
   | `VITE_EMAILJS_PUBLIC_KEY` | Your Public Key from EmailJS |
   | `VITE_EMAILJS_SERVICE_ID` | service_xxxxx |
   | `VITE_EMAILJS_TEMPLATE_ID` | template_xxxxx |
   | `VITE_EMAILJS_TO_EMAIL` | dovehomes247@gmail.com |

5. Make sure **Production** is selected
6. Click **Save**

## Step 6: Redeploy on Vercel

1. Go to **Deployments** in your Vercel project
2. Find the latest deployment
3. Click the menu (•••) and select **Redeploy**
4. Wait for deployment to complete

## Step 7: Test the Form

1. Go to your website: https://dovehome.vercel.app (or your domain)
2. Navigate to **Contact** page
3. Fill out the form:
   - Name
   - Email
   - Phone
   - Message
4. Click **Send Message**
5. You should receive an email at `dovehomes247@gmail.com`

## Troubleshooting

- **"Email service not configured"**: Make sure all 4 environment variables are set in Vercel
- **Email not received**: 
  - Check spam/junk folder
  - Verify template variables match: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
  - Check EmailJS dashboard for error logs

## Local Development

If you want to test locally:
1. Copy `.env.example` to `.env`
2. Fill in your EmailJS credentials
3. Run `pnpm dev`
4. Test the contact form at `http://localhost:5173/contact`

## Email Template Example

If the above template doesn't work, here's a simpler version:

**Subject:**
```
New Message from {{from_name}}
```

**Body:**
```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}
```

Make sure the variable names exactly match what's in the ContactPage.tsx template parameters!

---

**Need help?** Contact support at [EmailJS Support](https://www.emailjs.com/docs/faq/)
