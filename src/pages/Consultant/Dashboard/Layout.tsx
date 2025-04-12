import Sidebar from "@/layout/Sidebar";

// export default function DashboardLayout({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     return (
//         <div>
//             <div className="flex flex-row ">
//                 <Sidebar />
//             </div>
//             {children}
//         </div>
//     )
// }


export default function DashboardLayout () {
    return <div>
        <div>
            <Sidebar/>
        </div>
    </div>
}