import "./App.css";
import { useState, useRef } from "react";
// import { useState } from "react";
function App() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const fileInputRef = useRef(null);
  function handleUpload() {
    if (!file && !editId) {
      alert("Please upload a file");
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
        id: Date.now(),
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
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(event) => setFile(event.target.files[0])}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleUpload}>upload</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Filename</th>
            <th>Filesize</th>
            <th>Uploded At</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.filename}</td>
              <td>{file.filesize}</td>
              <td>{file.uploadedAt}</td>
              <td>{file.description}</td>
              <td>
                <button onClick={() => handleEdit(file)}>Edit</button>
                <button onClick={() => deleteFile(file.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
