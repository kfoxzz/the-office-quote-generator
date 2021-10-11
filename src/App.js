import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import QuoteButton from './components/QuoteButton';
import Quote from './components/Quote';
import Footer from './components/Footer';
import InfoCard from './components/InfoCard';

function App() {

  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  function updateQuote(data) {
    setQuote(data);
    setLoading(false);
  }

  function updateLoading() {
    setLoading(true);
  }

  return (
    <div className="App  d-flex flex-column min-vh-100 bg-gray">
      <div className="flex-grow-1">
        <Header />
        <InfoCard />
        <QuoteButton
          updateQuote={updateQuote}
          updateLoading={updateLoading}
          loading={loading}
        />
        <Quote quote={quote} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
