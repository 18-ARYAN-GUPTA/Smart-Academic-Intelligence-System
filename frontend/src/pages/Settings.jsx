import React from 'react';
import { Bell, Lock, Eye, Shield, Smartphone } from 'lucide-react';

const Settings = () => {
  const sections = [
    {
      title: "Account Settings",
      icon: <Lock size={20} />,
      items: ["Change Password", "Two-Factor Authentication", "Login Activity"]
    },
    {
      title: "AI & Notifications",
      icon: <Bell size={20} />,
      items: ["Attendance Alert Threshold (Current: 75%)", "Performance Drop Alerts", "Predictive Insights Frequency"]
    },
    {
      title: "Privacy",
      icon: <Shield size={20} />,
      items: ["Profile Visibility", "Data Sharing with Faculty", "Analytics Opt-out"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
      
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center space-x-3 text-slate-700 font-bold">
              {section.icon}
              <span>{section.title}</span>
            </div>
            <div className="divide-y divide-slate-100">
              {section.items.map((item, i) => (
                <div key={i} className="p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer transition-colors">
                  <span className="text-slate-600 text-sm font-medium">{item}</span>
                  <button className="text-blue-600 text-xs font-bold hover:underline">Edit</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-200">
        <button className="bg-red-50 text-red-600 px-6 py-2 rounded-xl border border-red-100 font-bold hover:bg-red-100 transition-colors">
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default Settings;