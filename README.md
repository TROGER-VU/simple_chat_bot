# Card Advisor Chatbot

**Card Advisor** is a simple and interactive chatbot designed to assist users with their financial queries. Whether you're looking for information on credit cards, stocks, or other financial topics, Card Advisor provides a seamless experience to help you make informed decisions.

## Features

- **Credit Card Assistance**: Get information about various credit cards, their benefits, and eligibility criteria.
- **Stock Market Insights**: Ask about current stock prices, trends, and basic market news.
- **Financial Tips**: Receive helpful tips and advice on managing your finances effectively.
- **User-Friendly Interface**: The chatbot offers a simple, clean, and intuitive interface for quick interactions.

## Technologies Used

- **React**: Frontend framework for building the chatbot interface.
- **react-chatbot-kit**: A powerful library used to build and manage the chatbot's dialogue and flow.
- **CSS/SCSS**: Custom styling to ensure the chatbot is visually appealing and responsive.
- **Vercel**: Deployed the app using Vercel for seamless hosting and continuous integration.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/card-advisor-chatbot.git
```

### 2. Navigate into the project directory

```bash
cd card-advisor-chatbot
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application locally

```bash
npm start
```

The application will be running at `http://localhost:3000` in your browser.

## Environment Variables

Before deploying or running the project locally, make sure to set up any necessary environment variables such as API keys for fetching financial data.

1. Create a `.env` file in the root directory of your project.
2. Add your API key(s) and other necessary credentials to the `.env` file.

Example:
```bash
REACT_APP_FINANCIAL_API_KEY=your_api_key_here
```

## Deployment

The project is deployed on [Vercel](https://vercel.com/). You can access the live version [here](https://your-vercel-url.com).

To redeploy, push your changes to the repository and Vercel will automatically rebuild and redeploy the application.

## Chatbot Flow

The Card Advisor chatbot responds to a variety of queries related to:

- **Credit Cards**: Ask questions like "What are the benefits of the XYZ credit card?" or "How can I apply for a credit card?"
- **Stocks**: Get information about stocks, such as "What's the price of ABC stock today?"
- **General Financial Queries**: Ask for tips on savings, investments, or other financial matters.

### Example Interactions:
- "Tell me about the XYZ credit card."
- "How is the stock market performing today?"
- "Give me some investment tips."

## Contributing

We welcome contributions to enhance the functionality and improve the chatbot's knowledge base. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
