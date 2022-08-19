import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { acceptStyle, activeStyle, baseStyle, rejectStyle } from './styles';

type FileProps = File & { preview: string };

const UploadTab = ({
  onClick,
  percentage,
}: {
  percentage: number | null;
  onClick: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<FileProps[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const handleFile = (file: File) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

    setFiles(acceptedFiles.map(handleFile));
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
  });

  const style = useMemo<React.CSSProperties>(
    () =>
      ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      } as React.CSSProperties),
    [isDragActive, isDragReject, isDragAccept]
  );

  // Cleanup files when unmounting
  useEffect(() => {
    return () => {
      for (const file of files) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [files]);

  const ImagePreview = () => (
    <div style={{ marginTop: '25px', marginBottom: '25px' }}>
      {files.map((file: FileProps) => (
        <div key={file.name}>
          <img src={file.preview} alt={file.name} width={'auto'} height={'75%'} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your target images here.</div>
      </div>
      <ImagePreview />
      {percentage === null && <button onClick={() => onClick(files)}>Start</button>}
      {percentage !== null && <div>Progress: {percentage} %</div>}
    </>
  );
};

export default UploadTab;
