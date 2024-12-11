// Contact.js
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineMailOutline, MdOutlinePhone } from 'react-icons/md';
import { toast } from 'react-toastify';
import InputField from '../../components/common/InputField/InputField';
import Button from '../../components/common/buttons/Button/Button';
import DropdownField from '../../components/common/dropdowns/Dropdown/DropdownField';
import {
  contactTemplateId,
  publicKey,
  RANGE_VALUES,
  serviceId,
} from '../../constants';
import company from '../../constants/company';
import { isValidEmail } from '../../utils/helper';
import SalaryRangeSlider from './SalaryRangeSlider';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    company: '',
    message: '',
  });
  const [values, setValues] = useState(RANGE_VALUES);
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const [serviceState, setServiceState] = useState('');

  const services = [
    'Website',
    'Mobile App',
    'Digital Product',
    'Software Development',
  ];

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    console.log(e.target);
    // return;
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.phone === '' ||
      // formData.company === '' ||
      formData.message === ''
    ) {
      toast.error('Please fill all the fields');
      return;
    }
    if (!serviceState) {
      toast.error('Please select a service');
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    // if (!isValidPhoneNumber(formData.phone)) {
    //   toast.error('Please enter a valid phone number');
    //   return;
    // }

    try {
      const response = await emailjs.sendForm(
        serviceId,
        contactTemplateId,
        e.target,
        publicKey
      );
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        role: '',
      });
      setServiceState('');
    } catch (error) {
      toast.error('Failed to send message');
    }
  };
  const isMobile = window.innerHeight <= 786;

  const handleDropdownChange = (value) => {
    setFormData({ ...formData, role: value });
  };

  const options = [
    { value: '', label: 'Select Role' },
    { value: 'client', label: 'Client' },
    { value: 'employee', label: ' Employee' },
    { value: 'other', label: 'Other' },
  ];
  return (
    <>
      <div className="container mx-auto flex md:items-center   md:justify-center mt-20">
        <div className="flex md:justify-center md:flex-row flex-col space-x-20">
          <div className="ml-12 mb-12">
            <div>
              <p className="text-sm">{t('contactUs.title')}</p>
              <p className="text-4xl font-bold w-72 mt-2">
                {t('contactUs.heading.black')}
                <span className="text-blue-600">
                  {t('contactUs.heading.blue')}
                </span>
              </p>
            </div>
            <div className="mt-4">
              <h1 className="font-bold">EMAIL</h1>
              <div className="flex ">
                <MdOutlineMailOutline color="#175CFF" />
                <div className="text-xs ml-2">{company.companyEmail}</div>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="font-bold">PHONE</h1>
              <div className="flex ">
                <MdOutlinePhone color="#175CFF" />
                <div className="text-xs ml-2">+{company.phoneNumber}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm mb-2">{t('contactUs.servicesTitle')}</div>
            <div className="flex items-center gap-5">
              <div className="flex  flex-wrap    space-y-3">
                {services.map((service, index) => (
                  <button
                    key={service}
                    className={`border border-gray-200 pl-3 mt-2 mr-3   pr-3 text-xs rounded-sm ${
                      service === serviceState ? 'bg-blue-600 text-white' : ''
                    } ${index === 0 ? 'py-2' : ''} `}
                    onClick={() => setServiceState(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
              {/* <div className="flex items-center mt-3 space-x-2">
                <FaArrowLeftLong color="#175CFF" />
                <FaArrowRightLong color="#175CFF" />
              </div> */}
            </div>

            <div className="mt-4  md:w-[550px]">
              <form onSubmit={handleSubmitForm}>
                <div className="mb-2 grid  grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    name="from_name"
                    value={formData.name}
                    onChange={(value) => handleInputChange('name', value)}
                    isCompulsory={true}
                    placeholder="Enter your name"
                  />
                  <InputField
                    label="Email"
                    name="from_email"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    isCompulsory={true}
                    placeholder="Enter your email"
                  />
                  <InputField
                    label="Phone"
                    name="from_phone"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    placeholder="Enter your phone number"
                    isCompulsory={true}
                    type="number"
                  />
                  {/* Add dropdown to select role */}
                  <DropdownField
                    label="Select your role"
                    name="customDropdown"
                    options={options}
                    value={formData.role}
                    onChange={handleDropdownChange}
                    placeholder="Select your role"
                    isCompulsory={true}
                    width={250}
                    color="#f8f9fa"
                    textColor="#333"
                  />
                  <input type="hidden" name="from_role" value={formData.role} />
                </div>
                <input type="hidden" name="service" value={serviceState} />

                <input
                  type="hidden"
                  name="start_range"
                  value={
                    values[0].toLocaleString() || 'No start range selected'
                  }
                />
                <input
                  type="hidden"
                  name="end_range"
                  value={values[1].toLocaleString() || 'No end range selected'}
                />

                <SalaryRangeSlider setValues={setValues} values={values} />

                <div className="w-full   mb-5">
                  <InputField
                    name="message"
                    value={formData.message}
                    onChange={(value) => handleInputChange('message', value)}
                    isTextArea={true}
                    placeholder="Enter your message"
                    width={!isMobile ? 535 : 535}
                    isCompulsory
                    displaySteric={false}
                  />
                </div>
                <Button
                  text="Submit"
                  type="submit"
                  theme="blue"
                  title={'Submit'}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
