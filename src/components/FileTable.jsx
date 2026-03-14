import FileRow from "./FileRow";

function FileTable({ files, handleEdit, deleteFile }) {
  return (
    <table className="file-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Filename</th>
          <th>Filesize</th>
          <th>Uploaded At</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {files.map((file) => (
          <FileRow
            key={file.id}
            file={file}
            handleEdit={handleEdit}
            deleteFile={deleteFile}
          />
        ))}
      </tbody>
    </table>
  );
}

export default FileTable;
