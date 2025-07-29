import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, FileText, Mail, Phone, User, X } from 'lucide-react';
import React, { useState } from 'react';

interface CourseEnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  level: string;
}

const CourseEnrollmentForm: React.FC<CourseEnrollmentFormProps> = ({
  isOpen,
  onClose,
  courseTitle,
  level
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_topic: '',
    motivation: ''
  });

  if (!isOpen) return null;

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log('Submitting payload:', {
    ...formData,
    courseTitle,
    level,
  });

  try {
    const response = await fetch('http://localhost:3000/api/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        courseTitle,
        level,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit enrollment');
    }

    const data = await response.json();
    console.log('Server response:', data);
    alert('Enrollment submitted successfully!');
    onClose();
  } catch (error) {
    console.error(error);
    alert('There was an error submitting the form.');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-lg bg-white shadow-2xl animate-scale-in">
        <CardHeader className="relative">
          <Button
            onClick={onClose}
            variant="outline"
            size="icon"
            className="absolute top-4 right-4"
          >
            <X size={16} />
          </Button>
          <CardTitle className="text-2xl font-bold text-gray-900 pr-12">
            Enroll in Course
          </CardTitle>
          <p className="text-gray-600">
            {courseTitle} - {level} Level
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User size={16} />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic" className="flex items-center gap-2">
                <Calendar size={16} />
                Choose Your Topic
              </Label>
              <select  id="course_topic"
    name="course_topic"
    value={formData.course_topic}
   onChange={handleChange} >
                <option value="">Select Your Topic</option>
                <option value="c">C</option>
                <option value="c++">C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="webdev">Web Development</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation" className="flex items-center gap-2">
                <FileText size={16} />
                Why this course?
              </Label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Tell us why you want to take this course"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Submit Enrollment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseEnrollmentForm;
