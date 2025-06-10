const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Progress</span>
        <span>Question {current} of {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;