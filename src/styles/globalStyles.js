export const COLORS = {
  orange: '#FA4616',
  violet: '#410098',
  yellow: '#FFBB3F',
  black: '#000000',
  white: '#FFFFFF',
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;0,800;1,400;1,600&display=swap');
  
  :root {
    --side-width: clamp(30px, 2.4vw, 80px);
  }

  body {
    font-family: 'Fira Sans', sans-serif;
    margin: 0;
    background-color: ${COLORS.white};
    color: ${COLORS.black};
    overflow-x: hidden;
  }

  h1, h2, h3 { font-weight: 800; text-transform: none; }
  
  .atikon-list { list-style: none; padding-left: 0; }
  .atikon-list li { position: relative; padding-left: 1.8rem; margin-bottom: 0.8rem; font-weight: 400; }
  .atikon-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    font-weight: 400;
  }
  .bg-white .atikon-list li::before, .bg-violet .atikon-list li::before { color: ${COLORS.orange}; }
  .bg-orange .atikon-list li::before, .bg-yellow .atikon-list li::before { color: ${COLORS.violet}; }

  .atikon-underline {
    display: inline-block;
    border-bottom: 0.1em solid;
    padding-bottom: 0.15em;
  }
  .bg-white .atikon-underline, .bg-violet .atikon-underline { border-color: ${COLORS.orange}; }
  .bg-orange .atikon-underline, .bg-yellow .atikon-underline { border-color: ${COLORS.yellow}; }

  .atikon-table { width: 100%; border-collapse: collapse; }
  .atikon-table th { 
    border-top: 3px solid ${COLORS.orange}; 
    border-bottom: 3px solid ${COLORS.orange}; 
    padding: 1.25rem; 
    text-align: left;
    color: ${COLORS.violet};
    font-weight: 800;
  }
  .atikon-table td { border-bottom: 1px solid ${COLORS.orange}; padding: 1.25rem; }

  .animate-fade { animation: fadeIn 0.5s ease-out forwards; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
`;
