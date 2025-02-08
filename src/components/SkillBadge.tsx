import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-sm sm:text-base text-gray-900">{name}</h3>
        <span className="text-xs sm:text-sm text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
        <div
          className="bg-indigo-600 h-1.5 sm:h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBadge;