import { Home, Users, Calendar, DollarSign, Star, Gift, Briefcase } from "lucide-react";

const sidebarItems = [
    { icon: <Users />, item: "Consultant" },
    { icon: <Briefcase />, item: "Expertise" },
    { icon: <Calendar />, item: "Sessions" },
    { icon: <Star />, item: "Master Class" },
    { icon: <Home />, item: "Resources" },
    { icon: <Users />, item: "Community" },
    { icon: <Calendar />, item: "Calendar" },
    { icon: <DollarSign />, item: "Payments" },
    { icon: <DollarSign />, item: "Subscription" },
    { icon: <Star />, item: "Reviews" },
    { icon: <Gift />, item: "Refer & Earn" },
    { icon: <Briefcase />, item: "Business Profile" },
];

export default function Sidebar() {
    return (
        <nav className="w-64 bg-gray-900 text-white p-4">
            <ul className="space-y-2">
                {sidebarItems.map((item, key) => (
                    <li key={key} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition">
                        {item.icon}
                        <a href="#" className="text-white">{item.item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
