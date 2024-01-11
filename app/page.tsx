import "@/styles/home.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="parent bg-slate-500 h-[400px] w-[400px]">
        <div className="child bg-blue-500 h-[50%] w-[50%]"></div>
      </div>
    </main>
  )
}
