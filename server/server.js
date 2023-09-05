const express = require("express");
const bodyParser = require("body-parser");
const xlsx = require("xlsx");
const axios = require("axios"); // For making HTTP requests
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

// Define your OneDrive file URL and API endpoint (update with your actual values)
const oneDriveFileUrl = "https://defttechcoke-my.sharepoint.com/:x:/g/personal/info_defttech_co_ke/EcGq0lowaK1Iu0x4xv3DhH4BZEnMSDQfyLRRKQdoxYsS2Q?e=GXwfNQ";
const oneDriveApiEndpoint = "https://graph.microsoft.com/v1.0/me/drive/root:/path/to/mailinglist.xlsx:/content";

// Define your Microsoft Graph API access token (update with your access token)
const accessToken = "YOUR_MICROSOFT_GRAPH_API_ACCESS_TOKEN";

// Function to download the Excel file from OneDrive using Microsoft Graph API
async function downloadOneDriveFile() {
  try {
    // Make an authenticated GET request to the OneDrive file URL
    const response = await axios.get(oneDriveApiEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/octet-stream", // Ensure you get the raw file content
      },
      responseType: "arraybuffer",
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to download OneDrive file: " + error.message);
  }
}

// Function to upload the Excel file to OneDrive using Microsoft Graph API
async function uploadOneDriveFile(fileData) {
  try {
    // Make an authenticated PUT request to update the file on OneDrive
    await axios.put(oneDriveApiEndpoint, fileData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/octet-stream", // Ensure you upload as raw file content
      },
    });
  } catch (error) {
    throw new Error("Failed to upload OneDrive file: " + error.message);
  }
}

app.post("/submit", async (req, res) => {
  const email = req.body.email;

  try {
    // Download the Excel file from OneDrive
    const fileData = await downloadOneDriveFile();

    // Load the Excel file
    const workbook = xlsx.read(fileData, { type: "buffer" });
    const worksheet = workbook.Sheets["Email"];

    // Append the email to the Excel sheet
    const newRow = { Email: email };
    xlsx.utils.sheet_add_json(worksheet, [newRow], { origin: -1 });

    // Save the updated Excel file data
    const updatedFileData = xlsx.write(workbook, { type: "buffer" });

    // Upload the updated Excel file to OneDrive
    await uploadOneDriveFile(updatedFileData);

    // Respond with a success message
    res.json({ message: "Submitted successfully." });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
