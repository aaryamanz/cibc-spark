# CIBC AI Hub (Next.js)

Internal demo app for AI tool adoption: onboarding, personalized tool matching, learning journeys, points/badges, and a prompt generator.

## Requirements

- Node.js 18+ (recommended)
- npm

## Setup

Install dependencies:

```bash
npm install
```

Create a local env file:

```bash
cp .env.example .env.local
```

Set `ANTHROPIC_API_KEY` in `.env.local` to enable prompt generation (`/prompt-generator` and Journey Step 3).

## Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build (prod)

```bash
npm run build
npm run start
```

## Notes

- Most user state (profile, points, progress) is stored in **localStorage** for demo purposes.
- Videos are embedded via YouTube (`youtube-nocookie` in the iframe).

