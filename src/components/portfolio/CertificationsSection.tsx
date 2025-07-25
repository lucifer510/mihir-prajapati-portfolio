"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Certificate = {
  title: string;
  platform: string;
  issued: string;
  credentialId: string;
  skills: string[];
  platformIcon: string;
  color: string;
  certificatePreview: string;
  platformIconSize: number;
};

const certifications: Certificate[] = [
  {
    title: "Jira Agile Fundamentals",
    platform: "Udemy",
    issued: "July, 2025",
    credentialId: "UC-7a1249c9-62f8-4525-b5d3-7eb55de4a580",
    skills: [
      "jira",
      "agile project management",
    ],
    platformIcon: "logos:udemy",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/jira_essentials_udemy.jpg",
    platformIconSize: 88
  },
  {
    title: "Power BI Essential Training (2022)",
    platform: "Linkedin Learning",
    issued: "June, 2025",
    credentialId: "b54b5a3d6aa94b5ba3ccf84b3d8e777869cc231922ba072b6be01c651ebfc5dc",
    skills: [
      "microsoft power bi",
      "microsoft fabric",
      "data modeling",
      "data science",
      "data analysis",
      "data cleaning",
      "data visualization"
    ],
    platformIcon: "logos:linkedin",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/powerbi_training_linkedin.jpg",
    platformIconSize: 88
  },
  {
    title: "Prompt Engineering: How to Talk to the AIs",
    platform: "Linkedin Learning",
    issued: "May, 2025",
    credentialId: "0481b0547e8ff89b9897b47d6f1a63fbc6b8b5ab83125c265879e7b8e315b73c",
    skills: [
      "Large Language Models(LLM)",
      "Generative AI",
      "Prompt Engineering",
    ],
    platformIcon: "logos:linkedin",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/prompt_engineering_linkedin.jpg",
    platformIconSize: 88
  },
  {
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    platform: "Udemy",
    issued: "September, 2023",
    credentialId: "UC-008f31ac-b4e0-4e24-a5f6-039a7f4cd7c4",
    skills: [
      "UI/UX Design",
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Web Design",
      "HTML5",
      "CSS3",
      "Accessibility",
      "Typography"
    ],
    platformIcon: "logos:udemy",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/uiux_udemy.jpg",
    platformIconSize: 88
  },
  {
    title: "Complete Web Development",
    platform: "Udemy",
    issued: "August, 2023",
    credentialId: "UC-04bbec20-ea1a-4b04-bd7f-b5ad6b6f0ef5/",
    skills: [
      "HTML/HTML5",
      "CSS/CSS3",
      "Bootstrap 5",
      "Javascript (ES6/ES7/ES8/ES9/ES10/ES2020)",
      "React",
      "Git + Github",
      "Command Line",
      "Node.js",
      "Express.js",
      "NPM",
      "RESTful API Design",
      "PostgresSQL",
      "SQL",
      "Authentication",
      "Authorization",
      "Scalable Infrastructure",
      "Security",
      "Production and Deployment"
    ],
    platformIcon: "logos:udemy",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/web_developer_udemy_certificate.jpg",
    platformIconSize: 88
  },
  {
    title: "CSS, Bootstrap, and Javascript Web Development Course ",
    platform: "Udemy",
    issued: "February, 2023",
    credentialId: "UC-3b45969c-a9a1-4eec-a5c4-a17ee2594b04",
    skills: [
      "CSS",
      "Bootstrap",
      "Javascript",
      "Styling",
    ],
    platformIcon: "logos:udemy",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/CSS_Javascript_Boostrap_udemy_certificate.jpg",
    platformIconSize: 88
  },
  {
    title: "HTML5 - From Basics to Advanced level",
    platform: "Udemy",
    issued: "February, 2023",
    credentialId: "UC-008f31ac-b4e0-4e24-a5f6-039a7f4cd7c4",
    skills: [
      "HTML/HTML5",
      "Semantic UI"
    ],
    platformIcon: "logos:udemy",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/html_udemy.jpg",
    platformIconSize: 88
  }
];


export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "3s" }}
            className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "6s" }}
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
            tagText="Professional Credentials"
            tagIcon="solar:verified-check-bold"
            heading="Certifications"
            description="Professional certifications and credentials that validate my expertise in modern technologies and development practices."
            showUnderline={false}
            centered={true}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group h-full"
              >
                <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">

                  {/* Header with gradient - keeping this as requested */}
                  <div className={`h-20 flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 ${cert.color} relative overflow-hidden`}>
                    <div className="flex items-center justify-end mr-4 gap-1">
                      {/* <Icon icon={cert.providerIcon} className="" width={cert.providerIconSize} height={cert.providerIconSize} />
                      <span className="text-black dark:text-white text-sm font-bold">×</span> */}
                      <Icon icon={cert.platformIcon} className="" width={cert.platformIconSize} height={cert.platformIconSize} />
                    </div>
                    <div className="flex items-center justify-start gap-0">
                      <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
                        <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-white rounded-lg -z-0"></div>
                        <Icon icon="solar:verified-check-bold" className="text-blue-500 z-10" width={26} height={26} />
                      </div>
                      <span className="text-blue-500 text-sm font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Subtle decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>

                    {/* Certificate Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Provider Info */}
                    <div className="space-y-3 mb-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/30">
                      {/* <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                          <Icon icon="solar:buildings-2-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Provider:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{cert.provider}</span>
                      </div> */}
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
                          <Icon icon="solar:monitor-smartphone-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Platform:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{cert.platform}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center">
                          <Icon icon="solar:calendar-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Issued:</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issued}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md flex items-center justify-center">
                          <Icon icon="solar:star-bold" className="text-white" width={10} height={10} />
                        </div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Skills Validated
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200/80 dark:from-gray-700/50 dark:to-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-300/60 dark:border-gray-600/50 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:border-blue-300/60 dark:hover:border-blue-600/50 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-700/50">
                      {/* <Link
                        href={`https://www.coursera.org/verify/${cert.credentialId}`}
                        target="_blank"
                      // rel="noopener noreferrer"
                      >
                        <div className="flex items-center gap-2">
                          <Icon icon="solar:arrow-right-up-bold" className="text-green-500" width={14} height={14} />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            ID: <span className="text-gray-700 dark:text-gray-300 font-mono">{cert.credentialId}</span>
                          </span>
                          <Icon icon="solar:link-bold" className="text-gray-500" width={14} height={14} />
                        </div>
                      </Link> */}
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 rounded-lg border border-blue-200/60 dark:border-blue-700/50 hover:border-blue-300/80 dark:hover:border-blue-600/70 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md"
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <Icon icon="solar:eye-bold" width={12} height={12} />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-blue-50/90 to-purple-50/90 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300/70 dark:hover:border-blue-600/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                  <Icon icon="solar:star-outline" className="text-white" width={18} height={18} />
                </div>
                <span className="text-blue-700 dark:text-blue-300 text-sm md:text-base font-semibold">
                  6 Professional Certifications
                </span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-blue-300/50"></div>
              <div className="flex items-center gap-3">
                <Icon icon="solar:verified-check-bold" className="text-blue-500" width={22} height={22} />
                <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
                  Verified by Industry Leaders
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              // transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative border border-white/20 dark:border-gray-700/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {selectedCertificate.platform} • {selectedCertificate.issued}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="p-3 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <Icon icon="solar:close-outline" className="text-gray-500" width={20} height={20} />
                </motion.button>
              </div>

              {/* Certificate Image */}
              <div className="p-6 flex justify-center bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
                <div className="relative max-w-full max-h-[60vh] overflow-hidden  shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <Image
                    src={selectedCertificate.certificatePreview || ""}
                    alt={selectedCertificate.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Credential ID: <span className="text-gray-800 dark:text-gray-200">{selectedCertificate.credentialId}</span>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-red-500/50"
                  >
                    <Icon icon="solar:close-circle-bold" className="text-white" width={20} height={20} />
                    Close
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCertificate.certificatePreview || ""}
                    download={`${selectedCertificate.title}.png`}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-blue-500/50"
                  >
                    <Icon icon="solar:download-bold" width={16} height={16} />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 