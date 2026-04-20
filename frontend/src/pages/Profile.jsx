import React from 'react';
import { User, Mail, Book, Phone } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl font-bold">
          PS
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Prem Sharma</h3>
            <p className="text-slate-500">B.Tech Student - 6th Semester</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-slate-600">
              <Mail size={18} /> <span>prem.sharma@college.edu</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <Book size={18} /> <span>Roll No: 2024CS101</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;