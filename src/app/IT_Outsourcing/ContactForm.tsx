'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  iconPath: string; // Changed from icon to iconPath
}

const skillsData: Skill[] = [
  { id: 'react', name: 'React', iconPath: '/svg/react.svg' },
  { id: 'nodejs', name: 'Node.js', iconPath: '/svg/nodejs.svg' },
  { id: 'python', name: 'Python', iconPath: '/svg/pythonn.svg' },
  { id: 'ruby', name: 'Ruby', iconPath: '/svg/ruby.svg' },
  { id: 'swift', name: 'Swift', iconPath: '/svg/swift.svg' },
  { id: 'android', name: 'Android', iconPath: '/svg/andriod.svg' },
  { id: 'laravel', name: 'Laravel', iconPath: '/svg/laravel.svg' },
  { id: 'flutter', name: 'Flutter', iconPath: '/svg/flutter.svg' },
  { id: 'angular', name: 'Angular', iconPath: '/svg/angular.svg' },
  { id: 'other', name: 'Other', iconPath: '/svg/other.svg' },
];

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [duration, setDuration] = useState('');

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev =>
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, companyName, teamSize, selectedSkills, duration });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto my-8 md:my-0 md:ml-auto relative z-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's Talk</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input 
            type="text" 
            name="companyName" 
            id="companyName" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter your company name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">How many developers or team members are you looking for?</label>
          <div className="relative">
            <select 
              name="teamSize" 
              id="teamSize" 
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white pr-8"
            >
              <option value="" disabled>Select an option</option>
              <option value="1-3">1-3 Members</option>
              <option value="4-7">4-7 Members</option>
              <option value="8-12">8-12 Members</option>
              <option value="12+">12+ Members</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select skills you're looking for <span className="text-xs text-gray-500">(Choose multiple)</span></label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {skillsData.map(skill => {
              const isSelected = selectedSkills.includes(skill.id);
              return (
                <button 
                  type="button"
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  className={`flex items-center justify-start space-x-2 w-full px-3 py-2.5 border rounded-md text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-500 
                              ${isSelected ? 'bg-sky-500 text-white border-sky-500 shadow-md' : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-300'}`}
                >
                  <img src={skill.iconPath} alt={skill.name} width={20} height={20} className={`object-contain ${isSelected ? 'filter brightness-0 invert' : ''}`} />
                  <span>{skill.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Expected Duration</label>
          <div className="relative">
            <select 
              name="duration" 
              id="duration" 
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white pr-8"
            >
              <option value="" disabled>Select an option</option>
              <option value="short-term">Short-term (1-3 Months)</option>
              <option value="medium-term">Medium-term (3-6 Months)</option>
              <option value="long-term">Long-term (6+ Months)</option>
              <option value="ongoing">Ongoing</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <button 
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300"
        >
          Next <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
