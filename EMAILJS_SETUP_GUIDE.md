# EmailJS Setup Guide for Contact Form

## 📧 Complete Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`) 

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the template from `emailjs-template.html` or create your own
4. Make sure to include these variables in your template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{service}}` - Selected service
   - `{{message}}` - Message content
   - `{{request_callback}}` - Callback request
   - `{{to_email}}` - Your email
5. Save the template and note down the **Template ID** (e.g., `template_xyz789`) 

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abcdef123456`) 

### Step 5: Update Configuration
Open `src/config/emailjs.ts` and replace the placeholder values:

```typescript

```

### Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## 🔧 Features Implemented

- ✅ Form validation
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Professional email template
- ✅ All form fields included in email

## 📱 Form Fields Sent
- Name
- Email
- Phone number
- Service selection
- Project message
- Callback request (Yes/No)

## 🎨 Email Template Variables
The email template includes all form data in a professional format:
- Sender information
- Service requested
- Message content
- Callback preference

## 🚀 Ready to Use
Once you've completed the setup, your contact form will:
1. Send emails directly to your inbox
2. Show loading states while sending
3. Display success/error messages
4. Reset the form after successful submission

## 💡 Tips
- Test with your own email first
- Check spam folder if emails don't arrive
- EmailJS free plan allows 200 emails/month
- Consider upgrading for higher limits

## 🆘 Troubleshooting
- **Emails not arriving**: Check your EmailJS service configuration
- **Template errors**: Verify all variables are correctly placed
- **Console errors**: Check that all IDs and keys are correct
- **Form not submitting**: Ensure all required fields are filled
