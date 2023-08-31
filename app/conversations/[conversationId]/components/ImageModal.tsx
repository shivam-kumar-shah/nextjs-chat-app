"use client";
import React from "react";

interface ImageModalProps {
  src: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  return <div>ImageModal</div>;
};

export default ImageModal;
