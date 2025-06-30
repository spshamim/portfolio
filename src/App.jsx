import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaReact,
    FaCode,
    FaExternalLinkAlt,
    FaNodeJs,
    FaCloud,
    FaNetworkWired,
    FaServer,
    FaDatabase,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiNestjs,
    SiDotnet,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiTailwindcss,
    SiFramer,
    SiSocketdotio,
    SiApollographql,
} from "react-icons/si";
import toast from "react-hot-toast";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white font-sans">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                >
                    Shahriar Parvez Shamim
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-2xl md:text-3xl font-semibold mb-8 text-slate-300"
                >
                    Frontend Developer & UI Enthusiast
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="max-w-xl mx-auto text-lg md:text-xl text-slate-400 mb-8"
                >
                    I craft beautiful, modern web experiences with React,
                    TailwindCSS, and a passion for delightful user interfaces.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex gap-6 justify-center"
                >
                    <a
                        href="https://github.com/spshamim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 text-3xl transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/spshamim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 text-3xl transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:spshamim.dev@gmail.com"
                        className="hover:text-pink-400 text-3xl transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-10 px-4 max-w-3xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-6 text-cyan-400"
                >
                    About Me
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-slate-300 mb-4"
                >
                    I am a graduate with hands-on experience in a variety of
                    real-world projects. My journey in tech has equipped me with
                    practical skills and a strong foundation, allowing me to
                    deliver effective solutions and contribute meaningfully to
                    every team I join.
                </motion.p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-8 text-cyan-400"
                >
                    Skills
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <SkillItem
                        icon={<FaReact className="text-cyan-400" />}
                        label="React"
                    />
                    <SkillItem
                        icon={
                            <SiNextdotjs className="text-black dark:text-white" />
                        }
                        label="Next.js"
                    />
                    <SkillItem
                        icon={<SiNestjs className="text-red-500" />}
                        label="NestJS"
                    />
                    <SkillItem
                        icon={<SiDotnet className="text-purple-500" />}
                        label=".NET"
                    />
                    <SkillItem
                        icon={<SiExpress className="text-gray-300" />}
                        label="Express"
                    />
                    <SkillItem
                        icon={<SiPostgresql className="text-blue-500" />}
                        label="PostgreSQL"
                    />
                    <SkillItem
                        icon={<SiMongodb className="text-green-500" />}
                        label="MongoDB"
                    />
                    <SkillItem
                        icon={<FaDatabase className="text-red-700" />}
                        label="SQL Server"
                    />
                    <SkillItem
                        icon={<SiTailwindcss className="text-sky-400" />}
                        label="TailwindCSS"
                    />
                    <SkillItem
                        icon={<SiFramer className="text-pink-400" />}
                        label="Framer Motion"
                    />
                    <SkillItem
                        icon={<FaCloud className="text-indigo-400" />}
                        label="Cloud"
                    />
                    <SkillItem
                        icon={<FaNetworkWired className="text-slate-400" />}
                        label="Networking"
                    />
                    <SkillItem
                        icon={<SiApollographql className="text-orange-400" />}
                        label="REST API"
                    />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-10 text-cyan-400"
                >
                    Projects
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Project Card 1 */}
                    <motion.div
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15)",
                        }}
                        className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-2 text-cyan-300 text-xl">
                            <FaReact /> Lost and Found Items Platform
                        </div>
                        <div className="text-slate-200 font-semibold mb-2">
                            Lost and Found Items Platform - A full-stack web
                            application for managing lost and found items with
                            React frontend and Node.js backend. Features user
                            authentication, item management, recovery tracking,
                            and modern UI/UX.
                        </div>
                        <div className="text-slate-400 text-sm mb-4">
                            Built using React 19, Express, and MongoDB.
                            Optimized for performance and scalability.
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://assignment-11-d33f2.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                            <a
                                href="https://github.com/spshamim/Where-Is-It"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
                            >
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </motion.div>
                    {/* Project Card 2 */}
                    <motion.div
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15)",
                        }}
                        className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-2 text-green-300 text-xl">
                            <FaCode /> Hobby Hub
                        </div>
                        <div className="text-slate-200 font-semibold mb-2">
                            A full-stack web application that connects people
                            with shared interests and hobbies. Built with React
                            19 frontend featuring modern UI/UX design, Firebase
                            authentication, and a Node.js/Express.js backend
                            with MongoDB. The platform offers real-time updates,
                            responsive design, and secure user management to
                            help users manage groups.
                        </div>
                        <div className="text-slate-400 text-sm mb-4">
                            Built using React 19, Express, and MongoDB.
                            Optimized for performance and scalability.
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://hobby-hub.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                            <a
                                href="https://github.com/spshamim/Hobby-Hub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
                            >
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </motion.div>
                    {/* Project Card 3 */}
                    <motion.div
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15)",
                        }}
                        className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-2 text-pink-300 text-xl">
                            <FaCode /> Event Management App
                        </div>
                        <div className="text-slate-200 font-semibold mb-2">
                            Event management app where user can find upcoming
                            and pas event, they can book event and filter, They
                            can manage their booked list.
                        </div>
                        <div className="text-slate-400 text-sm mb-4">
                            Developed with React 19, Express, and MongoDB.
                            Features live updates and user authentication.
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://ph-assignment-9-29834.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                            <a
                                href="https://github.com/spshamim/Event-Manager"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
                            >
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-20 px-4 max-w-2xl mx-auto text-center"
            >
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-6 text-cyan-400"
                >
                    Contact
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-slate-300 mb-8"
                >
                    Interested in working together or want to say hi? Reach out
                    via the form below or any platform!
                </motion.p>
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="bg-slate-800 rounded-xl p-8 shadow-lg flex flex-col gap-6 items-center mb-8"
                    onSubmit={(e) => {
                        e.preventDefault();
                        toast.success("Message sent successfully", {
                            duration: 3000,
                            position: "top-center",
                            style: {
                                background: "#363636",
                                color: "#fff",
                            },
                        });
                        e.target.reset();
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full md:w-96 px-4 py-2 rounded bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full md:w-96 px-4 py-2 rounded bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        className="w-full md:w-96 px-4 py-2 rounded bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded transition-colors shadow-md cursor-pointer"
                    >
                        <FaReact className="text-xl animate-spin" /> Send
                    </button>
                </motion.form>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} Shahriar Parvez Shamim. All rights
                reserved.
            </footer>
        </div>
    );
}

// SkillItem component
function SkillItem({ icon, label }) {
    return (
        <div className="flex flex-col items-center gap-2 bg-slate-800 rounded-lg p-4 shadow hover:scale-105 transition-transform">
            <span className="text-3xl">{icon}</span>
            <span className="text-slate-200 font-medium text-lg">{label}</span>
        </div>
    );
}
