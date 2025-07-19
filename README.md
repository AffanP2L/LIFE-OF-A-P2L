# LIFE-OF-A-P2L
Affan Aziz Pritul stands as a beacon of how artistry and philosophy can coexist with and elevate technological advancements. Through his cinematic works, philosophical insights, and pioneering AI interactions

## Development Setup

This project uses modern JavaScript with ES6+ modules and includes development tools for code quality.

### Prerequisites
- Node.js 16.0.0 or higher
- npm

### Installation
```bash
npm install
```

### Firebase Configuration

This project uses Firebase. Copy `.env.example` to `.env` and provide your Firebase credentials:

```bash
cp .env.example .env
# edit .env and fill in the values from your Firebase project
```

The configuration is loaded in `firebaseConfig.js` using environment variables to avoid committing secrets.

### Development Scripts

- `npm run lint` - Check code style and quality
- `npm run lint:fix` - Automatically fix linting issues
- `npm run validate-config` - Verify Firebase configuration is complete

### Code Quality

The project uses ESLint with modern JavaScript standards to ensure code quality and consistency. The configuration enforces:
- ES2022+ syntax
- Consistent formatting
- Error prevention patterns
- JSDoc documentation standards
