'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Crystal Break',
		description: 'A Tetris-inspirated PVP puzzle game featuring diverse characters with unique skills',
		image: '/crystal_break.jpg',
		tags: ['Unity (C#)', 'Photon Server', 'Mobile Game', 'Multiplayer', 'Real-time combat'],
	},
	{
		title: 'I-WELL',
		description: 'An interactive platform containing various mini-games, with physical sensors, designed for children with Special Education Needs (SEN), measuring their cognitive abilities',
		image: '/iwell.jpg',
		tags: ['Unity (C#)', 'Game', 'Physical Sensors'],
	},

	{
		title: 'HK Central Library Virtual Tour',
		description: 'An immersive virtual tour application of the Hong Kong Central Library showcases its facilities and services, including a real-time multiplayer mini-quiz that educates visitors about the library\'s rules.',
		image: '/hk_central_library.jpg',
		tags: ['Vue.js', 'Progressive Web App (PWA)', 'Game', 'Socket.IO', 'WebGL'],
	},

	{
		title: 'Mannings Christmas Campaign',
		description: 'A christmas campaign website featuring games and quizzes, together with an Instagram AR filter that recognizes faces and adds festive elements to photos',
		image: '/mannings_christmas.jpg',
		tags: ['Website', 'React.js', 'Game', 'AR filter', 'Spark AR', 'Face recognition'],
	},

	{
		title: 'Artyzen Club',
		description: 'The official website and digital menu app for a private business club',
		image: '/artyzen_club.jpg',
		tags: ['Website', 'Vue.js', 'Progressive Web App (PWA)', 'Responsive Web Design'],
	},

	{
		title: 'Wesip.',
		description: 'A membership platform providing high-quality coffee and tea, fostering a community of beverage lovers',
		image: '/wesip.jpg',
		tags: ['Website', 'Vue.js', 'AWS', 'Responsive Web Design', 'E-commerce', 'AI'],
	},

];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
