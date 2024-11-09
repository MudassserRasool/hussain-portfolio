import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { applyJobTemplateId, publicKey, serviceId } from '../../../constants';
import { isValidEmail, isValidPhoneNumber } from '../../../utils/helper';
import InputField from '../../common/InputField/InputField';
import { inputWidth, textColor } from './style';

const JobApplyForm = ({ jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.phone === '' ||
      formData.message === ''
    ) {
      toast.error('Please fill all the fields');
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    // if (e.target.file.files.length === 0) {
    //   toast.error('Please upload a file');
    //   return;
    // }
    if (!isValidPhoneNumber(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }
    try {
      const response = await emailjs.sendForm(
        serviceId,
        applyJobTemplateId,
        e.target,
        publicKey
      );
      toast.success('Message sent successfully');
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message');
    }
  };
  return (
    <div
      style={{ height: 430 }}
      className="bg-indigo-950 w-72  ml-32 mt-2 rounded-md h-auto"
    >
      <h1 className="text-lg font-semibold text-white mt-3 ml-3 mb-1">
        Apply for this position
      </h1>
      <form className="flex flex-col p-2 gap-5 " onSubmit={handleSubmitForm}>
        <InputField
          type="text"
          name="from_name"
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
          isCompulsory={true}
          placeholder="Enter your name"
          width={inputWidth}
          color="#1E1B4B"
          displaySteric={false}
          textColor={textColor}
        />
        <InputField
          type="email"
          name="from_email"
          value={formData.email}
          onChange={(value) => handleInputChange('email', value)}
          isCompulsory={true}
          placeholder="Enter your email"
          width={inputWidth}
          color="#1E1B4B"
          displaySteric={false}
          textColor={textColor}
        />
        <InputField
          type="tel"
          name="from_phone"
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
          placeholder="Enter your phone number"
          isCompulsory={true}
          width={inputWidth}
          color="#1E1B4B"
          displaySteric={false}
          textColor={textColor}
        />
        <InputField
          type="text"
          name="message"
          value={formData.message}
          onChange={(value) => handleInputChange('message', value)}
          placeholder="Cover letter"
          isCompulsory={true}
          width={inputWidth}
          color="#1E1B4B"
          isTextArea={true}
          displaySteric={false}
          textColor={textColor}
        />
        <input type="hidden" value={jobTitle} name="job_title" />
        {/* <input
          className=" bg-indigo-950 text-white border border-gray-600 p-6 rounded-md"
          type="file"
          name="file"
          accept=".pdf,.doc,.docx"
        /> */}
        <div className="flex justify-center ">
          <button className="w-80 bg-blue-600 p-2 text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JobApplyForm;
