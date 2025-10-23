import axios from "axios";
import FormData from "form-data";

export const sttController = async (req, res) => {
  try {
    const lang = req.body.lang || "en";

    const formData = new FormData();
    formData.append("file", req.file.buffer, req.file.originalname);
    formData.append("lang", lang);

    const response = await axios.post("http://localhost:8000/transcribe/", formData, {
      headers: formData.getHeaders(),
    });

    res.status(200).json({ success: true, text: response.data.text });
  } catch (err) {
    console.error("Error in /api/stt:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};
