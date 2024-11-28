localStorage.clear();
const employees = [
  {
    "id": 1,
    "name": "Ravi Kumar",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Submit Report",
        "taskDescription": "Complete and submit the monthly sales report.",
        "taskDate": "2024-11-05",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Website",
        "taskDescription": "Update product listings on the company website.",
        "taskDate": "2024-11-07",
        "category": "Web Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend weekly team meeting to discuss progress.",
        "taskDate": "2024-11-06",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Client Call",
        "taskDescription": "Call the client to discuss project updates.",
        "taskDate": "2024-11-05",
        "category": "Client Interaction",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the code submitted by junior developer.",
        "taskDate": "2024-11-08",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform scheduled maintenance on the company servers.",
        "taskDate": "2024-11-10",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Amit Verma",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design Mockups",
        "taskDescription": "Create design mockups for new product launch.",
        "taskDate": "2024-11-07",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Email Campaign",
        "taskDescription": "Draft and schedule the monthly email campaign.",
        "taskDate": "2024-11-06",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Team Training",
        "taskDescription": "Lead a training session for new hires on company tools.",
        "taskDate": "2024-11-09",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "name": "Neha Gupta",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Research Competitors",
        "taskDescription": "Conduct research on competitors' marketing strategies.",
        "taskDate": "2024-11-05",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget Planning",
        "taskDescription": "Assist in preparing the quarterly budget plan.",
        "taskDate": "2024-11-07",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Employee Feedback",
        "taskDescription": "Gather feedback from employees for improvement survey.",
        "taskDate": "2024-11-08",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Product Testing",
        "taskDescription": "Test new product features and provide feedback.",
        "taskDate": "2024-11-10",
        "category": "Product",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Rohit Singh",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create Presentation",
        "taskDescription": "Create a presentation for next week's client meeting.",
        "taskDate": "2024-11-06",
        "category": "Presentations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Vendor Negotiations",
        "taskDescription": "Negotiate with vendors to get better pricing for raw materials.",
        "taskDate": "2024-11-09",
        "category": "Procurement",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Staff Scheduling",
        "taskDescription": "Prepare and send out the staff schedule for the upcoming month.",
        "taskDate": "2024-11-07",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Social Media Management",
        "taskDescription": "Schedule posts and monitor engagement on social media accounts.",
        "taskDate": "2024-11-08",
        "category": "Social Media",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];



const admin= [{
    "id": 6,
    "name":'admin',
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
   const employees=JSON.parse(localStorage.getItem('employees'));
   const admin=JSON.parse(localStorage.getItem('admin'));
   return {employees,admin};
}