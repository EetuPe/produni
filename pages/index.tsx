import Sidebar from "../components/Sidebar"
import Center from "../components/Center"


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}
