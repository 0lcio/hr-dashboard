import styles from './Calendar.module.css';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, addMonths } from 'date-fns';
import { useState } from 'react';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dayData, setDayData] = useState<{ [key: string]: string[] }>({});
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // week starts on Monday
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 }); // week ends on Sunday

    const daysInMonthArray = eachDayOfInterval({
        start: startDate,
        end: endDate
    });

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleDayClick = (day: string, event: React.MouseEvent) => {
        if ((event.target as Element).classList.contains('task')) {
            // Don't prompt the user to enter a task if they clicked on an existing task
            return;
        }

        const task = prompt('Enter a task');
        if (task) {
            setDayData(prevData => ({
                ...prevData,
                [day]: [...(prevData[day] || []), task]
            }));
        }
    };

    const handleTaskClick = (day: string, taskIndex: number, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the day square

        const task = prompt('Edit task', dayData[day][taskIndex]);
        if (task !== null) { // If the user clicked "Cancel", don't change the task
            setDayData(prevData => {
                const tasks = [...prevData[day]]; // Copy the array of tasks
                tasks[taskIndex] = task; // Change the task
                return { ...prevData, [day]: tasks };
            });
        }
    };

    const handleDeleteTaskClick = (day: string, taskIndex: number, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the task
    
        setDayData(prevData => {
            const tasks = [...prevData[day]]; // Copy the array of tasks
            tasks.splice(taskIndex, 1); // Delete the task
            return { ...prevData, [day]: tasks };
        });
    };

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => addMonths(prevDate, -1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => addMonths(prevDate, 1));
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>{format(currentDate, 'MMMM yyyy')}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className={styles.daysOfWeek}>
                {daysOfWeek.map((day, index) => (
                    <div key={index} className={styles.dayOfWeek}>{day}</div>
                ))}
            </div>
            <div className={styles.calendargrid}>
                {daysInMonthArray.map((day, index) => (
                    <div 
                        key={index} 
                        className={`${styles.calendarday} 
                                    ${!isSameMonth(day, currentDate) ? styles.calendardayoutside : ''} 
                                    ${format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') ? styles.currentDate : ''}`} 
                        onClick={(event) => handleDayClick(format(day, 'yyyy-MM-dd'), event)}
                    >
                        <div>{format(day, 'd')}</div>
                        <div className={styles.dayData}>
                            {(dayData[format(day, 'yyyy-MM-dd')] || []).map((task, index) => (
                                <div key={index} className={styles.task} onClick={(event) => handleTaskClick(format(day, 'yyyy-MM-dd'), index, event)}>
                                    {task}
                                    <button onClick={(event) => handleDeleteTaskClick(format(day, 'yyyy-MM-dd'), index, event)}>X</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;