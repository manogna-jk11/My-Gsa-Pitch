import React, { useState } from 'react';
import { MessageSquare, Ticket, ChevronLeft, CheckCircle, Clock, Sparkles, Mail, Phone, Linkedin, Github } from 'lucide-react';

const ticketData = [
  {
    id: 1,
    from: "Ajay",
    subject: "Urgent: Need more tech resources & events on campus!",
    message: "Hi, my name is Ajay. Our campus has a lot of tech-interested students, but we don't have enough hands-on workshops for the latest Google tools. It's hard to connect with others who are passionate about tech, and I don't know where to start. Any help would be great!",
    status: "Solved",
    response: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Thank you for reaching out. I completely understand your frustration—I've felt it too. My journey with technology has been intertwined with Google's mission to make information accessible for everyone. My deep passion for tools like **Google Workspace** and my fascination with new innovations like the **Gemini API** are what drive me to want to share them with others.
        </p>
        <p className="font-bold text-lg mb-2 text-gray-800">
          My vision as a Google Student Ambassador:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold text-google-blue">Hands-on Workshops:</span> I will organize monthly workshops focused on practical skills. Topics would include using the **Gemini API** for creative projects, building dynamic websites with **Firebase**, and exploring the power of **Google Cloud Platform (GCP)**.
          </li>
          <li>
            <span className="font-semibold text-google-green">Campus Dev Club:</span> I will establish a student-led club to foster a supportive community. This will be a space for peer-to-peer learning, collaborative projects, and sharing ideas, all centered around a shared passion for Google technology.
          </li>
          <li>
            <span className="font-semibold text-google-yellow">Networking & Career Prep:</span> I will invite Google professionals and local tech alumni to speak, providing students with invaluable networking opportunities and insights into the industry that I am so excited to be a part of.
          </li>
        </ul>
        <p className="mt-4 text-gray-700 leading-relaxed">
          This isn't just about representing a brand; it's about being a catalyst for our campus's success and sharing the incredible resources that have shaped my own path. I am confident that with my leadership and genuine passion, I can turn these ideas into reality. I'm ready to get to work.
        </p>
      </>
    )
  },
  {
    id: 2,
    from: "A student",
    subject: "Question about an upcoming event",
    message: "I heard there might be a coding workshop happening soon. Can you give me more details about it?",
    status: "In Progress",
    response: null
  },
  {
    id: 3,
    from: "A student",
    subject: "Feedback on a previous workshop",
    message: "The recent cloud computing workshop was fantastic! The presenter was engaging and the content was really helpful. Thanks!",
    status: "Solved",
    response: "Thank you so much for the feedback! We're thrilled you found the workshop valuable. Your input helps us create even better events in the future."
  },
];

const googleColors = {
  blue: '#4285F4',
  red: '#EA4335',
  yellow: '#FBBC05',
  green: '#34A853',
  lightBlue: '#E8F0FE',
  lightRed: '#FCE8E6',
  lightYellow: '#FEF7E0',
  lightGreen: '#E6F4EA',
};

const Header = () => (
  <header className="bg-white p-4 shadow-md flex items-center justify-center relative">
    <div className="flex items-center space-x-2">
      <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
        <span style={{ color: googleColors.blue }}>G</span>
        <span style={{ color: googleColors.red }}>o</span>
        <span style={{ color: googleColors.yellow }}>o</span>
        <span style={{ color: googleColors.blue }}>g</span>
        <span style={{ color: googleColors.green }}>l</span>
        <span style={{ color: googleColors.red }}>e</span>
        {' '}Help Center
      </h1>
    </div>
  </header>
);

const Doodle = ({ children, color, className }) => (
  <div className={`p-2 rounded-full ${className}`} style={{ backgroundColor: color }}>
    {children}
  </div>
);

const GoogleDoodles = () => (
  <div className="mt-6 flex flex-wrap justify-center items-center gap-4 p-4 rounded-xl bg-gray-100 shadow-inner">
    <Doodle color={googleColors.blue} className="transform rotate-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.9a2 2 0 0 1 2 2zM15 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM12 2v2M20 12h-2M12 20v2M4 12H2"/></svg>
    </Doodle>
    <Doodle color={googleColors.red} className="transform -rotate-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg>
    </Doodle>
    <Doodle color={googleColors.yellow} className="transform rotate-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </Doodle>
    <Doodle color={googleColors.green} className="transform -rotate-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15h2v-6h-2zm0-8h2V7h-2z"/></svg>
    </Doodle>
  </div>
);

const ContactMe = () => (
    <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Me</h3>
      <div className="space-y-4">
        <a href="mailto:your-email@example.com" className="flex items-center text-google-blue hover:underline transition-colors duration-200">
          <Mail size={20} className="mr-3" />
          <span>your-email@example.com</span>
        </a>
        <a href="tel:+1234567890" className="flex items-center text-google-green hover:underline transition-colors duration-200">
          <Phone size={20} className="mr-3" />
          <span>+1 (234) 567-890</span>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-google-blue-dark transition-colors duration-200">
          <Linkedin size={20} className="mr-3" />
          <span>LinkedIn Profile</span>
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
          <Github size={20} className="mr-3" />
          <span>GitHub Profile</span>
        </a>
      </div>
    </div>
);

const TicketList = ({ tickets, onTicketSelect }) => (
  <div className="flex-1 overflow-y-auto pr-2">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Support Tickets</h2>
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => onTicketSelect(ticket.id)}
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{ticket.subject}</h3>
            {ticket.status === 'Solved' ? (
              <span className="flex items-center text-google-green text-sm font-medium">
                <CheckCircle size={16} className="mr-1" /> Solved
              </span>
            ) : (
              <span className="flex items-center text-google-blue text-sm font-medium">
                <Clock size={16} className="mr-1" /> In Progress
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm truncate">{ticket.message}</p>
        </div>
      ))}
    </div>
  </div>
);

const TicketDetail = ({ ticket, onBack, onGenerateResponse, isGenerating, generatedResponse, setGeneratedResponse, onSolve }) => (
  <div className="flex-1 flex flex-col p-6 overflow-y-auto">
    <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-4 self-start">
      <ChevronLeft size={20} className="mr-1" /> Back to Tickets
    </button>
    <div className="bg-white rounded-xl shadow-lg p-8 flex-1 overflow-y-auto">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{ticket.subject}</h2>
        <div className="flex items-center mt-2 text-gray-500 text-sm">
          <Ticket size={16} className="mr-1" />
          <span>Ticket #{ticket.id}</span>
          <span className="mx-2">|</span>
          {ticket.status === 'Solved' ? (
            <span className="text-google-green font-medium">Status: Solved</span>
          ) : (
            <span className="text-google-blue font-medium">Status: In Progress</span>
          )}
        </div>
      </div>
      <div className="mb-6">
        <p className="font-semibold text-lg text-gray-700 mb-2">Original Message from <span className="text-gray-900">{ticket.from}</span>:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-600">
          <p>{ticket.message}</p>
        </div>
      </div>
      {ticket.status === 'Solved' && ticket.response && (
        <div>
          <p className="font-semibold text-lg text-gray-700 mb-2">My Response:</p>
          <div className="p-6 rounded-lg text-gray-800" style={{ backgroundColor: googleColors.lightBlue }}>
            {ticket.response}
          </div>
        </div>
      )}

      {ticket.status === 'In Progress' && (
        <div className="mt-8">
          <p className="font-semibold text-lg text-gray-700 mb-2">Drafting a response...</p>
          <div className="flex items-stretch space-x-4">
            <textarea
              className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-google-blue resize-none"
              rows="6"
              placeholder="Click 'Generate' to get an AI-powered draft, or type your own response here."
              value={generatedResponse}
              onChange={(e) => setGeneratedResponse(e.target.value)}
            />
            <button
              onClick={onGenerateResponse}
              disabled={isGenerating}
              className={`flex items-center justify-center p-3 rounded-xl text-white font-bold transition-all duration-300 ${isGenerating ? 'bg-gray-400' : 'bg-google-blue hover:bg-google-blue-dark active:bg-google-blue-dark'}`}
            >
              {isGenerating ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <Sparkles size={20} className="mr-2" />
                  Generate Response ✨
                </>
              )}
            </button>
          </div>
          <button
            onClick={onSolve}
            disabled={!generatedResponse || generatedResponse.trim() === ''}
            className={`mt-4 w-full p-3 rounded-xl text-white font-bold transition-all duration-300 ${!generatedResponse || generatedResponse.trim() === '' ? 'bg-gray-400 cursor-not-allowed' : 'bg-google-green hover:bg-google-green-dark'}`}
          >
            Mark as Solved and Submit
          </button>
        </div>
      )}
    </div>
  </div>
);

const App = () => {
  const [tickets, setTickets] = useState(ticketData);
  const [selectedTicketId, setSelectedTicketId] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState('');

  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  const generateResponse = async () => {
    setIsGenerating(true);
    setGeneratedResponse('');
    
    // Construct the prompt for the Gemini API
    const prompt = `You are an enthusiastic and helpful Google Student Ambassador. A student has submitted a help ticket. Draft a concise, encouraging response that directly addresses their question and promotes relevant Google tools.
    
    Student Ticket Subject: ${selectedTicket.subject}
    Student Ticket Message: ${selectedTicket.message}
    
    Draft Response:`;
    
    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      
      let response;
      let retries = 0;
      const maxRetries = 3;
      const initialDelay = 1000; // 1 second

      while (retries < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (response.status === 429) { // Too Many Requests
            const delay = initialDelay * Math.pow(2, retries);
            await new Promise(res => setTimeout(res, delay));
            retries++;
            continue;
          }
          if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
          }
          break; // Success, exit the loop
        } catch (e) {
          console.error(e);
          if (retries < maxRetries - 1) {
            const delay = initialDelay * Math.pow(2, retries);
            await new Promise(res => setTimeout(res, delay));
            retries++;
          } else {
            throw e; // Re-throw the error after max retries
          }
        }
      }

      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedResponse(text);
      } else {
        setGeneratedResponse("Apologies, I couldn't generate a response at this time. Please try again later.");
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setGeneratedResponse("An error occurred. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const solveTicket = () => {
    if (generatedResponse.trim() !== '') {
      const updatedTickets = tickets.map(t =>
        t.id === selectedTicketId ? { ...t, status: 'Solved', response: generatedResponse } : t
      );
      setTickets(updatedTickets);
      setSelectedTicketId(null); // Go back to the ticket list
      setGeneratedResponse('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 antialiased flex flex-col">
      <Header />
      <main className="container mx-auto p-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 flex-grow">
        <div className="bg-gray-50 rounded-2xl shadow-xl p-6 md:w-1/3 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Help Center</h2>
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-google-blue">
              <MessageSquare size={24} className="text-white" />
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome! This is my pitch for the Google Student Ambassador role, framed as a help desk. I'm ready to listen, strategize, and solve problems for our campus community.
          </p>
          {/* Your Profile Picture */}
          <div className="w-28 h-28 mx-auto my-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://drive.google.com/uc?export=download&id=1xvoAAgUF5A_ih77jRr64-DL8wj0WbMVT"
              alt="Profile picture of the user"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://placehold.co/112x112/4285F4/ffffff?text=Image+Unavailable";
                e.target.alt = "Placeholder image: The user's image is not available.";
              }}
            />
          </div>
          <TicketList tickets={tickets} onTicketSelect={setSelectedTicketId} />
          <GoogleDoodles />
          <ContactMe />
        </div>
        <div className="flex-1 flex flex-col rounded-2xl shadow-xl bg-gray-50 p-6">
          {selectedTicket ? (
            <TicketDetail
              ticket={selectedTicket}
              onBack={() => setSelectedTicketId(null)}
              onGenerateResponse={generateResponse}
              isGenerating={isGenerating}
              generatedResponse={generatedResponse}
              setGeneratedResponse={setGeneratedResponse}
              onSolve={solveTicket}
            />
          ) : (
            <div className="flex items-center justify-center flex-1 text-gray-400">
              <span className="text-lg">Select a ticket to view the details.</span>
            </div>
          )}
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-gray-500">
        MADE WITH LOVE FOR GOOGLE.
      </footer>
    </div>
  );
};

export default App;
