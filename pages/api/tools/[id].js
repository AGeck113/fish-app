import dbConnect from "../../../db/connect";
import Tool from "../../../db/models/Tool";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const tool = await Tool.findById(id);

    if (!tool) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(tool);
  }
  if (request.method === "DELETE") {
    const tool = await Tool.findByIdAndDelete(id);

    if (!tool) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(tool);
  }
  if (request.method === "PUT") {
    const updatedTool = await Tool.findByIdAndUpdate(id, {
      $set: request.body,
    });
    console.log(updatedTool);
    if (!updatedTool) {
      return response.status(404).json({ status: "Not Found" });
    }
    return response.status(200).json({ status: "Fish updated" });
  }
}
