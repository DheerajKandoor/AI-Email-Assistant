# Email Writer Assistant 📧

An AI-powered Chrome extension that helps you draft professional email replies quickly and efficiently using Google's Gemini API.

## Overview

Email Writer Assistant seamlessly integrates with Gmail to provide intelligent email reply suggestions. Simply click the "AI Reply" button in your Gmail compose window, and the extension will generate a professional response based on the email content.

## Features

- 🤖 **AI-Powered Replies**: Leverages Google Gemini 2.5 Flash model for intelligent response generation
- ✉️ **Gmail Integration**: Works directly within Gmail's compose interface
- 🎨 **Customizable Tone**: Supports different tones (professional, friendly, formal, etc.)
- ⚡ **Quick Access**: One-click button to generate replies
- 🔄 **Real-time Generation**: Instant AI-powered email drafts

## Tech Stack

### Backend
- **Spring Boot** - REST API framework
- **Lombok** - Reduces boilerplate code
- **WebClient** - Reactive HTTP client for Gemini API integration
- **Jackson** - JSON processing

### Frontend
- **Chrome Extension** (Manifest V3)
- **Vanilla JavaScript** - Content script for Gmail integration
- **HTML/CSS** - Extension popup

### AI Model
- **Google Gemini 2.5 Flash** - Natural language generation

## Prerequisites

- Java 17 or higher
- Maven
- Chrome Browser
- Google Gemini API Key

## Installation & Setup

### 1. Backend Setup

1. Clone the repository
2. Navigate to the backend directory
3. Add your Gemini API key to `application.properties`:

```properties
gemini.api.url=https://generativelanguage.googleapis.com
gemini.api.key=YOUR_GEMINI_API_KEY_HERE
```

4. Build and run the Spring Boot application:

```bash
mvn clean install
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`

### 2. Chrome Extension Setup

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the extension directory containing `manifest.json`
5. The Email Writer Assistant extension should now appear in your extensions list

### 3. Using the Extension

1. Open Gmail (`https://mail.google.com`)
2. Open any email or start composing a reply
3. Click the **AI Reply** button in the compose toolbar
4. The AI will generate a professional reply based on the email content
5. Review and edit the generated reply as needed

## Project Structure

```
email-writer-assistant/
├── backend/
│   └── src/main/java/com/email/writer/
│       ├── EmailWriterDkApplication.java
│       ├── EmailGeneratorController.java
│       ├── EmailGeneratorService.java
│       └── EmailRequest.java
├── extension/
│   ├── manifest.json
│   ├── content.js
│   ├── content.css
│   └── popup.html
└── README.md
```

## API Endpoints

### Generate Email Reply
```
POST /api/email/generate
Content-Type: application/json

Request Body:
{
    "emailContent": "Original email text...",
    "tone": "professional"
}

Response: Generated email reply as plain text
```

## Configuration

### Supported Tones
- Professional (default)
- Friendly
- Formal
- Casual

To change the tone, modify the `tone` parameter in the API request in `content.js`.

## Future Enhancements 🚀

This project is actively being developed with the following planned improvements:

### Phase 1: Personalization
- **Historical Email Analysis**: Train the model on your sent emails to learn your writing style
- **Custom Writing Patterns**: Adapt to your unique tone, vocabulary, and communication patterns
- **Context-Aware Responses**: Better understanding of email threads and conversation history

### Phase 2: Advanced ML Features
- **Transfer Learning**: Leverage pre-trained models and fine-tune on personal email data
- **Custom LLM Fine-Tuning**: Replace Gemini API with a self-hosted fine-tuned language model
- **Local Model Deployment**: Option to run models locally for enhanced privacy
- **Multi-Model Support**: Integration with multiple LLM providers (OpenAI, Claude, local models)

### Phase 3: Enhanced Features
- **Sentiment Analysis**: Detect email tone and adjust replies accordingly
- **Multi-language Support**: Generate replies in different languages
- **Template Library**: Pre-built templates for common email scenarios
- **Email Categorization**: Automatic email classification and routing
- **A/B Testing**: Compare different AI-generated responses

## Known Issues

- The extension currently requires the backend to be running on localhost
- Button injection may occasionally delay on slower networks
- Email content extraction works best with standard Gmail layouts

## Troubleshooting

### Extension not loading
- Ensure Developer Mode is enabled in Chrome
- Verify all extension files are in the same directory
- Check the Chrome console for any errors

### AI Reply button not appearing
- Refresh the Gmail page
- Check if the backend server is running
- Verify CORS settings in the Spring Boot application

### API errors
- Confirm your Gemini API key is valid
- Check if you have API quota remaining
- Verify network connectivity to the Gemini API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Developer

**Dheeraj Kandoor**

## License

This project is open source and available for personal and educational use.

## Disclaimer

This extension is for educational and personal use. Please ensure you comply with your organization's policies regarding AI-assisted email generation and third-party extensions.

---

**Note**: This project uses the Google Gemini API which requires an API key and may incur costs based on usage. The future transition to a self-hosted fine-tuned model will eliminate external API dependencies and enhance privacy.