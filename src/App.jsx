import "./App.css";
import { useState } from "react";
function App() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  function handleUpload() {
    if (!file) {
      alert("Please upload a file");
      return;
    }
    const filee = {
      id: Date.now(),
      filename: file.name,
      filesize: (file.size / 1024).toFixed(2),
      uploadedAt: new Date().toLocaleString(),
      description: description,
    };
    setFiles([...files, filee]);
    setFile(null);
    setDescription("");
  }

  function deleteFile(id) {
    setFiles(files.filter((file) => file.id !== id));
  }

  function handleEdit(
    
  ) {
    setDescription(file.description);
    setEditId(file.id);
  }

  return (
    <>
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
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
                <button onClick={() => deleteFile(file.id)}>Delete</button>
                <button onClick={() => handleEdit(file.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
