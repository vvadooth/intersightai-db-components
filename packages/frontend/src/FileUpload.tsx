import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// A simple FileIcon component for display.
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      setError('Only PDF, JPEG, or PNG files are allowed.');
      return;
    }
    setError('');
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  // Trigger file input click programmatically.
  const triggerFileSelect = () => {
    const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    inputElement?.click();
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div
          className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer"
          onClick={triggerFileSelect}
        >
          <FileIcon className="w-12 h-12" />
          <span className="text-sm font-medium text-gray-500">
            Drag and drop a file or click to browse
          </span>
          <span className="text-xs text-gray-500">
            Only PDF, JPEG, or PNG allowed
          </span>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <div className="space-y-2 text-sm">
          <Label htmlFor="file" className="text-sm font-medium">
            File
          </Label>
          <Input
            id="file"
            type="file"
            accept=".pdf,image/jpeg,image/png"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={triggerFileSelect} size="lg">
          Upload File
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FileUpload;
