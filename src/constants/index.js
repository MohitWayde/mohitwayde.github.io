import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	Rakuten,
	iRely,
	Proffus,
	carrent,
	jobit,
	tripguide,
	threejs,
  } from "../assets";
  
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
	  title: "Web Developer",
	  icon: web,
	},
	{
	  title: "Frontend Developer",
	  icon: mobile,
	},
	{
	  title: "Backend Developer",
	  icon: backend,
	},
	{
	  title: "Full Stack Web Developer",
	  icon: creator,
	},
  ];
  
  const technologies = [
	{
	  name: "HTML 5",
	  icon: html,
	},
	{
	  name: "CSS 3",
	  icon: css,
	},
	{
	  name: "JavaScript",
	  icon: javascript,
	},
	{
	  name: "TypeScript",
	  icon: typescript,
	},
	{
	  name: "React JS",
	  icon: reactjs,
	},
	{
	  name: "Redux Toolkit",
	  icon: redux,
	},
	{
	  name: "Tailwind CSS",
	  icon: tailwind,
	},
	{
	  name: "Node JS",
	  icon: nodejs,
	},
	{
	  name: "MongoDB",
	  icon: mongodb,
	},
	{
	  name: "Three JS",
	  icon: threejs,
	},
	{
	  name: "git",
	  icon: git,
	},
	{
	  name: "figma",
	  icon: figma,
	},
	{
	  name: "docker",
	  icon: docker,
	},
  ];
  
  const experiences = [
	{
	  title: "Web Developer",
	  company_name: "Proffus",
	  icon: Proffus,
	  iconBg: "#223438",
	  date: "March 2022 - June 2022",
	  points: [
		"Developing and maintaining web applications using WordPress and other related technologies.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and taking constructive feedback from other developers.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	  ],
	},
	{
	  title: "Software Engineer",
	  company_name: "iRely",
	  icon: iRely,
	  iconBg: "#FFFFFF",
	  date: "May 2023 - July 2023",
	  points: [
		"Developing and maintaining web applications using DotNet, JavaScript and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and taking constructive feedback from other developers.",
	  ],
	},
	{
	  title: "Software Engineer",
	  company_name: "Rakuten",
	  icon: Rakuten,
	  iconBg: "#FFFFFF",
	  date: "Sep 2023 - Present",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Participating in code reviews and taking constructive feedback from other developers.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
	  ],
	},
  ];
  
  const testimonials = [
	{
	  testimonial:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam possimus accusantium",
	  name: "Sara Tancredi",
	  designation: "CFO",
	  company: "ABC Co",
	  image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
	  testimonial:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam possimus accusantium",
	  name: "Chris Hemsworth",
	  designation: "COO",
	  company: "DEF Corp",
	  image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
	  testimonial:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam possimus accusantium",
	  name: "Brian O'Corner",
	  designation: "CTO",
	  company: "XYZ enterprices",
	  image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
  ];
  
  const projects = [
	{
	  name: "Car Rent",
	  description:
		"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "mongodb",
		  color: "green-text-gradient",
		},
		{
		  name: "tailwind",
		  color: "pink-text-gradient",
		},
	  ],
	  image: carrent,
	  source_code_link: "https://github.com/",
	},
	{
	  name: "Job IT",
	  description:
		"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "restapi",
		  color: "green-text-gradient",
		},
		{
		  name: "scss",
		  color: "pink-text-gradient",
		},
	  ],
	  image: jobit,
	  source_code_link: "https://github.com/",
	},
	{
	  name: "Trip Guide",
	  description:
		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	  tags: [
		{
		  name: "nextjs",
		  color: "blue-text-gradient",
		},
		{
		  name: "supabase",
		  color: "green-text-gradient",
		},
		{
		  name: "css",
		  color: "pink-text-gradient",
		},
	  ],
	  image: tripguide,
	  source_code_link: "https://github.com/",
	},
  ];
  
  export { services, technologies, experiences, testimonials, projects };