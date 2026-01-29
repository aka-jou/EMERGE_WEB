import type { Department } from "../../data/team/team.types";
import TeamMemberCard from "./TeamMemberCard";

export default function DepartmentSection({
  department,
}: {
  department: Department;
}) {
  return (
    <section className="mb-12 last:mb-0">
      <header className="mb-6">
        <h2 className="font-bold text-gray-900 text-2xl mb-2">
          {department.title}
        </h2>
        <p className="text-gray-500 text-base">{department.description}</p>
      </header>

      <div className="flex flex-wrap gap-6">
        {department.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
