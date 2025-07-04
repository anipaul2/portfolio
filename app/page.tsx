"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, FileText, Zap, TrendingUp, Users, BookOpen, Award, ArrowRight, Code, Globe } from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setMounted(true)
  }, [])

  const proofOfWork = [
    {
      title: "LeetCode",
      company: "Personal",
      description: "Solved 400+ algorithm and data structure problems. (not much active right now)",
      link: "https://leetcode.com/u/Anipaul1/",
      icon: <Code className="w-5 h-5" />,
      category: "Development",
    },
    {
      title: "Proof of Humanity Research",
      company: "Intract",
      description: "Led research and competitor analysis, supporting $590k+ in revenue and 2M+ user claims.",
      link: "https://intract-io.notion.site/Research-Proof-of-Humanity-d03bbca3efa64482a9e07bd2f3f8953a",
      icon: <Users className="w-5 h-5" />,
      category: "Research",
    },
    {
      title: "Current Perpetual DEXes I Am Bullish On",
      company: "Independent",
      description:
        "An in-depth analysis of the perpetual DEX landscape, highlighting the protocols I find most promising and the reasons behind my conviction.",
      link: "https://paragraph.com/@0x5b8eba0b8fafa9d92ec667d7440d5ac3e9d574ce/perpetual-dexes",
      icon: <TrendingUp className="w-5 h-5" />,
      category: "Analysis",
    },
    {
      title: "Privacy-Preserving Technologies",
      company: "Intract",
      description:
        "Authored comprehensive research documentation on Trusted Execution Environments (TEEs), Multi-Party Computation (MPC), and other privacy solutions.",
      link: "https://intract-io.notion.site/Privacy-Preserving-Technologies-174b31fb6eb6800da2dbfa84814d2b6d",
      icon: <Zap className="w-5 h-5" />,
      category: "Research",
    },
    {
      title: "Web3 Onboarding",
      company: "Intract",
      description:
        "Developed an onboarding guide for individuals new to web3, providing a structured exploration of the DeFi landscape using Intract's platform.",
      link: "https://www.notion.so/intract-io/Web3-Onboarding-Intract-181b31fb6eb680cabb14c40cfe247ae8",
      icon: <BookOpen className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Eye Of Satoshi",
      company: "Summer of Bitcoin",
      description:
        "Contributed a pull request to the rust-teos (Eye of Satoshi) codebase as part of the Summer of Bitcoin program.",
      link: "https://github.com/talaia-labs/rust-teos/pull/215",
      icon: <Github className="w-5 h-5" />,
      category: "Development",
    },
    {
      title: "Eye Of Satoshi",
      company: "Summer of Bitcoin",
      description:
        "Authored a blog post focusing on Bitcoin, Lightning Network, and the Eye of Satoshi Watchtower, which was published on the official Summer of Bitcoin blog.",
      link: "https://web.archive.org/web/20230630152934/https://blog.summerofbitcoin.org/bitcoin-lightning-and-the-eye-of-satoshi-watchtower-revolutionizing-transactions-and-security/",
      icon: <Globe className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Testnet vs Mainnet",
      company: "Shardeum Blog",
      description:
        "Published on the official Shardeum blog, explaining the key differences and concepts between testnets and mainnets in blockchain ecosystems.",
      link: "https://shardeum.org/blog/testnet-vs-mainnet/",
      icon: <Globe className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Rollups",
      company: "ItsBlockchain",
      description: "Wrote an in-depth explainer on rollups.",
      link: "https://web.archive.org/web/20231210052841/https://itsblockchain.com/a-dummys-guide-to-ethereum-rollups/",
      icon: <FileText className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Modular Blockchains",
      company: "ItsBlockchain",
      description: "Deep dive on Modular Blockchains.",
      link: "https://web.archive.org/web/20240414110343/https://itsblockchain.com/a-deep-dive-into-modular-blockchains-celestia/",
      icon: <FileText className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Lens Protocol",
      company: "ItsBlockchain",
      description: "An overview on the Lens ecosystem.",
      link: "https://web.archive.org/web/20240222012958/https://itsblockchain.com/lens-protocol-everything-you-need-to-know/",
      icon: <FileText className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "EIP-4844",
      company: "ItsBlockchain",
      description: "A Game-Changer for Smart Contract Execution.",
      link: "https://web.archive.org/web/20240222010439/https://itsblockchain.com/eip-4844-explained/",
      icon: <FileText className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Token Airdrops",
      company: "ItsBlockchain",
      description: "Early deep-dives on zkSync, Sui, Arbitrum, Starknet, and LayerZero airdrops — one blog alone hit 16.2k views and 1.3k shares.",
      link: "https://web.archive.org/web/20240302054335/https://itsblockchain.com/here-are-5-upcoming-projects-that-may-airdrop-soon/",
      icon: <FileText className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Socials & Community Management",
      company: "Intract",
      description:
        "Managed and grew Intract's Telegram and Twitter, hosted Discord calls, and spoke at Web3 events and meetups (Avalanche, Solana, etc.) to onboard and support new users.",
      link: "https://t.me/IntractCommunity",
      icon: <Users className="w-5 h-5" />,
      category: "Community",
    },
    {
      title: "Overview of Blockchain Environments",
      company: "Hashnode",
      description: "Earned honourable mention in Epic Hashnode Writeathon (62nd place).",
      link: "https://townhall.hashnode.com/the-epic-hashnode-writeathon-the-winners#heading-100-honorable-mentions",
      icon: <Award className="w-5 h-5" />,
      category: "Education",
    },
    {
      title: "Onecdot Hashnode Blog Series",
      company: "Onecdot",
      description:
        "Wrote 9 blogs as a developer advocate, covering topics such as minting gaming assets on Polygon using Onecdot APIs, minting NFTs with simple RESTful APIs, and more.",
      link: "https://onecdotin.hashnode.dev/",
      icon: <BookOpen className="w-5 h-5" />,
      category: "Education",
    },
  ]

  const skills = [
    "Product Ops",
    "DeFi Research",
    "Community",
    "Technical Writing",
    "Growth Analysis",
    "Content Strategy",
    "Open Source",
  ]

  const certifications = [
    {
      name: "CS120: Bitcoin for Developers I",
      link: "https://learn.saylor.org/admin/tool/certificate/index.php?code=6180579186AP",
    },
    {
      name: "PRDV151: Bitcoin for Everybody",
      link: "https://certificates.saylor.org/a5972ab1-684e-434f-9416-6f340fa2a53b",
    },
    {
      name: "Introduction to Machine Learning in Production",
      link: "https://www.coursera.org/account/accomplishments/certificate/QCMEFBJ7748V",
    },
    {
      name: "Machine Learning Data Lifecycle in Production",
      link: "https://www.coursera.org/account/accomplishments/verify/RS9NLDP5S9EJ",
    },
    {
      name: "Engineering Virtual Program (Goldman Sachs)",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_bb2eWjG9ZKpfMFcbn_1656500642580_completion_certificate.pdf",
    },
    {
      name: "Smart Contracts (University at Buffalo)",
      link: "https://www.coursera.org/account/accomplishments/certificate/UVS7PECKMUDY",
    },
    {
      name: "Machine Learning",
      link: "https://www.coursera.org/account/accomplishments/verify/A34SEEP4L4WZ",
    },
    {
      name: "Software Engineering Virtual Experience (JPMorganChase)",
      link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_bb2eWjG9ZKpfMFcbn_1643718271965_completion_certificate.pdf",
    },
    {
      name: "Algorithmic Toolbox",
      link: "https://www.coursera.org/account/accomplishments/certificate/DCM7AYBUL6CM",
    },
    {
      name: "Blockchain Basics",
      link: "https://www.coursera.org/account/accomplishments/certificate/CXQWRJGXGBSY",
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="container mx-auto px-6 py-20 min-h-screen flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 text-center lg:text-left w-full">
            <div className="relative group">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/25 transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-400/40">
                <Image
                  src="https://pbs.twimg.com/profile_images/1903541066835668992/gHnmFuZG_400x400.jpg"
                  alt="Aniketh Paul"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur opacity-25 animate-pulse group-hover:opacity-40 transition-opacity"></div>

              {/* Floating badges around profile */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-mono animate-bounce">
                DeFi
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-mono animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                Web3
              </div>
            </div>

            <div className="max-w-3xl">
              <div className="mb-6">
                <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight">
                  Aniketh Paul
                </h1>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full text-cyan-300 font-mono text-sm backdrop-blur-sm">
                    Product Ops
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-400/30 rounded-full text-emerald-300 font-mono text-sm backdrop-blur-sm">
                    DeFi Researcher
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-400/30 rounded-full text-orange-300 font-mono text-sm backdrop-blur-sm">
                    Community Builder
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Building at the intersection of <span className="text-cyan-400 font-semibold">DeFi</span>,{" "}
                <span className="text-emerald-400 font-semibold">product</span>, and{" "}
                <span className="text-orange-400 font-semibold">community</span>. I break down company growth, explain
                complex concepts simply, and help onboard the next wave of users into web3.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 group">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 text-xl leading-relaxed mb-6">
                  I live in India and am currently working at{" "}
                  <Link
                    href="https://x.com/Intract_HQ"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition-all duration-300 hover:decoration-cyan-400"
                  >
                    Intract
                  </Link>{" "}
                  as a DeFi Researcher. Previously, I worked at{" "}
                  <Link
                    href="https://x.com/ItsBlockchain"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition-all duration-300 hover:decoration-cyan-400"
                  >
                    ItsBlockchain
                  </Link>{" "}
                  as a crypto writer and contributed to{" "}
                  <Link
                    href="https://x.com/summerofbitcoin"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition-all duration-300 hover:decoration-cyan-400"
                  >
                    Summer of Bitcoin
                  </Link>
                  .
                </p>
                <p className="text-gray-300 text-xl leading-relaxed">
                  I am proficient in Product operations, research, company growth breakdowns, technical writing, and
                  community management. Outside of work, I enjoy trading on{" "}
                  <Link
                    href="https://x.com/HyperliquidX"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition-all duration-300 hover:decoration-cyan-400"
                  >
                    Hyperliquid
                  </Link>
                  , farming airdrops, and working out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Proof of Work Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Proof of Work</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my work across DeFi, web3, and technical problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proofOfWork.map((work, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {work.icon}
                      </div>
                      <Badge variant="outline" className="text-xs font-mono border-slate-600 text-slate-400">
                        {work.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl mb-2 group-hover:text-cyan-300 transition-colors">
                      {work.title}
                    </CardTitle>
                    <CardDescription className="text-cyan-400 font-mono text-sm">{work.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 mb-6 leading-relaxed">{work.description}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 font-semibold group/btn"
                    >
                      <Link href={work.link} target="_blank" className="flex items-center gap-2">
                        Read more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-6 py-3 text-base font-mono border-2 border-cyan-400/50 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-900 hover:border-transparent transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Certifications Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Link
                  key={index}
                  href={cert.link}
                  target="_blank"
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-purple-400/10"
                >
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {cert.name}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="container mx-auto px-6 py-16 text-center border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-lg mb-8">
                Always open to discussing DeFi, product strategy, and collaboration opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <Link
                href="https://farcaster.xyz/anipl1"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                Farcaster
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="https://x.com/Alphooor"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                Twitter
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="mailto:aniketh131@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                Email
              </Link>
            </div>

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>
            <p className="text-gray-500 text-sm">© 2025 Aniketh Paul.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
