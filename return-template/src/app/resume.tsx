"use client";

import { useState, ChangeEvent } from "react";
import axios from "axios";
import Link from "next/link";

export default function ResumePage() {
  const [fileContent, setFileContent] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reads the file as text when a file is chosen
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setFileContent(text);
      };
      reader.readAsText(file);
    }
  };

  // Submits the resume text to the API route
  const handleSubmit = async () => {
    if (!fileContent) {
      setError("Please select a resume file first.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/parse-resume", { resume: fileContent });
      setResult(response.data.data);
    } catch (err: any) {
      console.error("Error parsing resume:", err);
      setError("Failed to parse resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Resume Parser</h1>
        
        <div className="mb-4 text-center">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Choose your resume file:
          </label>
          <input type="file" accept=".txt,.pdf,.doc,.docx" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer" />
        </div>
        
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        </div>
        
        {error && (
          <div className="mt-4 text-red-600 text-center">
            {error}
          </div>
        )}
        
        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Parsed Resume JSON</h2>
            <pre className="whitespace-pre-wrap text-xs text-gray-800">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <Link href="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
