"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FC } from "react";

interface QRCodeProps {
  url: string;
}

const QRCode: FC<QRCodeProps> = (props) => {
  return (
    <QRCodeCanvas
      value={props.url}
      size={128}
      bgColor={"#FF0000"}
      fgColor={"#FFC0CB"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: "/favicon.ico",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

export default QRCode;
