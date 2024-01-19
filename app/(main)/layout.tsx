import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      {/* TODO: 使用伪元素 before 会在打卡分享图片时丢失，所以用一个实际 DOM 元素来做这件事 */}
      <div className="noise" />
      <Header></Header>
      <main className="flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
}
