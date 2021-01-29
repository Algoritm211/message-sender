import {useDropzone} from "react-dropzone";
import classes from "./UploadComponent.module.scss";
import React, {useEffect, useState} from "react";


const UploadComponent = props => {
  const [isOnDrag, setIsOnDrag] = useState(false)

  const onDrag = () => {
    setIsOnDrag(true)
  }

  useEffect(() => {
    const dropZone = document.getElementById('dropzone')
    dropZone.addEventListener('dragenter', onDrag)

    return () => {
      dropZone.removeEventListener('dragenter', onDrag)
    }
  })

  const {setFieldValue} = props;
  const {getRootProps, getInputProps, isDragActive,} = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFieldValue("files", acceptedFiles);
      setIsOnDrag(false)
    },
    onDragLeave: () => {
      setIsOnDrag(false)
    }
  });

  let classesForFileInput = classes.blockFileInput

  if (isOnDrag) {

    classesForFileInput = classes.dropzone
  }

  return (
    <div>
      <div {...getRootProps({className: classesForFileInput})}>
        <input {...getInputProps()} />
        {isDragActive || isOnDrag ? (
          <React.Fragment>
            <div className={classes.dragAndDrop}>
              <h2>Бросайте файлы сюда, я ловлю</h2>
              <span>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы</span>
            </div>
            <div className={classes.fileInput}>
              <i className="fas fa-paperclip"></i>
              Прикрепить файлы
            </div>
          </React.Fragment>
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