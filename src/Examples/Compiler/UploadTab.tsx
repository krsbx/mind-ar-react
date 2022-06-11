import React from 'react';

const UploadTab = ({
  refDropzone,
  percentage,
  onClick,
}: {
  refDropzone: React.RefObject<HTMLDivElement>;
  percentage: number | null;
  onClick: () => void;
}) => {
  return (
    <div>
      <p>Select target images and start</p>
      <div
        ref={refDropzone}
        className="dropzone"
        style={{ marginBottom: '20px' }}
      ></div>
      <div>
        {percentage === null && <button onClick={onClick}>Start</button>}
        {percentage !== null && <div>Progress: {percentage} %</div>}
      </div>
    </div>
  );
};

export default UploadTab;
