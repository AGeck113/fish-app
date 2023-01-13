import dbConnect from "../../../db/connect";
import Tool from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const tools = await Tool.find();
    return response.status(200).json(tools);
  }
  if (request.method === "POST") {
    try {
      const toolData = request.body;
      const newTool = new Tool(toolData);
      await newTool.save();
      response.status(201).json({ status: "tool created" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
