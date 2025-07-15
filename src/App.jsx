import { motion } from "motion/react";

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
    FaDownload,
    FaPhone,
    FaWhatsapp,
    FaBars,
    FaTimes,
    FaHome,
    FaUser,
    FaTools,
    FaGraduationCap,
    FaBriefcase,
    FaFolder,
    FaAddressBook,
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
    SiApollographql,
} from "react-icons/si";
import toast from "react-hot-toast";
import { useState } from "react";
import profile from "./assets/profile.jpg";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResumeDownload = () => {
        window.open(
            "https://drive.google.com/file/d/12eTLOmkVo-66EgBgHudVT2PLwFL7uJh5/view?usp=sharing",
            "_blank"
        );
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white font-sans">
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-shrink-0"
                        >
                            <h1 className="text-xl font-bold text-cyan-400">
                                SHAMIM
                            </h1>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink
                                    onClick={() => scrollToSection("home")}
                                    icon={<FaHome />}
                                    text="Home"
                                />
                                <NavLink
                                    onClick={() => scrollToSection("about")}
                                    icon={<FaUser />}
                                    text="About"
                                />
                                <NavLink
                                    onClick={() => scrollToSection("skills")}
                                    icon={<FaTools />}
                                    text="Skills"
                                />
                                <NavLink
                                    onClick={() => scrollToSection("education")}
                                    icon={<FaGraduationCap />}
                                    text="Education"
                                />
                                <NavLink
                                    onClick={() =>
                                        scrollToSection("experience")
                                    }
                                    icon={<FaBriefcase />}
                                    text="Experience"
                                />
                                <NavLink
                                    onClick={() => scrollToSection("projects")}
                                    icon={<FaFolder />}
                                    text="Projects"
                                />
                                <NavLink
                                    onClick={() => scrollToSection("contact")}
                                    icon={<FaAddressBook />}
                                    text="Contact"
                                />
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                            >
                                {isMenuOpen ? (
                                    <FaTimes size={24} />
                                ) : (
                                    <FaBars size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-slate-800 border-t border-slate-700"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <MobileNavLink
                                onClick={() => scrollToSection("home")}
                                icon={<FaHome />}
                                text="Home"
                            />
                            <MobileNavLink
                                onClick={() => scrollToSection("about")}
                                icon={<FaUser />}
                                text="About"
                            />
                            <MobileNavLink
                                onClick={() => scrollToSection("skills")}
                                icon={<FaTools />}
                                text="Skills"
                            />
                            <MobileNavLink
                                onClick={() => scrollToSection("education")}
                                icon={<FaGraduationCap />}
                                text="Education"
                            />
                            <MobileNavLink
                                onClick={() => scrollToSection("experience")}
                                icon={<FaBriefcase />}
                                text="Experience"
                            />
                            <MobileNavLink
                                onClick={() => scrollToSection("projects")}
                                icon={<FaFolder />}
                                text="Projects"
                            />
                            <MobileNavLink
                                onClick={() => scrollToSection("contact")}
                                icon={<FaAddressBook />}
                                text="Contact"
                            />
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16"
            >
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        {/* Professional Photo Placeholder */}
                        <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl">
                            <img
                                src={profile}
                                alt="Shamim"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </motion.div>

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
                        Full Stack Developer & UI Enthusiast
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8"
                    >
                        I craft beautiful, modern web experiences with
                        cutting-edge technologies. Passionate about creating
                        seamless user interfaces and robust backend solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={handleResumeDownload}
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
                        >
                            <FaDownload /> Download Resume
                        </button>
                        <div className="flex gap-6">
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
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-8 text-cyan-400 text-center"
                >
                    About Me
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-slate-800 rounded-xl p-8 shadow-lg"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 className="text-xl font-semibold mb-4 text-cyan-300">
                                My Journey
                            </h4>
                            <p className="text-slate-300 mb-4">
                                I am a graduate with hands-on experience in a
                                variety of real-world projects. My journey in
                                tech began with curiosity and has evolved into a
                                passion for creating impactful digital
                                solutions.
                            </p>
                            <p className="text-slate-300 mb-4">
                                I specialize in full-stack development, with
                                expertise in React, Node.js, and modern web
                                technologies. I enjoy building applications that
                                solve real problems and provide exceptional user
                                experiences.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4 text-cyan-300">
                                Beyond Coding
                            </h4>
                            <p className="text-slate-300 mb-4">
                                When I'm not coding, you'll find me exploring
                                new technologies, contributing to open-source
                                projects, or enjoying outdoor activities. I
                                believe in continuous learning and staying
                                updated with the latest industry trends.
                            </p>
                            <p className="text-slate-300">
                                I'm passionate about clean code, user-centered
                                design, and creating applications that make a
                                difference in people's lives.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-8 text-cyan-400 text-center"
                >
                    Skills & Technologies
                </motion.h3>

                {/* Frontend Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-12"
                >
                    <h4 className="text-xl font-semibold mb-6 text-cyan-300 text-center">
                        Frontend Development
                    </h4>
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
                            icon={<SiTailwindcss className="text-sky-400" />}
                            label="TailwindCSS"
                        />
                        <SkillItem
                            icon={<SiFramer className="text-pink-400" />}
                            label="Framer Motion"
                        />
                    </div>
                </motion.div>

                {/* Backend Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mb-12"
                >
                    <h4 className="text-xl font-semibold mb-6 text-cyan-300 text-center">
                        Backend Development
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <SkillItem
                            icon={<FaNodeJs className="text-green-500" />}
                            label="Node.js"
                        />
                        <SkillItem
                            icon={<SiExpress className="text-gray-300" />}
                            label="Express"
                        />
                        <SkillItem
                            icon={<SiNestjs className="text-red-500" />}
                            label="NestJS"
                        />
                        <SkillItem
                            icon={<SiDotnet className="text-purple-500" />}
                            label=".NET"
                        />
                    </div>
                </motion.div>

                {/* Database Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mb-12"
                >
                    <h4 className="text-xl font-semibold mb-6 text-cyan-300 text-center">
                        Databases
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    </div>
                </motion.div>

                {/* Other Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <h4 className="text-xl font-semibold mb-6 text-cyan-300 text-center">
                        Tools & Others
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <SkillItem
                            icon={<FaCloud className="text-indigo-400" />}
                            label="Cloud"
                        />
                        <SkillItem
                            icon={<FaNetworkWired className="text-slate-400" />}
                            label="Networking"
                        />
                        <SkillItem
                            icon={
                                <SiApollographql className="text-orange-400" />
                            }
                            label="REST API"
                        />
                        <SkillItem
                            icon={<FaServer className="text-blue-400" />}
                            label="DevOps"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-8 text-cyan-400 text-center"
                >
                    Educational Background
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-slate-800 rounded-xl p-8 shadow-lg"
                >
                    <div className="space-y-6">
                        <div className="border-l-4 border-cyan-400 pl-6">
                            <h4 className="text-xl font-semibold text-cyan-300">
                                Bachelor's Degree
                            </h4>
                            <p className="text-slate-300 font-medium">
                                Computer Science & Engineering
                            </p>
                            <p className="text-slate-400">
                                American International University-Bangladesh •
                                2021 - 2025
                            </p>
                            <p className="text-slate-400 mt-2">
                                Specialized in software engineering and web
                                development.
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-6">
                            <h4 className="text-xl font-semibold text-blue-300">
                                Higher Secondary Certificate
                            </h4>
                            <p className="text-slate-300 font-medium">
                                Science Group
                            </p>
                            <p className="text-slate-400">
                                Saidpur Govt. Science College • 2017 - 2019
                            </p>
                            <p className="text-slate-400 mt-2">
                                Completed with excellent academic performance.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-8 text-cyan-400 text-center"
                >
                    Professional Experience
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-slate-800 rounded-xl p-8 shadow-lg"
                >
                    <div className="space-y-6">
                        <div className="border-l-4 border-green-400 pl-6">
                            <h4 className="text-xl font-semibold text-green-300">
                                IT Assistant
                            </h4>
                            <p className="text-slate-300 font-medium">
                                American Internation University-Bangladesh
                            </p>
                            <p className="text-slate-400">
                                February, 2025 - June, 2025
                            </p>
                            <ul className="text-slate-400 mt-2 space-y-1">
                                <li>
                                    • Maintained and updated the university's
                                    website and IT infrastructure.
                                </li>
                                <li>
                                    • Provided technical support to students and
                                    faculty.
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-10 text-cyan-400 text-center"
                >
                    Featured Projects
                </motion.h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <ProjectCard
                        title="Lost and Found Items Platform"
                        description="A full-stack web application for managing lost and found items with React frontend and Node.js backend. Features user authentication, item management, recovery tracking, and modern UI/UX."
                        tech="React 19, Express, MongoDB, Firebase, JWT"
                        image="https://i.ibb.co/TMLjByNc/lostandfound.png"
                        liveLink="https://assignment-11-d33f2.web.app"
                        githubLink="https://github.com/spshamim/Where-Is-It"
                        color="cyan"
                    />

                    {/* Project Card 2 */}
                    <ProjectCard
                        title="Hobby Hub"
                        description="A full-stack web application that connects people with shared interests and hobbies. Built with React 19 frontend featuring modern UI/UX design, Firebase authentication, and a Node.js/Express.js backend with MongoDB."
                        tech="React 19, Express, MongoDB, Firebase"
                        image="https://i.ibb.co/Xffnc6k5/hobbyhub.png"
                        liveLink="https://hobby-hub.web.app"
                        githubLink="https://github.com/spshamim/Hobby-Hub"
                        color="green"
                    />

                    {/* Project Card 3 */}
                    <ProjectCard
                        title="Medical Camp Management System"
                        tech="React 19, Express, MongoDB, Firebase, JWT"
                        description="A comprehensive web application for organizing and managing medical camps, connecting healthcare organizers with participants. The system provides seamless camp registration, secure payments, feedback management, and robust analytics, with dedicated dashboards for both organizers and participants."
                        image="https://i.ibb.co/4Z2TtNSG/mcms.png"
                        liveLink="https://mcms-portal.web.app"
                        githubLink="https://github.com/spshamim/Medical-Camp-Management-System"
                        color="pink"
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold mb-6 text-cyan-400 text-center"
                >
                    Get In Touch
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-slate-300 mb-8 text-center"
                >
                    Interested in working together or want to say hi? Reach out
                    via the form below or contact me directly!
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="bg-slate-800 rounded-xl p-8 shadow-lg"
                        onSubmit={(e) => {
                            e.preventDefault();
                            toast.success("Message sent successfully!", {
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
                        <h4 className="text-xl font-semibold mb-6 text-cyan-300">
                            Send Message
                        </h4>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                className="w-full px-4 py-3 rounded bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded transition-colors shadow-md"
                            >
                                <FaReact className="text-xl animate-spin" />{" "}
                                Send Message
                            </button>
                        </div>
                    </motion.form>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-slate-800 rounded-xl p-8 shadow-lg"
                    >
                        <h4 className="text-xl font-semibold mb-6 text-cyan-300">
                            Contact Information
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-cyan-400 text-xl" />
                                <div>
                                    <p className="text-slate-300 font-medium">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:spshamim.dev@gmail.com"
                                        className="text-slate-400 hover:text-cyan-400"
                                    >
                                        spshamim.dev@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-cyan-400 text-xl" />
                                <div>
                                    <p className="text-slate-300 font-medium">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+8801234567890"
                                        className="text-slate-400 hover:text-cyan-400"
                                    >
                                        +8801775793699
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaWhatsapp className="text-green-400 text-xl" />
                                <div>
                                    <p className="text-slate-300 font-medium">
                                        WhatsApp
                                    </p>
                                    <a
                                        href="https://wa.me/8801775793699"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-green-400"
                                    >
                                        +8801775793699
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h5 className="text-lg font-semibold mb-4 text-cyan-300">
                                Follow Me
                            </h5>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/spshamim"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400 text-2xl transition-colors"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://linkedin.com/in/spshamim"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 text-2xl transition-colors"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-slate-400">
                                © {new Date().getFullYear()} Shahriar Parvez
                                Shamim. All rights reserved.
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <a
                                href="https://github.com/spshamim"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/spshamim"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="mailto:spshamim.dev@gmail.com"
                                className="text-slate-400 hover:text-pink-400 transition-colors"
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm mt-4">
                        Built with React, TailwindCSS, and ❤️
                    </p>
                </div>
            </footer>
        </div>
    );
}

// Navigation Link Component
function NavLink({ onClick, icon, text }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
            {icon} {text}
        </button>
    );
}

// Mobile Navigation Link Component
function MobileNavLink({ onClick, icon, text }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
        >
            {icon} {text}
        </button>
    );
}

// Skill Item Component
function SkillItem({ icon, label }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3 bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700"
        >
            <span className="text-4xl">{icon}</span>
            <span className="text-slate-200 font-medium text-center">
                {label}
            </span>
        </motion.div>
    );
}

// Project Card Component
function ProjectCard({
    title,
    description,
    tech,
    image,
    liveLink,
    githubLink,
    color,
}) {
    const colorClasses = {
        cyan: "text-cyan-300",
        green: "text-green-300",
        pink: "text-pink-300",
    };

    const bgColorClasses = {
        cyan: "bg-cyan-500 hover:bg-cyan-600",
        green: "bg-green-500 hover:bg-green-600",
        pink: "bg-pink-500 hover:bg-pink-600",
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15)",
            }}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-all"
        >
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <div
                    className={`flex items-center gap-3 mb-3 ${colorClasses[color]} text-xl`}
                >
                    <FaCode /> {title}
                </div>
                <p className="text-slate-300 text-sm mb-3 line-clamp-3">
                    {description}
                </p>
                <p className="text-slate-400 text-xs mb-4">{tech}</p>
                <div className="flex gap-3">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 ${bgColorClasses[color]} text-white font-semibold px-4 py-2 rounded text-sm transition-colors`}
                    >
                        <FaExternalLinkAlt /> Live
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded text-sm transition-colors"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
