import "./App.css";
import { useState, useEffect, useRef } from "react";
import UploadForm from "./components/UploadForm";
import FileTable from "./components/FileTable";

function App() {
  const [files, setFiles] = useState(() => {
    const storedFiles = localStorage.getItem("files");
    return storedFiles ? JSON.parse(storedFiles) : [];
  });
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);
  const MAX_SIZE = 1 * 1024 * 1024;

  const newId = files.length > 0 ? Math.max(...files.map((f) => f.id)) + 1 : 1;

  function handleUpload() {
    if (!file && !editId) {
      alert("Please upload a file");
      return;
    }

    if (file && file.size > MAX_SIZE  ) {
      alert("File size is too large");
      return;
    }
    if (editId) {
      const updatedFiles = files.map((f) => {
        if (f.id === editId) {
          return {
            ...f,
            description: description,
          };
        }
        return f;
      });

      setFiles(updatedFiles);
    } else {
      const newFile = {
        id: newId,
        filename: file.name,
        filesize: (file.size / 1024).toFixed(2),
        uploadedAt: new Date().toLocaleString(),
        description: description,
      };

      setFiles([...files, newFile]);
    }

    setEditId(null);
    setDescription("");
    setFile(null);
    fileInputRef.current.value = "";
  }

  function deleteFile(id) {
    setFiles(files.filter((file) => file.id !== id));
  }

  function handleEdit(file) {
    setDescription(file.description);
    setEditId(file.id);
  }

  return (
    <div className="container">
      <h2>File Upload Manager</h2>
      <UploadForm
        fileInputRef={fileInputRef}
        setFile={setFile}
        description={description}
        setDescription={setDescription}
        handleUpload={handleUpload}
        editId={editId}
      />

      <FileTable
        files={files}
        handleEdit={handleEdit}
        deleteFile={deleteFile}
      />
    </div>
  );
}

export default App;
