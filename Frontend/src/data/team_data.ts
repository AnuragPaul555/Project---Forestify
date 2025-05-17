
export interface TeamMember {
  name: string;
  photo: string;
  description: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Anurag Paul",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: "Managed the AQI integration, UI design, and helped curate the Learn section."
  },
  {
    name: "Tonmoyjyoti Sharma",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Led the tree filtering system, contributed to frontend and data visualization."
  },
  {
    name: "Aniket Mitra",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Helped in building the dataset and developing the core application logic."
  }
];
