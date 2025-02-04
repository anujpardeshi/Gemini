import { GoogleGenerativeAI } from "@google/generative-ai";

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI("AIzaSyCd19ixIgy-MqIalexbUktHhLIcMZb3_rY"); // Replace with a valid API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent(prompt);

        if (!result.response || !result.response.candidates || result.response.candidates.length === 0) {
            throw new Error("No valid response from AI");
        }

        // Extracting the response correctly
        const responseText = result.response.candidates[0]?.content.parts[0]?.text || "";

        console.log(responseText);
        return responseText;
    } catch (error) {
        console.error("Error generating content:", error);
        return null;
    }
}

export default runChat;
