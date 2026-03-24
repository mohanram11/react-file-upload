function FileRow({ file, handleEdit, index, deleteFile }) {
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
      </td>
    </tr>
  );
}
export default FileRow;
