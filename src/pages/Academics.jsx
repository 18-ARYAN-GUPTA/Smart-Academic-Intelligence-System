import React from 'react';

const Academics = () => {
  const courses = [
    { id: 1, name: "Machine Learning", code: "CS601", grade: "A", attendance: "85%" },
    { id: 2, name: "Data Warehousing", code: "CS602", grade: "B+", attendance: "72%" },
    { id: 3, name: "Software Engineering", code: "CS603", grade: "A+", attendance: "94%" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">My Academics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{course.code}</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">{course.name}</h3>
            <div className="mt-4 flex justify-between items-center border-t pt-4">
              <div>
                <p className="text-slate-500 text-xs">Attendance</p>
                <p className={`font-bold ${parseInt(course.attendance) < 75 ? 'text-red-500' : 'text-slate-800'}`}>{course.attendance}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-xs">Current Grade</p>
                <p className="font-bold text-blue-600">{course.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;