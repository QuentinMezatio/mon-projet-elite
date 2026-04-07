export default function ProfileCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}