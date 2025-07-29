import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import React from 'react';

interface ProjectSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange
}) => {
  const categories = ['All', 'Web Application', 'Mobile App', 'Data Science', 'Blockchain', 'IoT'];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
        <Input
          type="text"
          placeholder="Search projects by title, description, or technology..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
      </div>
      
      <div className="flex gap-2">
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="pl-10 pr-8 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-w-[140px]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default ProjectSearch;