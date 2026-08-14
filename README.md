This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## EmailJS setup for contact form

To receive form messages in your email, configure EmailJS with your Gmail account.

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Create a new Email Service and connect it to your Gmail account.
3. Create an Email Template.
4. In the template, use these variables:
   - `from_name`
   - `reply_to`
   - `subject`
   - `message`
5. Copy these values from your EmailJS dashboard:
   - Service ID
   - Template ID
   - Public Key
6. Add them to [.env.local](.env.local) or the Vercel environment variables:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Example template subject/body:

```text
Subject: {{subject}}
Name: {{from_name}}
Email: {{reply_to}}
Message: {{message}}
```

7. Restart the app after saving the env file.

> If the EmailJS variables are missing, the form falls back to opening the default email app so the user can still send the message manually.

## Deployment

For Vercel deployment, add the same EmailJS environment variables in the project dashboard under Project Settings > Environment Variables.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
