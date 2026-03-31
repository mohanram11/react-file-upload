function FileRow({ file, handleEdit, index, deleteFile, handleDownload }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{file.filename}</td>
      <td>{file.filesize}</td>
      <td>{file.uploadedAt}</td>
      <td>{file.description}</td>
      <td>
        <button onClick={() => handleEdit(file)}>Edit</button>
        <button onClick={() => deleteFile(file.id)}>Delete</button>
        <button onClick={() => handleDownload(file.file)}>Download</button>
      </td>
    </tr>
  );
}
export default FileRow;
