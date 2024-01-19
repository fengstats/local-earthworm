"use client";

import { toBlob, toSvg } from "html-to-image";
import { useEffect } from "react";

export const CardShare = () => {
  useEffect(() => {}, []);

  const handleShare = async () => {
    // NOTE: 用于测试使用，生成 svg 挂载到网页 body 元素上，可直接看到效果
    // const svg = await toSvg(document.body)
    // const node = new Image();
    // node.src = svg;
    // document.body.appendChild(node)

    // 使用新的剪贴板 API 复制图片
    // 兼容性查看 https://caniuse.com/?search=navigator.clipboard
    try {
      const blob = await toBlob(document.body);
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob as Blob })]);
      alert("分享图片已复制到剪贴板！");
    } catch (error) {
      console.error("复制到剪贴板失败：", error);
    }
  };

  return (
    <div className="text-red-400 cursor-pointer hover:text-fuchsia-500" onClick={handleShare}>
      打卡
    </div>
  );
};
