import generateResponse from "../config/gemini.js";

const generateResponseFromPrompt = async (req, res) => {
  const prompt = req.body.prompt;
  const result = await generateResponse(prompt);
  console.log(result.response.text());
  res.json({ prompt: prompt, data: result });
};

export default generateResponseFromPrompt;