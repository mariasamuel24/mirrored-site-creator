import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users, ClipboardList, CheckCircle, TrendingUp,
  Hammer, Truck, DollarSign, Star
} from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const DashboardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()),
    ]).then(([usersData, todosData]) => {
      setUsers(usersData);
      setTodos(todosData);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const completedTodos = todos.filter((t) => t.completed).length;
  const pendingTodos = todos.filter((t) => !t.completed).length;

  const stats = [
    { label: "إجمالي العملاء", value: users.length, icon: Users, color: "bg-blue-100 text-blue-700" },
    { label: "إجمالي الطلبات", value: todos.length, icon: ClipboardList, color: "bg-purple-100 text-purple-700" },
    { label: "تم الانتهاء", value: completedTodos, icon: CheckCircle, color: "bg-green-100 text-green-700" },
    { label: "قيد التنفيذ", value: pendingTodos, icon: Hammer, color: "bg-orange-100 text-orange-700" },
    { label: "في الطريق", value: 14, icon: Truck, color: "bg-yellow-100 text-yellow-700" },
    { label: "الإيرادات", value: "٢٥,٠٠٠ ج.م", icon: DollarSign, color: "bg-emerald-100 text-emerald-700" },
    { label: "متوسط التقييم", value: "٤.٨ ⭐", icon: Star, color: "bg-amber-100 text-amber-700" },
    { label: "نسبة النمو", value: "+١٢%", icon: TrendingUp, color: "bg-cyan-100 text-cyan-700" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-20 flex items-center justify-center">
          <div className="text-muted-foreground text-lg animate-pulse">جاري التحميل...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-muted-foreground text-lg">نظرة عامة على المشروع</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-card rounded-2xl p-5 border border-border/50 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-5 border-b border-border/50">
                <h2 className="text-lg font-bold">آخر العملاء المسجلين</h2>
              </div>
              <div className="divide-y divide-border/30">
                {users.slice(0, 6).map((user) => (
                  <div key={user.id} className="p-4 flex items-center gap-3 hover:bg-secondary/20 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{user.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{user.email}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{user.phone.split(" ")[0]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-5 border-b border-border/50">
                <h2 className="text-lg font-bold">آخر الطلبات</h2>
              </div>
              <div className="divide-y divide-border/30">
                {todos.slice(0, 8).map((todo) => (
                  <div key={todo.id} className="p-4 flex items-center gap-3 hover:bg-secondary/20 transition-colors">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${todo.completed ? "bg-green-500" : "bg-orange-400"}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{todo.title}</div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${todo.completed ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                      {todo.completed ? "مكتمل" : "جاري"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
