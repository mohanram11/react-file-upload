import FileRow from "./FileRow";

function FileTable({ files, handleEdit, deleteFile, handleDownload }) {
  return (
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
        {files.map((file, index) => (
          <FileRow
            key={file.id}
            file={file}
            index={index}
            handleEdit={handleEdit}
            deleteFile={deleteFile}
            handleDownload={handleDownload}
          />
        ))}
      </tbody>
    </table>
  );
}
export default FileTable;
