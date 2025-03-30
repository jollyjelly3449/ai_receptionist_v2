# AI Dental Receptionist

A modern web application featuring an AI-powered dental receptionist that can schedule appointments and answer patient queries using voice interactions.

## Features

- 🎙️ Voice-based interaction using VAPI AI
- 📅 Appointment scheduling
- 💬 Natural conversation handling
- 🦷 Dental service information
- 📱 Responsive modern UI

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- VAPI AI for voice interactions

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jollyjelly3449/ai_receptionist_v2.git
cd ai_receptionist_v2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env.local`
- Add your VAPI API key and Assistant ID
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_VAPI_API_KEY`: Your VAPI API key
- `NEXT_PUBLIC_VAPI_ASSISTANT_ID`: Your VAPI Assistant ID

Optional:
- `OPENAI_API_KEY`: If using GPT-4 with VAPI

## License

MIT