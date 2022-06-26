import { DefaultARProps, MindARFace, MindARImage } from './interfaces';

const generateDefaultProps = (mindARDefault: DefaultARProps, isFace = false) => {
  if (mindARDefault?.autoStart === undefined) mindARDefault.autoStart = true;
  if (mindARDefault?.uiLoading === undefined) mindARDefault.uiLoading = 'yes';
  if (mindARDefault?.uiScanning === undefined) mindARDefault.uiScanning = 'yes';
  if (mindARDefault?.uiError === undefined) mindARDefault.uiError = 'yes';
  if (mindARDefault?.filterMinCF === undefined) mindARDefault.filterMinCF = -1;
  if (mindARDefault?.filterBeta === undefined) mindARDefault.filterBeta = -1;
  if (mindARDefault?.shouldFaceUser === undefined) mindARDefault.shouldFaceUser = isFace;
  if (mindARDefault?._positionSettings === undefined) mindARDefault._positionSettings = 'absolute';
  if (mindARDefault?._positionZIndex === undefined) mindARDefault._positionZIndex = -2;

  return mindARDefault;
};

export const generateImageProps = (mindARImage: MindARImage) => {
  generateDefaultProps(mindARImage);

  if (mindARImage?.maxTrack === undefined) mindARImage.maxTrack = 1;
  if (mindARImage?.missTolerance === undefined) mindARImage.missTolerance = -1;
  if (mindARImage?.warmupTolerance === undefined) mindARImage.warmupTolerance = -1;
  if (mindARImage?.showStats === undefined) mindARImage.showStats = false;
  if (mindARImage?.reshowScanning === undefined) mindARImage.reshowScanning = true;

  return mindARImage;
};

export const generateFaceProps = (mindARFace: MindARFace) => {
  generateDefaultProps(mindARFace, true);

  if (mindARFace?.faceOccluder === undefined) mindARFace.faceOccluder = true;

  return mindARFace;
};
