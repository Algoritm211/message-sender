import {useDropzone} from "react-dropzone";
import classes from "./UploadComponent.module.scss";
import React from "react";


const UploadComponent = props => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFieldValue("files", acceptedFiles);
    }
  });
  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className={classes.dragAndDrop}>
            Hello
          </div>
        ) : (
          <div className={classes.fileInput}>
            <i className="fas fa-paperclip"></i>
            Прикрепить файлы
          </div>
        )}
      </div>
    </div>
  );
};


export default UploadComponent