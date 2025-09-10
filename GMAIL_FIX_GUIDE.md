# Fix Gmail API Scopes Issue - EmailJS

## 🚨 Error: "Gmail_API: Request had insufficient authentication scopes"

This error occurs when EmailJS doesn't have proper permissions to send emails through your Gmail account.

## 🔧 **Solution Steps:**

### Step 1: Delete Current Gmail Service
1. Go to your EmailJS Dashboard
2. Navigate to **Email Services**
3. Find your Gmail service (`service_xamj0vc`)
4. Click **Delete** to remove it

### Step 2: Create New Gmail Service
1. Click **Add New Service**
2. Select **Gmail**
3. Click **Connect Account**
4. **IMPORTANT**: When Google asks for permissions, make sure to:
   - ✅ Allow **"Send email on your behalf"**
   - ✅ Allow **"View your email address"**
   - ✅ Allow **"View your personal info"**
   - ✅ Click **"Allow"** for ALL permissions

### Step 3: Update Service ID
After creating the new service, you'll get a new Service ID. Update your config:

1. Copy the new Service ID (something like `service_xyz123`)
2. Update `src/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: 'YOUR_NEW_SERVICE_ID', // Replace with new ID
  templateId: 'template_1p6995b',
  publicKey: 'Xy8F_T9z5OdvaPU9t',
  toEmail: 'sall.momo2@gmail.com' 
};
```

### Step 4: Test the Service
1. In EmailJS dashboard, go to your new Gmail service
2. Click **"Send Test Email"**
3. If successful, your form should work

## 🔄 **Alternative: Use Different Email Provider**

If Gmail continues to have issues, try:
1. **Outlook/Hotmail** (usually more reliable)
2. **Yahoo Mail**
3. **Custom SMTP** (if you have one)

## 🚀 **Quick Test**
After fixing, test your contact form and check the browser console for any remaining errors.

## 💡 **Prevention**
- Always grant ALL permissions when connecting Gmail
- Don't revoke permissions in your Google Account settings
- Consider using a dedicated email account for EmailJS
