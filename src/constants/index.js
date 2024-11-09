const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const contactTemplateId = process.env.REACT_APP_CONTACT_EMAIL_TEMPLATE_ID;
const applyJobTemplateId = process.env.REACT_APP_APPLY_JOB_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
const RANGE_STEP = 1000;
const MIN_SALARY = 1000;
const MAX_SALARY = 100000;
const RANGE_VALUES = [25000, 75000];
export {
  MAP_API_KEY,
  MAX_SALARY,
  MIN_SALARY,
  RANGE_STEP,
  RANGE_VALUES,
  applyJobTemplateId,
  contactTemplateId,
  publicKey,
  serviceId,
};
