import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface AddUrlProps {
  onUrlSubmit?: (url: string) => void;
}

const AddUrl: React.FC<AddUrlProps> = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      new URL(url); // Basic URL validation.
      setError('');
      if (onUrlSubmit) {
        onUrlSubmit(url);
      }    } catch {
      setError('Invalid URL');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button type="submit">Submit URL</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddUrl;
