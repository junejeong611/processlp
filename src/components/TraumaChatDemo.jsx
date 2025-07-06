import React, { useState, useRef, useEffect } from 'react';

const TraumaChatDemo = () => {
  const [messages, setMessages] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef(null);
  const messagesAreaRef = useRef(null);

  // Animated conversation about processing hurt feelings
  const conversationFlow = [
    {
      text: "hi nisha, and welcome to your safe space. i'm here to listen and support you through whatever you're experiencing. this is a judgment-free zone where you can share whatever is on your mind.",
      sender: 'bot',
      delay: 1700
    },
    {
      text: "I've been really struggling lately... I feel like I'm constantly on edge and nothing seems to help.",
      sender: 'user',
      delay: 5100
    },
    {
      text: "i hear you, nisha. it sounds like you're carrying a lot right now. let's take a moment together to really understand what you're experiencing. when you say you're on edge, what does that feel like in your body?",
      sender: 'bot',
      delay: 4250
    },
    {
      text: "My chest feels tight, and I get this knot in my stomach. Sometimes I feel angry at everyone, but mostly I just feel... empty.",
      sender: 'user',
      delay: 5950
    },
    {
      text: "that makes complete sense. your body is telling you something important. i'm curious - underneath that anger, what else might be there? sometimes anger can be like a protective shield for more tender feelings.",
      sender: 'bot',
      delay: 5100
    },
    {
      text: "I think... I think I'm really hurt. My partner said some things that made me feel like I don't matter to them.",
      sender: 'user',
      delay: 6800
    },
    {
      text: "thank you for trusting me with that, nisha. that sounds deeply painful - feeling like you don't matter to someone you care about. that hurt makes complete sense. how are you feeling right now as you share this with me?",
      sender: 'bot',
      delay: 5950
    },
    {
      text: "Scared, I guess. Like maybe they're right and I really don't matter to anyone.",
      sender: 'user',
      delay: 5100
    },
    {
      text: "that fear is so understandable. when someone we love hurts us, it can make us question everything about ourselves. but i want you to know - you matter. you matter so much that you reached out for support. that takes courage.",
      sender: 'bot',
      delay: 6800
    },
    {
      text: "I never thought about it that way... it did take courage to come here.",
      sender: 'user',
      delay: 4250
    },
    {
      text: "exactly. and that courage shows me how much you care about yourself and your healing. when you think about that younger part of you that learned to fear not mattering, what do you think they needed to hear?",
      sender: 'bot',
      delay: 7650
    },
    {
      text: "Maybe that they were enough just as they were... that they didn't have to prove their worth.",
      sender: 'user',
      delay: 5950
    },
    {
      text: "beautiful, nisha. you are enough, just as you are. you don't have to prove your worth to anyone. how does it feel to say that about yourself?",
      sender: 'bot',
      delay: 5100
    }
  ];

  const navItems = [
    { 
      key: 'dashboard', 
      label: 'dashboard', 
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      key: 'history', 
      label: 'history', 
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7v5l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      key: 'insights', 
      label: 'insights', 
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 19V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 19V3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      key: 'settings', 
      label: 'settings', 
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const addMessage = (message) => {
    setMessages(prev => [...prev, {
      ...message,
      id: Date.now() + Math.random(),
      timestamp: new Date().toISOString()
    }]);
  };

  // Auto-play conversation (no auto-scroll)
  useEffect(() => {
    if (currentMessageIndex < conversationFlow.length) {
      const timer = setTimeout(() => {
        addMessage(conversationFlow[currentMessageIndex]);
        setCurrentMessageIndex(prev => prev + 1);
      }, conversationFlow[currentMessageIndex].delay);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div
      style={{ 
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        minHeight: '400px',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(135deg, #f7fafc 0%, #e8f2ff 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="trauma-chat-demo-outer"
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        style={{
          display: 'none', // default hidden, shown in media query
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 2001,
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '12px',
          padding: '12px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="mobile-menu-btn demo-sidebar-toggle"
        aria-label="Open sidebar"
        aria-expanded={showMobileNav}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile Navigation Overlay */}
      {showMobileNav && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 2000
          }}
          className="mobile-overlay"
          onClick={() => setShowMobileNav(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav 
        style={{
          width: isNavCollapsed ? '96px' : '280px',
          height: '100%',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
          borderRight: '1px solid rgba(219, 230, 243, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          position: 'relative',
          left: 0,
          top: 0,
          boxShadow: '0 0 32px rgba(60, 90, 130, 0.04)',
          zIndex: 100,
          transition: 'width 0.3s ease, transform 0.3s ease',
          flexShrink: 0
        }} 
        className={`nav-sidebar demo-sidebar` + (showMobileNav ? ' nav-sidebar-open' : '')}
      >
        {/* Header */}
        <div style={{ 
          padding: '1.5rem',
          borderBottom: '1px solid rgba(219, 230, 243, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          justifyContent: isNavCollapsed ? 'center' : 'flex-start'
        }}>
          <button
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid #dbe6f3',
              borderRadius: '10px',
              background: 'transparent',
              cursor: 'default',
              opacity: 0.6,
              color: '#6b7a90',
              transition: 'all 0.2s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={isNavCollapsed ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #7bb6fa 0%, #5a8fd6 100%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}>
            <svg width="28" height="24" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M60,88 
                       C42,72 18,52 18,35 
                       C18,22 28,12 42,12 
                       C50,12 57,16 60,22
                       C63,17 71,13 80,13
                       C92,13 100,22 100,35
                       C100,54 78,74 60,88 Z" 
                    fill="#7bb6fa" 
                    stroke="none">
              </path>
            </svg>
          </div>
          
          {!isNavCollapsed && (
            <div style={{ opacity: 1, transition: 'opacity 0.2s ease' }}>
              <h1 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#3a5a8c',
                margin: '0',
                textTransform: 'lowercase',
                letterSpacing: '-0.01em'
              }}>process</h1>
              <p style={{
                fontSize: '0.8rem',
                color: '#8ca0b8',
                margin: '0',
                textTransform: 'lowercase'
              }}>emotional support</p>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <div style={{ flex: 1, padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1.5rem',
                margin: '0 0.75rem',
                background: item.key === 'dashboard' ? 'linear-gradient(135deg, rgba(123, 182, 250, 0.08) 0%, rgba(90, 143, 214, 0.08) 100%)' : 'transparent',
                border: 'none',
                borderRadius: '12px',
                color: item.key === 'dashboard' ? '#3a5a8c' : '#6b7a90',
                fontSize: '0.9rem',
                fontWeight: item.key === 'dashboard' ? '600' : '500',
                cursor: 'pointer',
                textAlign: 'left',
                textTransform: 'lowercase',
                transition: 'all 0.2s ease',
                justifyContent: isNavCollapsed ? 'center' : 'flex-start',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (item.key !== 'dashboard') {
                  e.target.style.background = 'rgba(123, 182, 250, 0.04)';
                  e.target.style.color = '#3a5a8c';
                }
              }}
              onMouseLeave={(e) => {
                if (item.key !== 'dashboard') {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#6b7a90';
                }
              }}
            >
              {item.key === 'dashboard' && (
                <div style={{
                  position: 'absolute',
                  left: '-0.75rem',
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: 'linear-gradient(180deg, #7bb6fa 0%, #5a8fd6 100%)',
                  borderRadius: '0 2px 2px 0'
                }} />
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              {!isNavCollapsed && (
                <span style={{ opacity: 1, transition: 'opacity 0.2s ease' }}>
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Chat Area */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'margin-left 0.3s ease'
        }}
        className="main-chat-area"
      >
        {/* Chat Header */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
          padding: '2rem 2rem 1.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2c5aa0',
              margin: '0 0 0.5rem 0',
              textTransform: 'lowercase',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #2c5aa0 0%, #4a7bc8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>hi nisha</h1>
            <p style={{
              fontSize: '1rem',
              color: '#4a5568',
              margin: '0',
              textTransform: 'lowercase',
              fontWeight: '400',
              opacity: 0.8
            }}>i'm here to help you process your emotions</p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '50px',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 1px 8px rgba(45, 90, 160, 0.04)'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#38a169',
              boxShadow: '0 0 12px rgba(56, 161, 105, 0.4)'
            }} />
            <span style={{
              fontSize: '0.75rem',
              color: '#4a5568',
              textTransform: 'lowercase',
              fontWeight: '500'
            }}>connected</span>
          </div>
        </div>

        {/* Messages Area */}
        <div
          ref={messagesAreaRef}
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '2rem'
          }}
        >
          {messages.map((message, index) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                opacity: 0,
                animation: `slideIn 0.6s ease forwards ${index * 0.1}s`
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '1rem',
                maxWidth: '70%',
                flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
              }}>
                {message.sender === 'bot' && (
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6b9bd7 0%, #4a7bc8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(45, 90, 160, 0.06)',
                    border: '2px solid rgba(255, 255, 255, 0.8)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                )}
                <div style={{
                  position: 'relative',
                  borderRadius: '18px',
                  padding: '1rem 1.5rem',
                  backdropFilter: 'blur(12px)',
                  ...(message.sender === 'user' ? {
                    background: 'linear-gradient(135deg, #6b9bd7 0%, #4a7bc8 100%)',
                    color: '#ffffff',
                    borderBottomRightRadius: '8px',
                    boxShadow: '0 4px 16px rgba(45, 90, 160, 0.06)'
                  } : {
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a365d',
                    borderBottomLeftRadius: '8px',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: '0 1px 8px rgba(45, 90, 160, 0.04)'
                  })
                }}>
                  <div style={{
                    marginBottom: '0.5rem',
                    fontWeight: 'inherit',
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>
                    {message.text}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    marginTop: '0.25rem'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      opacity: 0.6,
                      fontWeight: '500'
                    }}>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area - Disabled for demo */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(226, 232, 240, 0.6)',
          padding: '1.5rem 2rem'
        }}>
          <div style={{
            background: '#ffffff',
            border: '2px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '24px',
            padding: '1rem',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1rem',
            boxShadow: '0 1px 8px rgba(45, 90, 160, 0.04)',
            opacity: 0.7
          }}>
            <div style={{
              flex: 1,
              minHeight: '52px',
              padding: '1rem 0.75rem',
              border: 'none',
              background: 'transparent',
              fontSize: '1rem',
              color: '#718096',
              lineHeight: '1.5',
              display: 'flex',
              alignItems: 'center',
              fontStyle: 'italic'
            }}>
              conversation in progress - demo mode
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button
                disabled
                style={{
                  padding: '1rem 1.5rem',
                  background: 'linear-gradient(135deg, #718096 0%, rgba(113, 128, 150, 0.8) 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'not-allowed',
                  minWidth: '110px',
                  boxShadow: '0 4px 16px rgba(45, 90, 160, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textTransform: 'lowercase',
                  opacity: 0.5
                }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path 
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span>send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @media (max-width: 768px) {
          .demo-sidebar,
          .demo-sidebar-toggle {
            display: none !important;
          }
          .main-chat-area {
            min-width: 0 !important;
            width: 100vw !important;
            height: auto !important;
            padding: 0.5rem !important;
          }
          .trauma-chat-demo-outer {
            height: auto !important;
            min-height: 400px !important;
          }
        }
        @media (min-width: 769px) {
          .trauma-chat-demo-outer {
            height: 650px !important;
            min-height: 650px !important;
            max-height: 650px !important;
          }
          .nav-sidebar {
            transform: translateX(0) !important;
            position: relative !important;
            width: ${isNavCollapsed ? '96px' : '280px'} !important;
            max-width: 280px !important;
            height: 100% !important;
            min-height: 400px !important;
            box-shadow: 0 0 32px rgba(60, 90, 130, 0.04) !important;
            border-right: 1px solid rgba(219, 230, 243, 0.6) !important;
            border-bottom: none !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            flex-direction: column !important;
          }
          .main-chat-area {
            min-width: 0;
            width: auto;
            height: 100% !important;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TraumaChatDemo; 