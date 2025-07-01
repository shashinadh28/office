import React from 'react';
import { ArrowLeft, Clock, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const tasks = [
  {
    id: 1,
    title: "Calendar management",
    description: "Prioritize high-impact meetings and ruthlessly protect your time so you're focused on what moves the needle in a resource-constrained environment."
  },
  {
    id: 2,
    title: "Inbox management", 
    description: "Triage and organize emails to ensure critical opportunities aren't missed, reporting times they reply, and you're not constantly task-switching when clarity matters most."
  },
  {
    id: 3,
    title: "Meeting prep and follow-up",
    description: "Maximize the value of every meeting by serving prepared and capturing action items—so nothing gets lost, and every minute counts when time and focus are in short supply."
  },
  {
    id: 4,
    title: "Travel coordination",
    description: "Book efficient, budget-conscious travel that supports business-critical trips and relationship building—because every dollar matters more now."
  },
  {
    id: 5,
    title: "Competitive and market intelligence",
    description: "Monitor competitor shifts, gather client feedback, and track industry changes so leadership can quickly identify threats or pivot toward emerging opportunities."
  },
  {
    id: 6,
    title: "Recession-specific strategy support",
    description: "Assist with gathering internal and external insights to shape your response plan—whether it's identifying new services, doubling down on the basics, or innovating offerings."
  },
  {
    id: 7,
    title: "Process documentation",
    description: "Build up SOPs to make operations more efficient, reduce training time, and protect against disruptions—especially important when teams are leaner or roles shift."
  },
  {
    id: 8,
    title: "Expense Tracking",
    description: "Track budget details and flag unnecessary or redundant costs—helping everyone save and avoid death by a thousand minor budget cuts."
  },
  {
    id: 9,
    title: "Cold email outreach",
    description: "Support relationship generation with targeted, personalized email outreach—creating new revenue opportunities without increasing your marketing spend."
  },
  {
    id: 10,
    title: "Research and vendor support",
    description: "Source budget-friendly vendors and summarize relevant market data to accelerate smarter decisions and spend wisely and stay ahead of the curve."
  },
  {
    id: 11,
    title: "Project coordination",
    description: "Keep cross-functional initiatives on track and within budget as business priorities continue—even as your team priorities competing priorities."
  },
  {
    id: 12,
    title: "Relationship management",
    description: "Maintain clean CRM records and proactively schedule check-ins to strengthen client relationships and improve retention and referrals."
  },
  {
    id: 13,
    title: "File and document organization",
    description: "Keep files efficiently organized across digital systems so teams can access what they need—fast—without wasting time hunting for info."
  },
  {
    id: 14,
    title: "Light bookkeeping support",
    description: "Help advisors compile and generate simple reports that give leadership quick visibility into spend patterns, helping spot leaks before they tip."
  },
  {
    id: 15,
    title: "Task tracking and reminders",
    description: "Prevent details from slipping through the cracks—especially when teams are juggling more with less."
  },
  {
    id: 16,
    title: "Gift or appreciation coordination",
    description: "Support morale and relationship building in cost-conscious ways, fulfilling loyalty among clients and internal networks."
  },
  {
    id: 17,
    title: "Internal dashboard updates",
    description: "Keep KPIs and financial snapshots current so leaders can see at a glance how it's working—and what needs attention—at all times."
  },
  {
    id: 18,
    title: "Software/tool vetting",
    description: "Audit current tools and compare alternatives to eliminate redundancy, cut costs, and boost team efficiency without sacrificing performance."
  },
  {
    id: 19,
    title: "Social Media Scheduling",
    description: "Maintain a consistent online presence that supports visibility and brand trust—without needing to invest in paid campaigns."
  },
  {
    id: 20,
    title: "Team Communication Support",
    description: "Help distribute updates, share important messages, and keep team aligned—even if everyone's moving fast and bandwidth is tight."
  },
  {
    id: 21,
    title: "Document editing and proofreading",
    description: "Polish internal and external communications to professionals—so your messaging stays sharp and credible when it matters most."
  }
];

export default function DelegationTasksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/virtual-assistant" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Virtual Assistant Services
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              21 EA TASKS
            </h1>
            <p className="text-base md:text-lg text-teal-100 mb-4">
              That Save Time, Money, and Sanity in a Looming Recession
            </p>
            <p className="text-sm md:text-base text-white/90 mb-6">
              When every dollar matters, time becomes even more valuable. 
              A skilled Executive Assistant can help you protect both—cutting costs, increasing 
              efficiency, and giving you more time to lead strategically.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                <span className="text-sm md:text-base font-semibold">Here are 21 ways a Gateway EA can help your business</span>
              </div>
              <p className="text-sm md:text-base text-white/90">
                not just survive a recession but come out <strong>stronger</strong> on the other side.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Bar */}
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-teal-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-teal-400 mr-2" />
              <span className="text-white font-medium">Save Time</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-medium">Cut Costs</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-white font-medium">Increase Efficiency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-teal-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:border-teal-400/50 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {task.id}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {task.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {task.description}
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-teal-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Delegate and Focus on What Matters Most?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let administrative tasks consume your valuable time. 
            Let our skilled virtual assistants handle these 21 critical tasks so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link
              href="/virtual-assistant"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 