import { MapPin, Phone, Smartphone, Mail } from "lucide-react";
import type { TeamMember } from "../../data/team/team.types";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

  return (
    <article className="bg-white border border-gray-200 rounded-xl w-full md:w-[380px] hover:shadow-lg transition-all duration-200 flex flex-col">
      <div className="flex gap-4 items-start p-6">
        <div
          className="relative shrink-0 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center text-xl font-bold text-gray-500 border border-gray-100"
          style={{ backgroundColor: member.imageBg || "#f3f4f6" }}
        >
          {member.image ? (
            <img
              alt={member.name}
              className="w-full h-full object-cover"
              src={member.image}
            />
          ) : (
            <span>{getInitials(member.name)}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className="font-semibold text-gray-900 text-lg mb-1 truncate"
            title={member.name}
          >
            {member.name}
          </h3>

          <p className="text-gray-500 text-sm mb-2 truncate">{member.role}</p>

          <div className="inline-flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full text-blue-700 text-xs font-medium">
            <MapPin size={12} />
            <span className="truncate max-w-[150px]">{member.location}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-4 mt-auto space-y-3 bg-gray-50/50 rounded-b-xl">
        {member.phone && (
          <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
            {member.phone.startsWith("+52 971 1") ? (
              <Smartphone size={16} />
            ) : (
              <Phone size={16} />
            )}

            <a href={`tel:${member.phone}`} className="text-sm font-medium">
              {member.phone}
            </a>
          </div>
        )}

        <div className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors">
          <Mail size={16} className="shrink-0" />
          <a
            href={`mailto:${member.email}`}
            className="text-sm font-medium truncate"
            title={member.email}
          >
            {member.email}
          </a>
        </div>
      </div>
    </article>
  );
}
