function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle("Prompt Engineering Helper");
}

// Hàm xử lý tạo prompt dựa trên input người dùng
function generatePrompt(inputText) {
  if (!inputText || inputText.trim() === "") {
    return "❗️ Please enter a valid topic.";
  }

  // Template đơn giản cho prompt engineering
  const prompt = `
You are a helpful AI assistant.
Your task is to help the user with the following topic:

👉 "${inputText.trim()}"

Respond in clear, concise, and useful format.
Use bullet points if helpful. Add example if needed.
`;

  return prompt;
}
