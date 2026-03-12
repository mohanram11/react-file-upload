function UploadForm({
  fileInputRef,
  setFile,
  description,
  setDescription,
  handleUpload,
  editId,
}) {
  return (
    <div className="form-section">
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

      <button onClick={handleUpload}>
        {editId ? "Update File" : "Upload File"}
      </button>
    </div>
  );
}

export default UploadForm;
