import React from 'react';
import FileUpload from '../src/FileUpload';
import AddUrl from '../src/AddUrl';

const Home: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
  };

  const handleUrlSubmit = (url: string) => {
    console.log('Submitted URL:', url);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="text-3xl font-bold mb-6">Intersight AI Components Demo</h1>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">File Upload</h2>
        <FileUpload onFileSelect={handleFileSelect} />
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Add URL</h2>
        <AddUrl onUrlSubmit={handleUrlSubmit} />
      </section>
    </div>
  );
};

export default Home;
