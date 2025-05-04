# Quiz Frame

This project is deployed to https://quiz-frame.vercel.app

## TODO 

- Questions config
- Store answers as list in URL
- Mint / share result

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
#and
npm install @coinbase/onchainkit
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

### Farcaster frames

- [Farcaster Frame documentation](https://warpcast.notion.site/Farcaster-Frames-4bd47fe97dc74a42a48d3a234636d8c5)
- [Warpcast embed tool](https://warpcast.com/~/developers/embeds)
- [FramesGPT](https://chat.openai.com/g/g-vxALnvPFA-framesgpt)
- [Poll frame example](https://github.com/farcasterxyz/fc-polls)

#### Testing locally

Test routes with `curl -X POST "http://localhost:3000/api/begin"` and ensure expected html is returned.

#### Images

Make sure to use absolute image paths and aspect ratio of 1.9:1

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
