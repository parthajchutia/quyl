function StudentFilterHeader({ 
    onAddStudent,
    onFilterChange 
  }: StudentFilterHeaderProps) {
    const [selectedYear, setSelectedYear] = useState('AY 2024-25');
    const [selectedGrade, setSelectedGrade] = useState('CBSE 9');
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [isGradeOpen, setIsGradeOpen] = useState(false);
  
    const academicYears: FilterOption[] = [
      { label: 'AY 2024-25', value: 'AY 2024-25' },
      { label: 'AY 2023-24', value: 'AY 2023-24' },
      { label: 'AY 2022-23', value: 'AY 2022-23' }
    ];
  
    const grades: FilterOption[] = [
      { label: 'CBSE 9', value: 'CBSE 9' },
      { label: 'CBSE 10', value: 'CBSE 10' },
      { label: 'CBSE 11', value: 'CBSE 11' },
      { label: 'CBSE 12', value: 'CBSE 12' }
    ];
  
    const handleYearChange = (year: string) => {
      setSelectedYear(year);
      setIsYearOpen(false);
      onFilterChange?.(year, selectedGrade);
    };
  
    const handleGradeChange = (grade: string) => {
      setSelectedGrade(grade);
      setIsGradeOpen(false);
      onFilterChange?.(selectedYear, grade);
    };
  
    return (
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-3">
          {/* Academic Year Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsYearOpen(!isYearOpen)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-900">{selectedYear}</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            
            {isYearOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {academicYears.map((year) => (
                  <button
                    key={year.value}
                    onClick={() => handleYearChange(year.value)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {year.label}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Grade Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGradeOpen(!isGradeOpen)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-900">{selectedGrade}</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            
            {isGradeOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {grades.map((grade) => (
                  <button
                    key={grade.value}
                    onClick={() => handleGradeChange(grade.value)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {grade.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
  
        {/* Add Student Button */}
        <button
          onClick={onAddStudent}
          className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors text-gray-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add new Student</span>
        </button>
      </div>
    );
  }