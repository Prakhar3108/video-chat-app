    import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret); //getintance of StreamChat client helps us interact with the Stream API

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]); //upsert means insert if not exists, otherwise update
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);  
  }
};

export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};  