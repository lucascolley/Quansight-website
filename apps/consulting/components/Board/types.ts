import { TRichText } from '@quansight/shared/types';

export type TBoardItemProps = {
  _uid?: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
  imageSrc: string;
  imageAlt: string;
  classNameBorder: string;
};

export type TBoardButtonProps = {
  buttonTitle: string;
  buttonUrl: string;
  classNameBorder: string;
};

export type TBoardProps = {
  title: string;
  description: TRichText;
  grid: TBoardItemProps[];
  button: TBoardButtonProps;
};
