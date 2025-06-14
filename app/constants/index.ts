export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Backend Developer",
		icon: "/backend.webp",
	},
	{
		title: "API Integration",
		icon: "/web.webp",
	},
	{
		title: "SQL",
		icon: "/mobile.webp",
	},
	{
		title: ".NET Core Developer",
		icon: "/creator.webp",
	},
];

const technologies = [
  {
    name: ".NET Core",
    icon: "/tech/dotnet-icon.webp",  
  },
  {
    name: "ASP.NET MVC",
    icon: "/tech/dotnetcore.webp",
  },
  {
    name: "C#",
    icon: "/tech/csharp.webp",
  },
  {
    name: "SQL Server",
    icon: "/tech/sql.webp",
  },
  {
    name: "Entity Framework",
    icon: "/tech/dotnetcore.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "Angular",
    icon: "/tech/angular.webp",
  },
  {
    name: "Bootstrap",
    icon: "/tech/bootstrap.webp",
  },
  {
    name: "Git",
    icon: "/tech/github.webp",
  },
  {
    name: "Postman",
    icon: "/tech/postman.webp",
  }, 
];


const experiences = [
	{
		title: "Software Developer",
		company_name: "Planet Ecom Solutions Pvt.Ltd",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2025 -  Till Now",
		points: [
			"Debugging and Troubleshooting",
			"Identifying and resolving software defects or bugs",
			"making improvements to enhance performance or functionality."
		],
	},
	{
		title: "Software Developer",
		company_name: "D Succeed Learners Pvt.Ltd",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "2024 - 2025",
		points: [
			"Writing and Testing Code.",
			"Developing software solutions by writing clean, efficient code .",
			"performing unit tests to ensure functionality.",
			"Collaborating with Teams: Working with other developers, designers, and project managers to understand requirements and deliver features that meet the needs of users. "
		],
	},
	{
		title: "Software Developer",
		company_name: "Excelsior Softwares Pvt Ltd",
		icon: "/company/wtw.jpg",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	 
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Arpit Kumar",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/arpit-kumar-966927281/",
	},  
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Om Patel",
		image: "/tech/github.webp",
		link: "https://github.com/Arpit2405",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "A.V.M Auto Portfolio",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		platform: "Wordpress",
		deploy_link: "https://avmauto.in/",
	},
	{
		name: "Sparkbright Engineering Portfolio",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
		platform: "Web",
		deploy_link: "https://sparkbright.in/",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "MERN Dashboard",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	},
	{
		name: "Metaverse Web 3.0",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/omunite215/Project_Metaverse",
		platform: "Vercel",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
	{
		name: "Issue Tracker",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "shadCN",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
		platform: "Vercel",
		deploy_link: "https://project-issue-tracker.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
